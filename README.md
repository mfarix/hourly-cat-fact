# Hourly Cat Facts

Cron to send hourly cat fact emails using AWS Amplify.

## Deploy
- Setup a SMTP server on a platform such as SendGrid or Mailgun.
- Click the button below to deploy.  
[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/mfarix/hourly-cat-fact/tree/master)

## Environment Variables
- Set environment variables in a `.env` file for local development.
- In cloud deployment, set the environment variables from Lambda function.

```
MAIL_HOST='smtp.server.com'
MAIL_PORT=25,587 or 465
MAIL_USERNAME='smtp_username'
MAIL_PASSWORD='smtp_password'
MAIL_FROM='from@email.com'
MAIL_TO='to@email.com'
```

## Local Development

### Requirements
- Node.js® version 10 or later
- AWS Amplify CLI

### Commands
```bash
git clone https://github.com/mfarix/hourly-cat-fact.git && cd hourly-cat-fact
amplify init
cd amplify/backend/function/catFact/src
npm install
amplify mock function catFact
```
