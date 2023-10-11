import Image from "next/image";

export const HeroCard = () => {
  return (
    <>
    <div className="relative p-1 flip-animation w-72 h-96 m-10">
      <div className="flip-content ">
        <Image
          src="/assets/images/Thor.webp"
          width={300}
          height={300}
          alt="Thor Image"
          className=""
        />
        <h1 className="absolute left-16 top-60 text-8xl font-extrabold drop-shadow-2xl text-gray-200">
          Thor
        </h1>
        <p className="absolute top-[325px] left-11 text-3xl font-medium text-yellow-500 drop-shadow-2xl">
          The God of Thunder
        </p>
      </div>
      <div className="absolute top-0 opacity-0 hover:opacity-100 transition animate-accordion-down">
        <Image
          width={320}
          height={100}
          src='/assets/images/thor-front.png'
          alt="thor front image "
          
          
        />
        <div className="absolute top-[325px] left-0 w-full h-44 bg-slate-900 rounded-sm">
        </div>
        <h1 className="absolute top-80 left-6 text-[135px] font-extrabold text-yellow-500">Thor</h1>
      </div>
    </div>
      </>
  );
};
