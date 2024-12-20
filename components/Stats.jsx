"use client";

import CountUp from "react-countup";

const stats = [
  {
    num:1,
    text: "Years of Experience",
  },
  {
    num: 11,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 150,
    text: "Questions on Leetcode",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto mt-11 ">
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
                  delay={4}
                  className="text-4xl xl:text-6xl font-extrabold text-accent"
                  aria-label={`${item.num} ${item.text}`}
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
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

export default Stats;
