"use client";

import { useSearchParams } from "next/navigation";
import { useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Arrow, Chevron } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { toTopic, topics, type Topic } from "./topics";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 44px controls. The border is #8f8f8a (3.3:1 on white) so the field edge meets non-text contrast;
// focus adds the global 2px ink outline.
const control =
  "w-full rounded-btn border border-[#8f8f8a] bg-white px-3.5 text-base text-ink focus:border-ink aria-[invalid=true]:border-ink";

function validate(v: { name: string; email: string; message: string }): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address so we can reply.";
  else if (!EMAIL.test(v.email.trim())) e.email = "Enter an email address like name@example.com.";
  if (!v.message.trim()) e.message = "Write a message. A few lines is enough.";
  return e;
}

function FieldShell({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[15px] font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="m-0 flex items-center gap-2 text-sm text-ink">
          <span aria-hidden="true" className="font-mono">
            !
          </span>
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Contact form with no backend: on submit it opens the visitor's own email app with a mailto: link
 * to site.contactEmail, subject and body filled in. Nothing is stored or sent by the site.
 */
export function ContactForm({ initialTopic = "general" }: { initialTopic?: Topic }) {
  const uid = useId();
  const ids = { name: `${uid}-name`, email: `${uid}-email`, topic: `${uid}-topic`, message: `${uid}-message` };
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [topic, setTopic] = useState<Topic>(initialTopic);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const onField = (k: Field) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [k]: value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    const refs = { name: nameRef, email: emailRef, message: messageRef };
    const first = (["name", "email", "message"] as const).find((k) => next[k]);
    if (first) {
      setOpened(false);
      refs[first].current?.focus();
      return;
    }
    const topicLabel = topics.find((t) => t.value === topic)?.label ?? "General";
    const name = values.name.trim();
    const subject = `${topicLabel}, from ${name}`;
    const body = `${values.message.trim()}\n\n${name}\n${values.email.trim()}`;
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const invalid = (k: Field) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${ids[k]}-error` } : {});

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-6" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="sr-only">
        Write to Cosmonus
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FieldShell id={ids.name} label="Name" error={errors.name}>
          <input
            ref={nameRef}
            id={ids.name}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={onField("name")}
            className={`${control} h-11`}
            {...invalid("name")}
          />
        </FieldShell>
        <FieldShell id={ids.email} label="Email" error={errors.email}>
          <input
            ref={emailRef}
            id={ids.email}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            required
            value={values.email}
            onChange={onField("email")}
            className={`${control} h-11`}
            {...invalid("email")}
          />
        </FieldShell>
      </div>

      <FieldShell id={ids.topic} label="Topic">
        <div className="relative">
          <select
            id={ids.topic}
            name="topic"
            value={topic}
            onChange={(e) => setTopic(toTopic(e.target.value))}
            className={`${control} h-11 appearance-none pr-10`}
          >
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute top-1/2 right-3.5 flex -translate-y-1/2 rotate-90 text-muted">
            <Chevron />
          </span>
        </div>
      </FieldShell>

      <FieldShell id={ids.message} label="Message" error={errors.message}>
        <textarea
          ref={messageRef}
          id={ids.message}
          name="message"
          rows={7}
          required
          value={values.message}
          onChange={onField("message")}
          className={`${control} min-h-44 resize-y py-3 leading-normal`}
          {...invalid("message")}
        />
      </FieldShell>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <button
          type="submit"
          className="inline-flex h-10 shrink-0 items-center gap-2 self-start rounded-lg bg-ink px-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-ink-2 sm:self-auto"
        >
          <span>Open in your email app</span>
          <Arrow />
        </button>
        <p className="m-0 text-sm leading-normal text-pretty text-muted">
          Nothing is sent or stored by this site. The form writes the email; you send it.
        </p>
      </div>

      <p role="status" className="m-0 text-base text-pretty text-ink-2">
        {opened
          ? `Your email app should now be open with the message ready to send. If it did not open, write to ${site.contactEmail} directly.`
          : ""}
      </p>
    </form>
  );
}

/** Reads ?topic= and pre-selects it. Render inside <Suspense> so the page still prerenders. */
export function ContactFormFromQuery() {
  const params = useSearchParams();
  return <ContactForm initialTopic={toTopic(params.get("topic"))} />;
}
