// app/api/upload/route.js
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { getCurrentUser } from '@/lib/auth';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
    try {
        const user = await getCurrentUser();
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });

        if (!file.type.startsWith('image/')) {
            return NextResponse.json({ error: 'Only image files are allowed' }, { status: 400 });
        }

        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json({ error: 'File too large. Max 10MB.' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload buffer to Cloudinary (works on serverless — no local filesystem needed)
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: 'introsocial', resource_type: 'image' },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        });

        return NextResponse.json({ url: result.secure_url }, { status: 201 });
    } catch (err) {
        console.error('[UPLOAD ERROR]', err);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
