import { motion, type Variants } from "framer-motion";
import type { ContactItem } from "@/components/contact-section/contact-data";

type ContactInfoPanelProps = {
  items: ContactItem[];
  revealUp: Variants;
  staggerGroup: Variants;
};

export function ContactInfoPanel({
  items,
  revealUp,
  staggerGroup,
}: ContactInfoPanelProps) {
  return (
    <motion.aside
      className="rounded-3xl border border-primary/35 bg-card/70 p-6 shadow-[0_0_34px_rgba(47,125,230,0.17)] backdrop-blur-sm md:p-7"
      variants={revealUp}
    >
      <motion.ul className="space-y-3" variants={staggerGroup}>
        {items.map(({ label, value, href, icon: Icon }) => (
          <motion.li key={label} variants={revealUp}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-2xl border border-primary/25 bg-background/45 px-4 py-3 transition-colors hover:border-primary/45"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-full border border-primary/35 bg-primary/10 text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="space-y-0.5">
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </span>
                <span className="text-sm text-foreground md:text-base">
                  {value}
                </span>
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-5 rounded-2xl border border-primary/30 bg-background/55 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/90">
          Availability
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Currently open for freelance work and long-term product
          collaborations.
        </p>
      </div>
    </motion.aside>
  );
}
