import { NavLinks } from "@/lib/constants"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="md:block hidden container p-5   ">
        <div className="flex justify-between items-center mx-10">
            <div>
                <Link href='/'>
                <h1 className="font-bold text-4xl hover:text-slate-400">Norse World</h1>
                </Link>
            </div>
            <div className="flex flex-row gap-x-5 text-xl">
                {NavLinks.map((navlink) => (
                    <div key={navlink.id}>
                        <Link href={navlink.Link}>
                            <h3 className="hover:text-slate-400 cursor-pointer">{navlink.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    </nav>
  )
}
