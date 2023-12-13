import * as React from "react";

interface EmailTemplateProps {
  body: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  body,
  email,
}) => (
  <div>
    <h3>From: {email}</h3>
    <h4>Body:</h4>
    <p>{body}</p>
  </div>
);

export default EmailTemplate;
