import { Metadata } from "next"
import ContactPage from "./ContactPage"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Contact — Motanya",
  description:
    "Get in touch to collaborate on campaigns, creative direction, photography, film, or digital projects. Let's talk!"
}

export default function Page() {
  return <>
    <ContactPage />
    <Footer />
  </>
}