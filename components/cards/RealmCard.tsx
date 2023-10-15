"use client";

import { realms } from "@/lib/constants";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

export const RealmCard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {realms.map((realm) => (
        <HoverCard key={realm.id}>
          <HoverCardTrigger asChild>
            <div className="h-48 w-96  overflow-hidden bg-slate-900 cursor-pointer rounded-lg border-2  ">
                <div className="relative ">
                <Image
                  src={realm.imageUrl}
                  width={500}
                  height={200}
                  alt="images"
                  className="object-cover"
                />
                <h1 className="p-4 rounded-lg absolute z-10 top-28 bg-zinc-900 left-3 text-3xl font-bold ">
                  {realm.name}
                </h1>
                </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className=" bg-slate-950 w-[500px]" side="right">
            <div>
              <Card className=" w-full overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-black text-gray-800 text- text-3xl">
                    {realm.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={realm.imageUrl2}
                    width={500}
                    height={400}
                    alt="descriptive image of norse gods"
                  />
                </CardContent>
                <CardFooter>
                  <CardDescription>{realm.description}</CardDescription>
                </CardFooter>
              </Card>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};
