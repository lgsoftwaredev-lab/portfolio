export default async function handler(req, res) {
  // Configurar CORS básico
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido. Utilizar POST.' });
  }

  try {
    const { name, email, type, subject, message, botcheck } = req.body || {};

    // 1. Filtro Anti-Spam (Honeypot): Los bots llenan campos ocultos
    if (botcheck) {
      return res.status(200).json({ success: true, message: 'Mensaje procesado con éxito.' });
    }

    // 2. Validación de campos obligatorios
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor completá tu nombre, email y el mensaje.' 
      });
    }

    // 3. Validación básica de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'El correo electrónico proporcionado no es válido.' 
      });
    }

    // 4. Enrutamiento del destinatario seguro en el servidor (NUNCA expuesto en el código cliente ni en GitHub)
    const isFreelance = type === 'freelance';
    const targetEmail = isFreelance
      ? (process.env.EMAIL_FREELANCE || process.env.CONTACT_EMAIL)
      : (process.env.EMAIL_LABORAL || process.env.CONTACT_EMAIL);

    const emailSubject = subject || `[Portfolio] Nuevo contacto ${isFreelance ? 'Freelance' : 'Laboral'}: ${name}`;
    const emailBody = `Has recibido un nuevo mensaje desde tu portfolio web:

• Remitente: ${name}
• Email de respuesta: ${email}
• Categoría: ${isFreelance ? 'Proyecto Freelance & Consultoría' : 'Propuesta Laboral & Empleo'}
• Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}

----------------- MENSAJE -----------------
${message}
--------------------------------------------`;

    // 5. Envío vía Resend (si está configurado RESEND_API_KEY en variables de entorno Vercel)
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>',
          to: [targetEmail],
          reply_to: email,
          subject: emailSubject,
          text: emailBody,
        }),
      });

      const resendData = await resendRes.json();
      if (!resendRes.ok) {
        console.error('Error de Resend:', resendData);
        throw new Error(resendData.message || 'Error al enviar mediante Resend');
      }

      return res.status(200).json({ 
        success: true, 
        message: '¡Mensaje enviado con éxito! Te responderé a la brevedad.' 
      });
    }

    // 6. Envío alternativo vía Formspree (si está configurado FORMSPREE_ID)
    const formspreeId = isFreelance 
      ? (process.env.FORMSPREE_FREELANCE_ID || process.env.FORMSPREE_ID)
      : (process.env.FORMSPREE_LABORAL_ID || process.env.FORMSPREE_ID);

    if (formspreeId) {
      const formspreeRes = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          category: isFreelance ? 'Freelance' : 'Laboral',
          subject: emailSubject,
          message,
        }),
      });

      if (formspreeRes.ok) {
        return res.status(200).json({ 
          success: true, 
          message: '¡Mensaje enviado con éxito! Te responderé a la brevedad.' 
        });
      }
    }

    // 7. Envío alternativo vía Web3Forms (si está configurado WEB3FORMS_KEY)
    if (process.env.WEB3FORMS_KEY) {
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_KEY,
          name,
          email,
          subject: emailSubject,
          message: emailBody,
          to_email: targetEmail,
        }),
      });

      const web3Data = await web3Res.json();
      if (web3Data.success) {
        return res.status(200).json({ 
          success: true, 
          message: '¡Mensaje enviado con éxito! Te responderé a la brevedad.' 
        });
      }
    }

    // 8. Modo local / fallback seguro si aún no se configuró la API key en Vercel
    console.log(`[Contact Form Received] Target: ${targetEmail}, From: ${name} (${email}), Message: ${message}`);
    return res.status(200).json({ 
      success: true, 
      simulated: true,
      message: '¡Mensaje recibido con éxito! Tus datos fueron procesados de forma segura.' 
    });

  } catch (error) {
    console.error('Error en /api/contact:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Hubo un error al procesar tu mensaje. Por favor intentá nuevamente o conectemos vía LinkedIn.' 
    });
  }
}
