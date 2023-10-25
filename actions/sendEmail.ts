"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderName, 150)) {
    return {
      error: "Nom invalide",
    };
  }

  if (!validateString(senderEmail, 150)) {
    return {
      error: "E-mail invalide",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Message invalide",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio - Contact form <onboarding@resend.dev>",
      to: "ljessicalejeune@gmail.com",
      subject: "Portfolio - Message from contact form",
      reply_to: senderEmail as string,
      text: message as string,
    //   react: {

    //   }
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
