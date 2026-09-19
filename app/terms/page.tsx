import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `The terms for using the Cosmonus website, operated by ${site.legal}.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

const email = site.contactEmail;

const sections: LegalSection[] = [
  {
    title: "About this site",
    body: (
      <p>
        This website describes the work of {site.legal}. It is here to inform. Reading it or writing to us does not create an
        agreement to provide any product or service.
      </p>
    ),
  },
  {
    title: "Research and concepts",
    body: (
      <p>
        Research notes, experiments and concepts are exploratory and are labelled as such. They describe what we are learning,
        not a promise that something exists or will ship.
      </p>
    ),
  },
  {
    title: "Our products",
    body: (
      <p>
        Each Cosmonus product, such as StayOnMap and Happenous, is governed by its own terms of service. Those terms apply when
        you use the product.
      </p>
    ),
  },
  {
    title: "Content and names",
    body: (
      <>
        <p>
          The writing, film, imagery and design on this site, and the names Cosmonus, StayOnMap and Happenous, belong to{" "}
          {site.legal} unless noted otherwise.
        </p>
        <p>You are welcome to link to any page and to quote short passages with credit. For anything more, ask us first.</p>
      </>
    ),
  },
  {
    title: "Accuracy and links",
    body: (
      <p>
        We work to keep this site accurate, but it is provided as it is, and details can change as our work does. Links to
        other websites are there for convenience; we are not responsible for their content.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        For anything about these terms, write to <a href={`mailto:${email}`}>{email}</a>.
      </p>
    ),
  },
  {
    title: "Changes to these terms",
    body: <p>If these terms change, we will update this page and the date at the top of it.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      label="Legal"
      title="Terms"
      lead="The short version: this site describes our work, our products have their own terms, and we would rather you ask than guess."
      updated="[DATE]"
      sections={sections}
    />
  );
}
