import { sendEmail } from "@/services/resend/sendEmail";

export async function POST(request: Request) {
    const formData = await request.json();
    try {
        const response = await sendEmail(formData);
        if (response.error) return new Response(JSON.stringify({ success: false, error: response.error }), {
            status: response.error.statusCode || 500,
            headers: { "Content-Type": "application/json" },
        });
        
        return new Response(JSON.stringify({ success: true, data: response }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error instanceof Error ? error.message : String(error) }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}