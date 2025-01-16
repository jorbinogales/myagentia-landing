import { Resend } from 'resend';
import { template } from './template';

export async function POST(request) {
  try {
    // Extraer el cuerpo de la solicitud
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'El campo email es obligatorio' }), { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Enviar el correo
    const response = await resend.emails.send({
      from: 'MyAgentia <support@myagentia.com>',
      to: email,
      subject: '✅ Solicitud de Demo Recibida 🎉',
      html: template
    });

    // Respuesta exitosa
    return new Response(JSON.stringify({ message: 'Correo enviado exitosamente', response }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);

    return new Response(JSON.stringify({ error: 'Error al enviar el correo', details: error.message }), { status: 500 });
  }
}