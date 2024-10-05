"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";

interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconStyles?: string; // Optional if it's not used currently
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({
  containerStyles,
  btnStyles,
  iconStyles, // iconStyles not used in the component yet
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold className={iconStyles} onClick={()=> swiper.slidePrev()} />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold className={iconStyles} onClick={()=> swiper.slideNext()} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
