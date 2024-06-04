import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import WiveTopSvg from "@/components/svgs/WiveTopSvg";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <WiveTopSvg
        div={"bg-assent xl:-mt-72 2xl:-mt-[20rem]"}
        fill={"fill-background"}
      />
      <Portfolio />
      <Contact />
      <WiveTopSvg div={"bg-background xl:-mt-[30rem]"} fill={"fill-assent "} />
      <Footer />
    </div>
  );
}
