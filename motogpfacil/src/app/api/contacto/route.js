import { createClient } from '@supabase/supabase-js'
import nodemailer from "nodemailer";

const supabaseUrl = 'https://cqaluvsaxhdiultpaqnl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxYWx1dnNheGhkaXVsdHBhcW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NjEwOTYsImV4cCI6MjA1MjMzNzA5Nn0.l4AyBhhkgTl5qvKgvpovzV2VfntzHmCN6w_wIMgIYGg"
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request) {
  try {
    const { nombre, correo, mensaje } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: correo,
      to: "josenavarrosegundodam@gmail.com",
      subject: `Mensaje de contacto de ${nombre}`,
      text: `${mensaje}\n\nDe: ${correo}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email enviado correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar email:", error);
    return new Response(
      JSON.stringify({ message: "Error al enviar email" }),
      { status: 500 }
    );
  }
}


