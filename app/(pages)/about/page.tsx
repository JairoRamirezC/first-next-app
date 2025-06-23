import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the about page of the application.",
  keywords: ["About Page", "information", "details"],
}

export default function AboutPage () {
  return (
    <h1 className="text-7xl">About Page</h1>
  )
}
