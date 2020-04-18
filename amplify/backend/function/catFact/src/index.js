const nodemailer = require('nodemailer')
const fetch = require('node-fetch')

const dotenv = require('dotenv');
dotenv.config();

exports.handler = async (event, context, callback) => {
    // setup nodemailer
    const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        auth: {
            user: `${process.env.MAIL_USERNAME}`,
            pass: `${process.env.MAIL_PASSWORD}`
        }
    });

    // gather cat fact
    const fact = await fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(json => json.fact)
        .catch(err => callback(Error(err)))

    const message = {
        from: `${process.env.MAIL_FROM}`,
        to: `${process.env.MAIL_TO}`,
        subject: '😸Your hourly cat fact!',
        text: fact
    };

    // sends the email
    await transporter.sendMail(message)
};
