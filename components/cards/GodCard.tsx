import { Gods } from "@/lib/constants";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export const GodCard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 mx-2">
      {Gods.map((god) => (
        <Link href={god.Link}>
        <Card className="w-60 p-1 transform transition-transform hover:scale-105 cursor-pointer" key={god.id}>
          <Image
            src={god.imageUrl}
            width={400}
            height={400}
            alt="norse gods images"
            className="rounded-sm"
          />
          <CardHeader>
            <CardTitle className="text-4xl text-center text-slate-800">
              {god.name}
            </CardTitle>
            <CardDescription className="text-center text-md">
              {god.description}
            </CardDescription>
          </CardHeader>
        </Card>
        </Link>
      ))}
    </div>
  );
};
