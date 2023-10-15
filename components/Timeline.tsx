import { timeline } from "@/lib/constants";
import Image from "next/image";
import { Button } from "./ui/button";

export const Timeline = () => {
  return (
    <section className="mt-20 mx-4">
      <h1 className="font-bold text-5xl text-center mt-10 text-gray-200">
        Timeline
      </h1>
      <p className="font-normal text-xl text-center mt-5 text-gray-400  italic mb-10">
        The Norse timeline, as portrayed in Norse mythology, is cyclical and is
        punctuated by key events and prophecies. It encompasses a series of
        past, present, and future events, with an ultimate end known as
        Ragnarök.
      </p>
      <div className="flex md:flex-row flex-col gap-3 justify-center items-center p-5 ">
        <div className="md:w-[50%] mx-5">
          {timeline.map((event) => (
            <div key={event.id}>
              <h2 className="font-bold text-3xl text-orange-500">
                0 {event.heading}
              </h2>
              <p className="font-normal text-lg text-gray-300 p-3">
                {event.description}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-[50%] flex flex-col items-center justify-center mx-5">
          <Image
            src="/assets/images/timeline.webp"
            width={1000}
            height={500}
            alt="norse timeline photo"
            className="rounded-md relative "
            
          />
          <div className="mt-5 absolute">    
            <Button variant={"secondary"} size='lg' className="hover:text-white hover:bg-black">
                Show Full Timeline
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
