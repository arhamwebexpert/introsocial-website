import mongoose from 'mongoose';

const EventMessageSchema = new mongoose.Schema(
    {
        eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        text: { type: String, required: true, trim: true },
    },
    { timestamps: true }
);

EventMessageSchema.index({ eventId: 1, createdAt: 1 });

export default mongoose.models.EventMessage || mongoose.model('EventMessage', EventMessageSchema);
