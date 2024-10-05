import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface MailData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message }: MailData = req.body;

        // Set up Nodemailer transport with Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'codewithhasnainbro@gmail.com', // here's my email
                pass: 'your-email-password',
            },
        });

        const mailOptions = {
            from: email,
            to: 'codewithhasnainbro@gmail.com',
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            text: message,
            phone: phone,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ message: 'Only POST requests allowed' });
    }
}
