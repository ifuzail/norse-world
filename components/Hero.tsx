import Image from "next/image"
import { Button } from "./ui/button"

export const Hero = () => {
  return (
    <>
      <section className="relative p-5 w-screen h-screen z-10">
        <div className="py-40 flex flex-col justify-center items-center">
          <h1 className="md:text-6xl text-4xl font-bold text-center text-gray-100/90 mb-5"> Embark on an <span className="text-orange-600 hover:text-blue-200 transition cursor-pointer">epic journey</span> through the ancient sagas,<br/> explore the realms of gods and giants, <br/> and uncover the rich tapestry of Norse folklore.</h1>
          <Button variant='norse' className="hover:text-white hover:animate-pulse">
            Explore Realms
          </Button>
        </div>
      </section>
        <div className="absolute top-[80px] md:w-screen h-screen md:block hidden  overflow-hidden">
          <Image
           src='/assets/images/midgard2.webp'
           width={2000}
           height={500}
           alt="main image"
           className="opacity-20 object-contain"
          />
        </div>
    </>
  )
}
