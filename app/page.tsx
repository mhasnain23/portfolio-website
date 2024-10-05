import Photo from "@/components/Photo";
import Social from "@/components/Social";
import State from "@/components/State";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="">Software Developer</span>
            <h1 className="text-[48px] xl:[80px] leading-[1.1] font-semibold mb-6">
              Hello I'm <br />
              <span className="text-[#00ff99]">Muhammad Hasnain</span>
            </h1>
            <p className="max-w-[500px] font-bold px-2 mb-9 text-white">
              I’m a Full-Stack Web Developer with 1 year of experience building
              fast, responsive websites using Next.js, React.js, and Tailwind
              CSS. I love creating clean, user-friendly designs backed by
              strong, efficient code. Whether it’s designing smooth frontends or
              setting up robust backend APIs, I’m dedicated to bringing your
              vision to life.
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span className="font-semibold">Download CV</span>{" "}
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyle="w-9 h-9 border border-[#00ff99] rounded-full flex items-center justify-center cursor-pointer text-[#00ff99] text-base hover:bg-[#00ff99] hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <State />
    </section>
  );
};

export default Home;
