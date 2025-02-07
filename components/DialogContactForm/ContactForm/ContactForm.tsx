"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { toast } from "react-toastify";
import sendEmail from "./ContactForm.helpers";

type ContactFormProps = {
  onSubmitSuccess: () => void;
};

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string[];
    email?: string[];
    message?: string[];
  }>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);

    try {
      const response = await sendEmail(formData);

      if (response.success) {
        toast.success(response.message);
        onSubmitSuccess();
      } else {
        toast.error(response.message);
        setErrors(response.errors || {});
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Name" required />
        {errors?.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
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
        {errors?.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
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
        {errors?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message[0]}</p>
        )}
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
