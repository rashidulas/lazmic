import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Lazmi Chowdhury",
  description: "Get in touch with Lazmi Chowdhury for your next design or development project.",
};

export default function ContactPage() {
  return <ContactForm />;
}
