import { Hero } from "@/components/Hero"
import { MobileNav } from "@/components/MobileNav"
import { Navbar } from "@/components/Navbar"
import { NorseGods } from "@/components/NorseGods"
import { Realms } from "@/components/Realms"
import { Timeline } from "@/components/Timeline"
import { GodCard } from "@/components/cards/GodCard"


const page = () => {
  return (
    <div>
      <Hero />
     <Realms/>
    <NorseGods/>
    <Timeline/>
    </div>
  )
}

export default page