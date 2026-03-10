# Formspree Setup Guide

## Setting Up Your Contact Form

1. **Visit Formspree**: Go to https://formspree.io

2. **Create an Account**: Sign up with your email (alyushra96@gmail.com)

3. **Create a New Form**:
   - Click "New Form"
   - Enter your email address
   - Choose a name for the form (e.g., "Portfolio Contact")
   - Click "Create"

4. **Get Your Form ID**:
   - After creating the form, you'll see a form ID (looks like: `f/xyzgwqpd`)
   - Copy this ID

5. **Update the Contact Form**:
   - Open `components/ContactSection.tsx`
   - Find the line: `const response = await fetch('https://formspree.io/f/xyzgwqpd', {`
   - Replace `xyzgwqpd` with your actual Formspree form ID

6. **Verify Your Email**:
   - Formspree will send you a verification email
   - Click the verification link to activate your form

7. **Test the Form**:
   - Fill out the contact form on your portfolio
   - Submit it
   - Check your email to confirm it's working

## How It Works

- When someone submits the contact form, the data is sent to Formspree
- Formspree forwards the submission to your email (alyushra96@gmail.com)
- You can also view submissions in your Formspree dashboard

## Current Form ID

The form is now configured with ID: `mwvrlkdz`

Your Formspree form is active and ready to receive submissions at: https://formspree.io/f/mwvrlkdz
