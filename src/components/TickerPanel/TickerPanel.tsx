import { FC } from "react";
import Marquee from "react-fast-marquee";
import coinImg from "@/assets/img/coin.svg";
import { TickerPaneProps } from "./TickerPane.props";

export const TickerPanel: FC<TickerPaneProps> = ({ data }) => {
  return (
    <div>
      <Marquee className="bg-pink border-violet border-y-4 py-4" pauseOnHover speed={100} autoFill>
        {data.map((elem, key) => (
          <div className="mr-12 inline-flex items-center gap-12" key={key}>
            <span className="text-shadow-md text-[30px] uppercase">{elem}</span>
            <img src={coinImg} height={48} width={48} alt="star" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
