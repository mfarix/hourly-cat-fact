const nodemailer = require('nodemailer')
const fetch = require('node-fetch')

exports.handler = async (event, context, callback) => {
    // setup nodemailer
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 587,
        auth: {
            user: "MAILTRAP_USERNAME", //generated by Mailtrap
            pass: "MAILTRAP_PASSWORD" //generated by Mailtrap
        }
    });

    // gather cat fact
    const fact = await fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(json => json.fact)
        .catch(err => callback(Error(err)))
        
    const message = {
        from: 'cat@fact.com', // Sender address
        to: 'to@email.com',         // List of recipients
        subject: '😸Your hourly cat fact!', // Subject line
        text: fact // Plain text body
    };

    // sends the email
    await transporter.sendMail(message)
};
