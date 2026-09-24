import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Cosmonus website handles information: no advertising trackers, and nothing you type into the contact form is stored.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const email = site.contactEmail;

const sections: LegalSection[] = [
  {
    title: "What this site collects",
    body: (
      <>
        <p>This website does not ask you to create an account and does not use advertising trackers.</p>
        <p>
          The <Link href="/contact">contact form</Link> opens your own email app with your message filled in. Nothing you type
          into it is sent to us or stored by this site; it only reaches us if you choose to send the email.
        </p>
      </>
    ),
  },
  {
    title: "Cookies and analytics",
    body: (
      <>
        <p>We do not set cookies for advertising or analytics, and we do not build profiles of visitors.</p>
        <p>
          Like any website, this one is served by a hosting provider, which may keep short-lived technical logs (such as IP
          address, browser type and the page requested) to deliver pages, keep the service secure and fix faults. We do not
          use those logs to identify or follow you.
        </p>
      </>
    ),
  },
  {
    title: "Emails you send us",
    body: (
      <p>
        If you write to us, we receive what you choose to include — usually your name, email address and message. We use it to
        reply and to continue the conversation, and nothing else. Ask us to delete it at any time.
      </p>
    ),
  },
  {
    title: "Our products",
    body: (
      <p>
        Cosmonus products, such as StayOnMap and Happenous, have their own privacy policies. Those policies, not this one, apply
        when you use them.
      </p>
    ),
  },
  {
    title: "Questions and requests",
    body: (
      <p>
        To ask what we hold about you, or to have it corrected or deleted, write to <a href={`mailto:${email}`}>{email}</a>.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        If the way this site handles information changes, we will update this page and the date at the top of it. We will not
        start collecting more without saying so here first.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy"
      lead="This site is here to describe our work, not to watch you read it. Here is exactly what it does and does not collect."
      updated="19 September 2026"
      sections={sections}
    />
  );
}
