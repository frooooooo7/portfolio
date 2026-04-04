import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/components/contact-section/contact-form-schema";

type ContactApiResponse = {
  message?: string;
};

export function useContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitValues = async (values: ContactFormValues) => {
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok) {
        throw new Error(result.message ?? "Failed to send message.");
      }

      setStatus("success");
      setStatusMessage(
        "Message sent successfully. I will get back to you soon.",
      );
      reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return {
    register,
    errors,
    isSubmitting,
    status,
    statusMessage,
    onSubmit: handleSubmit(submitValues),
  };
}
