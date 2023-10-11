import { NavLinks } from "@/lib/constants"
import { Navbar } from "./Navbar"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import {Menu} from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export const MobileNav = () => {
  return (
   <Sheet>
    <SheetTrigger asChild>
        <Menu className="m-2"/>
    </SheetTrigger>
    <SheetContent className="bg-slate-900 w-full">
        {NavLinks.map((navlink) => (
            <div key={navlink.id} className="flex flex-col justify-center items-center">
                <Link href={navlink.Link}>
                    <div className="relative w-72 h-24 my-5 rounded-md overflow-hidden bg-black cursor-pointer ">
                        <Image
                        src={navlink.imageUrl}
                        width={300}
                        height={300}
                        alt="navlinks images"
                        className="object-cover opacity-40 hover:opacity-60 transition"
                        loading="lazy"
                        />
                        <h3 className="absolute top-[38px] left-[114px] text-2xl text-center" >{navlink.name}</h3>
                    </div>
                </Link>
            </div>
        ))}
    </SheetContent>
   </Sheet>
  )
}
