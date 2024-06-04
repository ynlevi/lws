import React from "react";
import Image, { StaticImageData } from "next/image";
import constructions from "@/../public/images/constructions.jpg";
import thePlace from "@/../public/images/the-place.jpeg";
import yourWebsite from "@/../public/images/your-website.jpg";
import Link from "next/link";
interface Web {
  name: string;
  src: StaticImageData;
  link: string;
}

const webs: Web[] = [
  {
    name: "constructions",
    src: constructions,
    link: "https://uri-achzakot.ovh ",
  },
  {
    name: "the place",
    src: thePlace,
    link: "https://the-place-ve.vercel.app",
  },
  {
    name: "your website",
    src: yourWebsite,
    link: "/",
  },
];

const WebItem: React.FC<{
  name: string;
  src: StaticImageData;
  link: string;
}> = ({ name, src, link }) => {
  return (
    <div
      className={`snap-start h-40 w-72 shrink-0 max-w-[77%] relative rounded-lg xl:h-72 xl:w-[40%] xl:max-w-[30rem] `}
    >
      <Link href={link} target={link !== "/" ? "_blank" : "_self"}>
        <Image
          src={src}
          alt={name}
          className="object-cover h-full w-full rounded-lg"
          fill
        />
        <div className="absolute rounded-b-lg z-10 w-full bottom-0 h-20 bg-gradient-to-t from-primary to-transparent flex items-end">
          <h4 className="text-xl lg:text-2xl p-2 lg:p-4 tracking-wider font-serif capitalize text-text">
            {name}
          </h4>
        </div>
      </Link>
    </div>
  );
};

const Portfolio: React.FC = () => (
  <div className="pt-16 pl-7 lg:pl-52 bg-background text-text">
    <h2 className="font-bold text-4xl ">Portfolio.</h2>
    <div className="snap-x snap-normal overflow-x-scroll mt-6 flex gap-4">
      {webs.map((web, i) => (
        <WebItem key={i} {...web} />
      ))}
    </div>
    <div className=" relative before:h-44 before:xl:h-80 before:w-20 lg:before:w-48 before:bg-gradient-to-l before:from-background before:to-transparent before:absolute before:z-10 before:right-0 before:-bottom-2 before:xl:-bottom-4"></div>
  </div>
);

export default Portfolio;
