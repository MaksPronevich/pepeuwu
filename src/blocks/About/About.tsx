import { FC } from "react";
import video from "@/assets/video.mp4";

export const About: FC = () => {
  return (
    <section id="about" className="py-[50px] lg:py-[160px]">
      <div className="relative mx-auto max-w-[1372px] px-4">
        <div className="flex flex-col-reverse items-center justify-between gap-6 lg:flex-row">
          <div className="bg-purple-light border-violet w-full max-w-[660px] rounded-2xl border-4 p-3 md:p-6 ">
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
          <div className="max-w-[546px]">
            <h2 className="font-amazing text-shadow-md mb-5 text-[36px] leading-[120%] md:text-[64px]">About</h2>
            <div className="md:text-xl">
              <p>
                Pepe Uwu (CUTE) is stepping up, leaving the world of endless meme coin bullshit behind. It's time for
                the iconic meme to claim his throne in the meme coin kingdom. Stealth launched with a focus on
                community: no presale, zero taxes, liquidity locked, and full transparency.
              </p>
              <br />
              <p>
                $CUTE is all about returning memecoins to their glory, powered by meme magic, deflationary tokenomics,
                and games. The real king of memes is here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
