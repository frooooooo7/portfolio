"use client";

import { contactItems } from "@/components/contact-section/contact-data";
import { useContactForm } from "@/components/contact-section/use-contact-form";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

type ContactFormProps = {
  revealUp: Variants;
};

export function ContactForm({ revealUp }: ContactFormProps) {
  const emailContact = contactItems.find((item) => item.label === "Email");
  const emailHref = emailContact?.href ?? "mailto:kontakt@example.com";
  const emailText = emailContact?.value ?? "kontakt@example.com";
  const { register, errors, isSubmitting, status, statusMessage, onSubmit } =
    useContactForm();

  return (
    <motion.form
      className="rounded-3xl border border-primary/35 bg-card/70 p-6 shadow-[0_0_34px_rgba(47,125,230,0.17)] mobile-no-shadow md:p-7"
      variants={revealUp}
      onSubmit={onSubmit}
      noValidate
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm text-foreground">
          Name
          <input
            type="text"
            placeholder="Your name"
            {...register("name")}
            aria-invalid={Boolean(errors.name)}
            className="h-11 rounded-xl border border-primary/30 bg-background/55 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
          />
          {errors.name ? (
            <span className="text-xs text-rose-400">{errors.name.message}</span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm text-foreground">
          Email
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            aria-invalid={Boolean(errors.email)}
            className="h-11 rounded-xl border border-primary/30 bg-background/55 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
          />
          {errors.email ? (
            <span className="text-xs text-rose-400">
              {errors.email.message}
            </span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm text-foreground">
          Message
          <textarea
            rows={6}
            placeholder="Tell me about your project..."
            {...register("message")}
            aria-invalid={Boolean(errors.message)}
            className="rounded-xl border border-primary/30 bg-background/55 px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
          />
          {errors.message ? (
            <span className="text-xs text-rose-400">
              {errors.message.message}
            </span>
          ) : null}
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-10 rounded-full border border-primary/35 bg-primary/90 px-5 text-xs uppercase tracking-widest text-primary-foreground disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>

        <p className="text-xs text-muted-foreground">
          Or write directly: <a href={emailHref}>{emailText}</a>
        </p>
      </div>

      {status !== "idle" ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-400" : "text-rose-400"
          }`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}
    </motion.form>
  );
}
