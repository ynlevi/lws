"use client";
import React, { useState } from "react";
import sendForm from "@/action/sendForm";

export default function SubmitForm() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inme = e.currentTarget.elements.namedItem("name") as HTMLInputElement;

    const formData = new FormData(e.currentTarget);
    const response = await sendForm(formData);
    if (response) {
      setName(inme.value);
      setIsSubmit(true);
    }
  };

  return isSubmit ? (
    <div className="z-10 relative text-xl text-center py-8 xl:py-12 text-assent xl:text-2xl">
      <p>Thank You {name},</p>
      <p>I'll be in touch soon.</p>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit}
      method="POST"
      dir="auto"
      className="z-10 relative flex flex-col gap-2 py-8 xl:py-12 text-sm lg:text-base w-full mx-auto"
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required
          className="p-2 rounded-md text-assent ring-assent"
        />
        <label htmlFor="email" className="mt-3">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="p-2 rounded-md text-assent ring-assent"
        />
      </div>
      <input
        className={`mt-2 w-fit rounded-xl font-bold px-4 py-3 inline-block bg-secondary text-text md:hover:-translate-y-1 duration-300 `}
        type="submit"
        value="Get an Offer"
      />
    </form>
  );
}
