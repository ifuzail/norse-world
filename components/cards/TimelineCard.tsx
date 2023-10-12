import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { TimelineEvents } from "@/lib/constants";

export const TimelineCard = () => {
  return (
    <div className="p-4 flex md:flex-row flex-col gap-5">
      {TimelineEvents.map((event) => (

     
      <Card className="md:w-48 w-full bg-zinc-900" key={event.id}>
        <CardHeader className="text-center">
          <CardTitle className="text-gray-100">
            {event.Title}
          </CardTitle>
          <div className="py-2 flex md:flex-col flex-row items-center justify-center gap-3">
            <div className="md:w-36  overflow-hidden rounded-sm">
              <Image
                src={event.ImageUrl}
                width={500}
                height={500}
                alt=" The Vast Void of Ginnungagap"
              />
            </div>
            <CardDescription className="text-gray-400 md:text-md text-sm h-48 ">
              {event.Description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardFooter className="md:ml-5">
          <Button variant={"norse"} className="hover:text-white">
            Read more
          </Button>
        </CardFooter>
      </Card>
       ))}
    </div>
  );
};
