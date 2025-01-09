# Mass Email Using Nodemailer

Welcome to the **Mass Email Using Nodemailer** project! This project demonstrates how to send mass emails using **Node.js**, **Nodemailer**, and **Handlebars** templates. You can customize and scale this solution to send personalized emails with attachments to multiple recipients.

## Features

- **Send Mass Emails**: Send emails to multiple recipients in bulk.
- **Template Support**: Use Handlebars templates for dynamic email content.
- **Attachments**: Attach files like documents or images to your emails.
- **Environment Variables**: Secure sensitive information like your email credentials using the `.env` file.
- **JSON-based Recipients List**: Manage recipients through a `recipients.json` file.

## Prerequisites

Before you start, you need to have the following installed:

- **Node.js** (LTS version recommended)
- **npm** (Node Package Manager)
- **Git** (for version control)

## Getting Started

### Step 1: Clone the Repository

Clone the repository to your local machine.

git clone https://github.com/Nikkidesigner/React-Projects.git

cd React-Projects/Mass-Email-using-Nodemailer

##

### Step 2: Install Dependencies

Run the following command to install all the necessary dependencies.

## npm install

### Step 3: Configure the .env File

Create a .env file in the root directory of your project and add your Gmail credentials:

MAIL_USER=your-email@gmail.com

MAIL_PASS=your-email-password

Security Tip: Do not commit your .env file to Git. This is where sensitive data is stored, such as your email credentials. It should always be added to .gitignore.

##

### Step 4: Set Up Recipients List

Modify the recipients.json file to include the email addresses of the recipients:

[

"recipient1@example.com",

"recipient2@example.com",

"recipient3@example.com"

]

-**You can add as many email addresses as needed, separated by commas.**

### Step 5: Create Handlebars Template

Ensure you have a welcomeMessage.hbs template inside the views folder, which will be used to render the email content. You can customize this template with dynamic variables and HTML content.

##

### Step 6: Run the Application

Once everything is configured, run the app with the following command:

### node app.js

This will send a mass email to all recipients with the customized message, attachments, and logos.
