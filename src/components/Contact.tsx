import Image from "next/image";
import React from "react";
import profile from "@/../public/images/profile.jpeg";
import SubmitForm from "./SubmitForm";

export default function Contact() {
  return (
    <div className=" pt-14 xl:pt-44 px-7 xl:px-0 bg-background font-bold flex flex-col-reverse xl:flex-row xl:justify-between overflow-x-hidden  ">
      <div className="mt-12 xl:mt-0 xl:w-5/12 xl:pl-52 relative z-[12]">
        <h2 className="text-4xl">Contact.</h2>
        <h4 className="hidden xl:inline-block mt-8 text-xl xl:text-2xl text-center text-assent">
          I love what I do. hope you would too!
        </h4>
        <SubmitForm />
      </div>
      <div className="flex flex-col ">
        <h4 className="xl:hidden mt-14 text-xl text-center text-assent">
          I love what I do. hope you would too!
        </h4>

        <div className="relative xl:pr-52 xl:mb-52">
          <div className="relative z-10 w-72 xl:w-[484px] max-w-full aspect-square mx-auto mt-12 xl:m-0 xl:ml-auto">
            <Image
              src={profile}
              alt="profile"
              fill
              className="object-cover rounded-full "
            />
          </div>
          <div className=" w-80 h-80 xl:w-[820px] xl:h-[820px] bg-primary rounded-full absolute ml-auto left-28 top-8 xl:-top-36 xl:-right-[262px] " />
        </div>
      </div>
    </div>
  );
}
