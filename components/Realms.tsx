import { RealmCard } from "./cards/RealmCard"

export const Realms = () => {
  return (
    <section className="mt-20 mx-4">
        <h1 className="font-bold text-5xl text-center mt-10 text-gray-200">The Realms</h1>
        <p className="font-normal text-xl text-center mt-5 text-gray-400 italic ">The nine realms are interconnected by Yggdrasil, the World Tree, and together they form the cosmological framework of Norse mythology. The interactions and conflicts among the inhabitants of these realms play a significant role in Norse myths and legends, shaping the fate of both gods and mortals.</p>
        <div className="mt-10">
            <RealmCard/>
        </div>
    </section>
  )
}
