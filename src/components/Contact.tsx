import Image from "next/image";
import React from "react";
import profile from "@/../public/images/profile.jpeg";
import SubmitForm from "./SubmitForm";

export default function Contact() {
  return (
    <div className=" pt-14 xl:pt-44 px-7 xl:px-0 bg-background font-bold flex flex-col-reverse xl:flex-row xl:justify-between overflow-x-hidden  ">
      <div className="xl:w-5/12 xl:pl-52 relative z-[12]">
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
          <div className="relative z-10 w-72 xl:w-[484px] max-w-full aspect-square mx-auto mt-8 xl:m-0 xl:ml-auto">
            <Image
              src={profile}
              alt="profile"
              fill
              className="object-cover rounded-full "
            />
          </div>
          <div className="hidden xl:inline-block w-[820px] h-[820px] bg-secondary rounded-full absolute ml-auto -top-36 -right-[262px] z-[5]" />
        </div>
      </div>
    </div>
  );
}
