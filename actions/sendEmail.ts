"use server";
import React from "react";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { string } from "prop-types";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Sender Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "virenplays@gmail.com",
      subject: "Message from Conatct Form",
      reply_to: senderEmail as string,
      text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
