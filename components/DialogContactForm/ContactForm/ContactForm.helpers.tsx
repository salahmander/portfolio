"use client";

import { z } from "zod";
import emailjs from "@/config/emailConfig";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

/**
 * Sends an email using EmailJS with the provided form data.
 *
 * @param {FormData} formData - The form data containing the user's name, email, and message.
 * @returns {Promise<{ success: boolean; message: string; errors?: Record<string, string[]> }>}
 * - `success`: `true` if the email was sent successfully, `false` otherwise.
 * - `message`: A success or error message.
 * - `errors` (optional): An object containing validation errors, indexed by field names.
 *
 */
const sendEmail = async (formData: FormData) => {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation error! Please check the input fields and try again.",
    };
  }

  try {
    const emailServiceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const emailTemplateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;

    if (!emailServiceId || !emailTemplateId) {
      throw new Error("Missing email service environment variables.");
    }

    await emailjs.send(emailServiceId, emailTemplateId, validatedFields.data);
    return { success: true, message: "Thank you for your message!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
};

export default sendEmail;
