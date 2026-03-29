import { contactItems } from "@/components/contact-section/contact-data";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

type ContactFormProps = {
  revealUp: Variants;
};

export function ContactForm({ revealUp }: ContactFormProps) {
  const emailContact = contactItems.find((item) => item.label === "Email");
  const emailHref = emailContact?.href ?? "mailto:kontakt@example.com";
  const emailText = emailContact?.value ?? "kontakt@example.com";

  return (
    <motion.form
      className="rounded-3xl border border-primary/35 bg-card/70 p-6 shadow-[0_0_34px_rgba(47,125,230,0.17)] mobile-no-shadow md:p-7"
      variants={revealUp}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm text-foreground">
          Name
          <input
            type="text"
            placeholder="Your name"
            className="h-11 rounded-xl border border-primary/30 bg-background/55 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
          />
        </label>

        <label className="grid gap-2 text-sm text-foreground">
          Email
          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 rounded-xl border border-primary/30 bg-background/55 px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
          />
        </label>

        <label className="grid gap-2 text-sm text-foreground">
          Message
          <textarea
            rows={6}
            placeholder="Tell me about your project..."
            className="rounded-xl border border-primary/30 bg-background/55 px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Button
          asChild
          className="h-10 rounded-full border border-primary/35 bg-primary/90 px-5 text-xs uppercase tracking-widest text-primary-foreground"
        >
          <a href={emailHref}>Send message</a>
        </Button>

        <p className="text-xs text-muted-foreground">
          Or write directly: {emailText}
        </p>
      </div>
    </motion.form>
  );
}
