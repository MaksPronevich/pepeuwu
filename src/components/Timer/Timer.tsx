import { FC } from "react";
import Countdown from "react-countdown";
import { TimerProps } from "./Timer.props";

const renderer = ({
  days,
  hours,
  minutes,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  completed: boolean;
}): JSX.Element => {
  if (completed) {
    return (
      <span className="font-amazing text-shadow-md bg-purple-light border-violet inline-block rounded-3xl border-4 px-12 py-6 text-2xl">
        You are good to go!
      </span>
    );
  } else {
    return (
      <div className="inline-flex items-center gap-1 md:gap-2.5">
        <span className="font-amazing text-shadow-md bg-purple-light border-violet inline-flex items-baseline justify-center gap-2 rounded-xl border-4 px-3 md:min-w-[204px] md:gap-3 md:rounded-3xl md:px-6 md:py-1">
          <span className="text-[28px] leading-[120%] md:text-[56px]">{days}</span>
          <span className="md:text-2xl">days</span>
        </span>
        <span className="font-amazing text-shadow-md bg-purple-light border-violet inline-flex items-baseline justify-center gap-2 rounded-xl border-4 px-3 md:min-w-[204px] md:gap-3 md:rounded-3xl md:px-6 md:py-1">
          <span className="text-[28px] leading-[120%] md:text-[56px]">{hours}</span>
          <span className="md:text-2xl">hours</span>
        </span>
        <span className="font-amazing text-shadow-md bg-purple-light border-violet inline-flex items-baseline justify-center gap-2 rounded-xl border-4 px-3 md:min-w-[204px] md:gap-3 md:rounded-3xl md:px-6 md:py-1">
          <span className="text-[28px] leading-[120%] md:text-[56px]">{minutes}</span>
          <span className="md:text-2xl">min</span>
        </span>
      </div>
    );
  }
};

export const Timer: FC<TimerProps> = ({ time }) => {
  return (
    <>
      <Countdown renderer={renderer} intervalDelay={0} precision={3} date={time} />
    </>
  );
};
