import { FC } from "react";
import { config } from "@/config";
import { Timer } from "@/components";
import video from "@/assets/video.mp4";
import stakeImg from "@/assets/img/stake.png";

export const Stake: FC = () => {
  const { stakeTime } = config;
  return (
    <section id="stake" className="pb-[400px] pt-[20px] lg:pb-[160px] lg:pt-[50px]">
      <div className="relative mx-auto max-w-[1372px] px-4">
        <div className="flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
          <div className="relative w-full max-w-[546px] pb-[50%]">
            <img className="absolute inset-0 object-contain" src={stakeImg} alt="Stake" />
          </div>
          <div className="lg:flex-[0_1_660px]">
            <h2 className="font-amazing text-shadow-md mb-5 text-[36px] leading-[120%] md:text-[64px]">STAKE</h2>
            <div className="bg-purple-light border-violet rounded-2xl border-4 p-3 md:p-6 ">
              <div className="border-violet relative w-full overflow-hidden rounded-xl border-4 pb-[58%]">
                <video
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  src={video}
                  playsInline
                  autoPlay
                  controls
                  muted
                  loop
                />
              </div>
            </div>
            <p className="py-9 md:text-xl">
              Stake your cute tokens and receive cute points. Spend cute points in the game to become the very best
              cutie.
            </p>
            <Timer time={stakeTime} />
          </div>
        </div>
      </div>
    </section>
  );
};
