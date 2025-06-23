import { Navbar } from "@/components";


export default function PagesLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <>
      <Navbar />
      {/* <div className="border border-red-300 p-4"> */}
      <div className="p-4">
        {children}
      </div>
    </>
  )
}