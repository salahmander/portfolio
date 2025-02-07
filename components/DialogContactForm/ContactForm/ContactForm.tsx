"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import sendEmail from "@/app/actions/sendEmail";

import { toast } from "react-toastify";

type ContactFormProps = {
  onSubmitSuccess: () => void;
};

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const handleSendEmail = async (previousState: unknown, formData: FormData) => {
    const response = await sendEmail(formData);

    if (response.success) {
      toast.success(response.message);
      return onSubmitSuccess();
    }

    toast.error(response.message);

    return response;
  };

  const [state, formAction, isPending] = useActionState(handleSendEmail, {
    errors: undefined,
    success: false,
    message: "",
  });

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Name" required />
        {state?.errors?.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          className="resize-none"
          id="message"
          name="message"
          placeholder="Message..."
          required
        />
        {state?.errors?.message && (
          <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
        )}
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
