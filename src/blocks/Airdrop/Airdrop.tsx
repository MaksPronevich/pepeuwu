import { FC } from "react";
import { config } from "@/config";
import { Timer } from "@/components";
import video from "@/assets/video.mp4";

export const Airdrop: FC = () => {
  const { airdropTime, airdropLinkUrl } = config;

  return (
    <section className="pb-[100px] pt-[50px] lg:pb-[160px] lg:pt-[80px]">
      <div className="relative mx-auto max-w-[1372px] px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-shadow-md mb-5 font-amazing text-[36px] leading-[120%] md:text-[64px]">Airdrop</h2>
            <div className="my-8 lg:text-xl">Stay tuned! Airdrop coming soon for the Pepe Uwu game on our website!</div>
            <Timer time={airdropTime} />
            <div className="mt-8 flex justify-center">
              <a
                className="text-shadow pointer-events-none inline-flex h-[60px] w-[181px] shrink-0 items-center justify-center bg-[url('./assets/img/button-teal-bg.png')] bg-cover bg-center bg-no-repeat text-[20px] opacity-50 transition-transform hover:scale-[0.9]"
                href={airdropLinkUrl}
                rel="noreferrer"
                target="_blank"
              >
                AIRDROP
              </a>
            </div>
          </div>
          <div className="w-full max-w-[660px] rounded-2xl border-4 border-violet bg-purple-light p-3 md:p-6 ">
            <div className="relative w-full overflow-hidden rounded-xl border-4 border-violet pb-[58%]">
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
        </div>
      </div>
    </section>
  );
};
