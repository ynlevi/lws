import Link from "next/link";

export default function CTA({ className }) {
  return (
    <Link href={"https://wa.me/+972507170051"}>
      <p
        className={`rounded-xl font-bold px-4 py-3 inline-block bg-primary ${className}`}
      >
        Get an Offer Now
      </p>
    </Link>
  );
}
