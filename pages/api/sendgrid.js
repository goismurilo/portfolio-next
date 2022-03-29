import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: "murilodevs@gmail.com", // Your email where you'll receive emails
            from: "murilogois59@gmail.com", // your website email address here
            subject: `${req.body.subject}`,
            html: `<div>You've got a mail</div>`,
        });
    } catch {
        console.log('Error sending email');
        return res.status(500).json({ error: 'Error sending email' });
    }
    return res.status(200).json({ error: '' });
}

export default sendEmail;