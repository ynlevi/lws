import CTA from "./CTA";
import HeroSvg from "./svgs/HeroSvg";

function Hero() {
  return (
    <div className="pt-5 px-7 xl:px-52 bg-assent">
      <div className="text-secondary text-lg lg:text-xl font-bold font-serif">
        Levi's Web Solutions
      </div>
      <div className="flex xl:justify-between  flex-col-reverse xl:flex-row gap-11 xl:gap-0 mt-9 xl:mt-20">
        <div className="text-white xl:w-6/12 2xl:my-auto">
          <h1 className=" text-4xl xl:text-6xl font-bold">
            We Are Here Every Step of the Way
          </h1>
          <h3 className="mt-4 xl:mt-2 text-lg">
            From custom design and development to Google SEO, our customers
            enjoy ongoing tips and support for all their needs, now and in the
            future.
          </h3>
          <CTA className={"mt-7 xl:mt-5"} />
        </div>
        <HeroSvg className={"xl:w-8/12 relative xl:left-40 "} />
      </div>
    </div>
  );
}

export default Hero;
