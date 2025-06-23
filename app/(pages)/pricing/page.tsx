import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This is the pricing page of the application.",
  keywords: ["Pricing Page", "plans", "costs", "minicart"],
}

function PricingPage () {
  return (
    <h1 className="text-7xl">Pricing Page...</h1>
  )
}

export default PricingPage