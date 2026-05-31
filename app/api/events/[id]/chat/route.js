// app/api/events/[id]/chat/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Event from '@/models/Event';
import EventMessage from '@/models/EventMessage';
import { getCurrentUser } from '@/lib/auth';

// Check if user is allowed to access this event's chat.
// Allowed: event creator + users who RSVP'd as "going".
async function canAccessChat(event, userId) {
    if (event.createdBy.toString() === userId) return true;
    return event.rsvps.some(
        (r) => r.userId.toString() === userId && r.status === 'going'
    );
}

// GET /api/events/[id]/chat — fetch event chat messages
export async function GET(request, { params }) {
    try {
        await dbConnect();
        const user = await getCurrentUser();
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { id } = await params;

        const event = await Event.findById(id);
        if (!event) return NextResponse.json({ error: 'Event not found' }, { status: 404 });

        if (!(await canAccessChat(event, user.userId))) {
            return NextResponse.json(
                { error: 'Only attendees (going) can access the event chat' },
                { status: 403 }
            );
        }

        const messages = await EventMessage.find({ eventId: id })
            .populate('userId', 'name email')
            .sort({ createdAt: 1 });

        return NextResponse.json({ messages });
    } catch (err) {
        console.error('[GET EVENT CHAT ERROR]', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// POST /api/events/[id]/chat — send a message to the event chat
export async function POST(request, { params }) {
    try {
        await dbConnect();
        const user = await getCurrentUser();
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { id } = await params;
        const { text } = await request.json();

        if (!text?.trim()) {
            return NextResponse.json({ error: 'Message text is required' }, { status: 400 });
        }

        const event = await Event.findById(id);
        if (!event) return NextResponse.json({ error: 'Event not found' }, { status: 404 });

        if (!(await canAccessChat(event, user.userId))) {
            return NextResponse.json(
                { error: 'Only attendees (going) can send messages in the event chat' },
                { status: 403 }
            );
        }

        const message = await EventMessage.create({
            eventId: id,
            userId: user.userId,
            text: text.trim(),
        });

        await message.populate('userId', 'name email');
        return NextResponse.json({ message }, { status: 201 });
    } catch (err) {
        console.error('[POST EVENT CHAT ERROR]', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
