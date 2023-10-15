import { NavLinks } from "@/lib/constants"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="md:block hidden container p-5 relative z-20">
        <div className="flex justify-between items-center mx-10">
            <div className="bg-zinc-900 px-4 py-2 w-60 absolute top-3 left-0 cursor-pointer">
                <Link href='/'>
                <h1 className='text-5xl text-white font-bold drop-shadow-2xl '>Norse saga </h1>
                </Link>
            </div>
            <div className="flex flex-row space-x-5 text-xl bg-zinc-900 px-4 py-2 w-96 absolute top-6 right-0">
                {NavLinks.map((navlink) => (
                    <div key={navlink.id}>
                        <Link href={navlink.Link}>
                            <h3 className="text-white hover:text-zinc-500 cursor-pointer">{navlink.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    </nav>
  )
}
