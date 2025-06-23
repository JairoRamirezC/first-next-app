import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is the contact page of the application.",
  keywords: ["Contact Page", "get in touch", "support", "inquiries"],
}

export default function ContactPage() {
  return (
    <h1 className="text-7xl">ContactPage</h1>
  )
}
