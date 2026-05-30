const nodemailer = require('nodemailer')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
}

module.exports.handler = async function (event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) }
  }

  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch (error) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON body' }) }
  }

  const { name, email, message, subject, to } = body
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpSecure = process.env.SMTP_SECURE === 'true'
  const emailFrom = process.env.EMAIL_FROM || smtpUser
  const emailTo = to || process.env.EMAIL_TO

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Name, email, and message are required.' }),
    }
  }

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !emailTo) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'SMTP configuration is missing.' }),
    }
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const mailOptions = {
    from: emailFrom,
    to: emailTo,
    replyTo: email,
    subject: subject || `Portfolio Contact from ${name}`,
    html: `
      <h3>Portfolio Contact</h3>
      <table style="width:100%; max-width:600px; border-collapse: collapse; font-family: Arial, sans-serif;">
        <tbody>
          <tr style="background:#f4f6fb;">
            <td style="padding:12px 16px; font-weight:700; border:1px solid #d1d5db; width:120px;">Name</td>
            <td style="padding:12px 16px; border:1px solid #d1d5db;">${name}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px; font-weight:700; border:1px solid #d1d5db;">Email</td>
            <td style="padding:12px 16px; border:1px solid #d1d5db;"><a href=\"mailto:${email}\" style=\"color:#2563eb; text-decoration:none;\">${email}</a></td>
          </tr>
          <tr style="background:#f4f6fb;">
            <td style="padding:12px 16px; font-weight:700; border:1px solid #d1d5db; vertical-align:top;">Message</td>
            <td style="padding:12px 16px; border:1px solid #d1d5db;">${message.replace(/\n/g, '<br/>')}</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top:20px; color:#6b7280; font-size:14px;">This message was sent from the portfolio contact form.</p>
    `,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, info }),
    }
  } catch (error) {
    console.error('Serverless email error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to send email.', details: error.message }),
    }
  }
}
