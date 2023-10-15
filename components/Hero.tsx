import Image from "next/image"
import { Button } from "./ui/button"

export const Hero = () => {
  return (
    <>
      <section className="relative p-5 w-screen h-screen z-10">
        <div className="md:py-14 py-44 flex flex-col md:items-start justify-center items-center p-10">
          <h1 className="md:text-9xl text-5xl font-black md:text-left text-center md:text-zinc-50 mb-5 uppercase w-[450px] drop-shadow-2xl
          ">Find What Inspires You</h1>
          <Button variant='secondary' size='lg' className="hover:text-white hover:animate-pulse mx-3 hover:md:bg-black">
            Explore Realms
          </Button>
        </div>
      </section>
        <div className="absolute top-[0px] md:w-screen h-screen md:block hidden  overflow-hidden">
          <Image
           src='/assets/images/hero-image.webp'
           width={2000}
           height={500}
           alt="main image"
           className="object-contain"
          />
        </div>
    </>
  )
}
