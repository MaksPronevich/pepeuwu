import { config } from "@/config";
import { FC, Fragment } from "react";
import { Timer } from "@/components";
import video from "@/assets/video.mp4";
import { Tab } from "@headlessui/react";
import gameImg from "@/assets/img/game.png";
import gameplayImg from "@/assets/img/gameplay.png";

export const Game: FC = () => {
  const { gamePlayDisabledTime } = config;

  return (
    <section id="game" className="py-[55px]">
      <div className="relative mx-auto max-w-[1372px] px-4">
        <div className="flex flex-col items-center gap-y-6 lg:flex-row">
          <div className="max-w-[660px]">
            <h2 className="font-amazing text-shadow-md mb-5 text-[36px] leading-[120%] md:text-[64px]">GAME</h2>
            <div className="mb-6">
              <p className="md:text-xl">
                THAT’S RIGHT DEGENS, $CUTE IS LEVELING UP. It’s time to show these other shitcoins what a meme coin with
                real utility can do.
              </p>
              <br />
              <p>
                Welcome to our top-down arena shooter game, where you destroy enemies in waves. Upgrade attributes and
                weapons after each wave, and collect Ugly points for rare NFTs and flashy equipment.
              </p>
            </div>
            <div className="text-shadow-md font-amazing text-2xl md:text-4xl">GAME RELEASE Q2 2024</div>
          </div>
          <div className="relative w-full max-w-[680px] pb-[45%]">
            <img className="absolute inset-0 object-contain" src={gameImg} alt="Game" />
          </div>
        </div>
      </div>
      <div className="mt-[150px] bg-[url('./assets/img/game-bg.png')] bg-cover bg-center bg-no-repeat pb-[20px] pt-[25%] md:pt-[20%] lg:py-[55px]">
        <div className="relative mx-auto max-w-[1372px] px-4">
          <div className="">
            <Tab.Group>
              <Tab.List className="flex items-end">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`font-amazing text-shadow-md flex-[0_0_50%] rounded-t-2xl text-[28px] uppercase leading-[120%] outline-none md:text-[36px] lg:text-[64px] ${selected ? "bg-purple-light border-violet border-b-purple-light h-[70px] border-4 lg:h-[102px]" : "bg-violet-light border-violet h-[60px] border-4 lg:h-[91px]"}`}
                    >
                      cinematic
                    </button>
                  )}
                </Tab>

                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`font-amazing text-shadow-md flex-[0_0_50%] rounded-t-2xl text-[28px] uppercase leading-[120%] outline-none md:text-[36px] lg:text-[64px] ${selected ? "bg-purple-light border-violet border-b-purple-light h-[70px] border-4 lg:h-[102px]" : "bg-violet-light border-violet h-[60px] border-4 lg:h-[91px]"}`}
                    >
                      GAMEplay
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels className="bg-purple-light border-violet rounded-b-2xl border-4 border-t-0 p-2 md:p-8 lg:p-12">
                <Tab.Panel>
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
                </Tab.Panel>
                <Tab.Panel>
                  <div className="border-violet relative w-full overflow-hidden rounded-xl border-4 pb-[58%]">
                    <img
                      className="absolute left-0 top-0 h-full w-full object-cover"
                      src={gameplayImg}
                      alt="Gameplay"
                    />
                    <div className="absolute left-1/2 top-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                      <div className="font-amazing text-shadow-md text-[36px] leading-[120%] md:text-[64px]">
                        Coming Soon...
                      </div>
                      <Timer time={gamePlayDisabledTime} />
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </section>
  );
};
