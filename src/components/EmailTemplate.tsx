import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phone?: string;
  subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  firstName,
  lastName,
  message,
  phone,
  subject,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>You have a new message from {email}:</p>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
    {phone && <p>Phone: {phone}</p>}
  </div>
);