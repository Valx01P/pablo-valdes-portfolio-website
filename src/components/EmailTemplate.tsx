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
    <h1>Welcome, Pablo!</h1>
    <h2>You have a new message from {firstName}: <span>{email}</span></h2>
    <hr />
    <h2>{subject}</h2>
    <h2>{message}</h2>
    <hr />
    {phone && <h2>Phone: {phone}</h2>}
    <h2>Best, {firstName} {lastName}</h2>
  </div>
);