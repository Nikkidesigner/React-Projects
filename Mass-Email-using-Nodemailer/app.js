// Use `import` instead of `require`
import nodemailer from 'nodemailer';
import nodemailerExpressHandlebars from 'nodemailer-express-handlebars';
import dotenv from 'dotenv';
import fs from 'fs'; // To read the JSON file
dotenv.config();

// Handlebar plugin setup
const hbsOptions = {
    viewEngine: {
        defaultLayout: false,
    },
    viewPath: 'views', // Adjust path if needed
};

// Flatten the recipient lists into a single array
const recipients = JSON.parse(fs.readFileSync('./data/recipients.json', 'utf-8'));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // This uses the credentials from the .env file
    },
});


// Use the handlebars plugin
transporter.use('compile', nodemailerExpressHandlebars(hbsOptions));

// Mail options
const mailOptions = {
    from: process.env.MAIL_USER, // Use the .env variable
    to: process.env.MAIL_USER, // Join the array as a comma-separated string
    bcc: recipients.join(', '),
    subject: "Congratulations ! for joining our community",
    template: 'welcomeMessage', // Name of the Handlebars file without extension
    attachments: [
        { filename: 'learning_path.txt', path: './attachments/learning_path.txt' },
        { filename: 'logo.png', path: './assets/logo/logo.png', cid: 'logo' }
    ],
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
