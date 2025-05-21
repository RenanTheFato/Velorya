import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const items = [
  {
    item: "Features"
  },
  {
    item: "Propose"
  },
  {
    item: "How it Works?"
  },
  {
    item: "Follow Us"
  }
]


export function Header() {
  return (
    <header className="w-screen flex flex-row items-center p-2 h-20 bg-white shadow-lg overflow-hidden">
      <div className="w-full h-full flex flex-row items-center mx-10 space-x-2 justify-between transition-all duration-300">
        <div className="flex flex-row items-center space-x-2">
          <Link href={"/"}>
            <Image src="/favicon.svg" alt="Velorya Logo" loading="lazy" className="w-12 drop-shadow-[0_4px_8px] drop-shadow-amber-400/75" width="0" height="0" />
          </Link>
          <h1 className="font-work-sans font-semibold text-2xl">Velorya</h1>
        </div>

        <nav className="hidden md:flex items-center">
          <ul className="flex flex-row md:gap-10 lg:gap-20 whitespace-nowrap p-2 font-source-sans text-lg font-semibold">
            {items.map((item, index) => (
              <li key={index} className="relative inline-block cursor-pointer group text-xl transition-all duration-300 hover:scale-105 ease-out antialiased">
                <span className="transition-all duration-500 relative overflow-hidden">
                  {item.item}
                </span>
                <div className="absolute bottom-0 left-0 block w-0 h-[2px] bg-gradient-to-r from-[#ffed27] to-[#f88d3b] group-hover:w-full transition-all duration-500" />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row items-center">
          <Link href={"/dashboard"}>
            <Button className="cursor-pointer bg-gradient-to-tr from-[#ffed27] to-[#f88d3b] text-white shadow-lg font-work-sans flex items-center justify-center font-semibold text-base hover:scale-105 transition-all duration-300 ease-out">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}