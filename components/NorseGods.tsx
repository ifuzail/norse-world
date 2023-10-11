import { GodCard } from "./cards/GodCard";

export const NorseGods = () => {
  return (
    <section className="mt-20 mx-4">
        <h1 className="font-bold text-5xl text-center mt-10 text-gray-200">Norse Gods</h1>
        <p className="font-normal text-xl text-center mt-5 text-gray-400  italic mb-10">These are just a few of the many gods and goddesses in Norse mythology, each with their unique characteristics and roles in the Norse cosmos. Norse mythology is rich with stories and myths that revolve around these deities and their interactions with one another and with humans.</p>
        <div>
            <GodCard/>
        </div>
    </section>
  )
};