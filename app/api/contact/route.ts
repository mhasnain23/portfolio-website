import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        // Parse the incoming data
        const { firstName, lastName, email, phone, message } = await request.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Use environment variables for security
                pass: process.env.EMAIL_PASS, // Your app-specific password
            },
        });

        // Send email
        await transporter.sendMail({
            from: email, // Sender's email
            to: process.env.EMAIL_USER, // Your email address
            subject: `New Contact Message from ${firstName} ${lastName}`,
            text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
        });

        // Return success response
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error); // Log the exact error
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
