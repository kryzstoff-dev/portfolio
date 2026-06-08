'use server';

import { Resend } from "resend";
import PortfolioEmail from "../../../emails/PortfolioEmail";
import { MessageType } from "@/features/contact/types/message.types";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmail(formData: MessageType) {
    const { name, email, company, projectType, message } = formData;

    try {
        const response = await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: "alchristopheroppa0143@gmail.com",
            replyTo: email,
            subject: `New Portfolio Inquiry: ${projectType}`,
            react: PortfolioEmail({ name, email, company, projectType, message }),
        });
        return response;
    } catch (error) {
        throw new Error(`Failed to send email: ${error instanceof Error ? error.message : String(error)}`);
    }
}