"use client";
import CountUp from "react-countup";

interface statsProps {
  num: number;
  text: string;
}

const stats: statsProps[] = [
  { num: 1, text: "year of experice" },
  { num: 10, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 500, text: "Code Commits" },
];

const State = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 text-2xl`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default State;
