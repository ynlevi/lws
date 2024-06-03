import Link from "next/link";
import React from "react";

const CTA: React.FC<{ className: string }> = ({ className }) => (
  <Link href={"https://wa.me/+972507170051"}>
    <p
      className={`rounded-xl font-bold px-4 py-3 inline-block bg-primary ${className}`}
    >
      Get an Offer Now
    </p>
  </Link>
);
export default CTA;
