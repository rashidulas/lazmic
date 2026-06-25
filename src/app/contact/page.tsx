import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Meeko",
  description: "Get in touch with Meeko for your next design or development project.",
};

export default function ContactPage() {
  return <ContactForm />;
}
