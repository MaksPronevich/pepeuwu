import { config } from "@/config";
import { FC, useState } from "react";
import { MarketsBlock } from "@/components";
import octopusImg from "@/assets/img/octopus.png";
import scorpionImg from "@/assets/img/scorpion.png";
import phoneGameImg from "@/assets/img/phone-game.png";

export const Intro: FC = () => {
  const { dextoolsLinkUrl, tokenAddress } = config;
  const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);

  const copyHandler = (copiedText: string): void => {
    navigator.clipboard.writeText(copiedText);
    setIsNotificationVisible(true);
    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 500);
  };

  return (
    <section className=" overflow-hidden bg-[url('./assets/img/intro-bg.png')] bg-cover bg-center bg-no-repeat pb-[88px] pt-[175px]">
      <div className="relative mx-auto max-w-[1372px] px-4">
        <div className="relative z-30 mx-auto w-full max-w-[888px] pb-[45%] lg:pb-[32%]">
          <img className="absolute left-0 top-0 h-full w-full object-contain" src={phoneGameImg} alt="PEPEUWU Game" />
        </div>
        <div className="relative z-30 mx-auto mt-7 sm:max-w-[80%] lg:max-w-[60%] xl:max-w-full">
          <h1 className="text-shadow-md font-amazing mx-auto max-w-[935px] text-center text-[36px] leading-[120%] sm:text-[48px] lg:text-[64px]">
            PEPE UWU ($CUTE) THE CUTEST SOLANA FROG <span className="whitespace-nowrap">( ๑ ˃̵ᴗ˂̵)و ♡</span>
          </h1>
          <div className="my-9 flex flex-col items-center justify-center gap-4 lg:flex-row xl:gap-7">
            <div className="border-violet bg-violet/40 relative inline-flex items-center gap-3 rounded-2xl border-4 py-1 pl-3 pr-1.5 lg:gap-6 lg:pl-6">
              <div className="w-[180px] truncate sm:w-auto">
                <span>{tokenAddress}</span>
              </div>
              <button
                className="text-shadow inline-flex h-[40px] w-[123px] shrink-0 items-center justify-center bg-[url('./assets/img/button-teal-bg.png')] bg-cover bg-center bg-no-repeat text-[20px] transition-transform hover:scale-[0.9]"
                onClick={() => copyHandler(tokenAddress)}
              >
                COPY
              </button>
              {isNotificationVisible && (
                <div className="border-violet bg-violet/40 absolute -bottom-[41px] right-0 rounded-lg border-2 px-4 py-1">
                  Copied
                </div>
              )}
            </div>
            <a
              className="text-shadow inline-flex h-[60px] w-[181px] shrink-0 items-center justify-center bg-[url('./assets/img/button-teal-bg.png')] bg-cover bg-center bg-no-repeat text-[20px] transition-transform hover:scale-[0.9]"
              href={dextoolsLinkUrl}
              rel="noreferrer"
              target="_blank"
            >
              DEXTOOLS
            </a>
          </div>
          <p className="mx-auto max-w-[708px] text-center text-[20px]/[120%]">
            The cutest and most memable memecoin in existence. Who wants to pay $100 gas fees just to get their sweet
            meme coin fix? Get the only real Pepe on Solana, $CUTE, in the fastest, and cheapest way possible.
          </p>
        </div>
        <MarketsBlock className="absolute -bottom-[10%] right-4 z-40 hidden lg:inline-flex xl:-bottom-[2%]" />
        <img className="absolute -left-[8%] bottom-0 z-10 hidden lg:block" src={octopusImg} alt="Octopus" />
        <img
          className="absolute -right-[30%] top-1/2 z-10 hidden -translate-y-1/2 lg:block"
          src={scorpionImg}
          alt="Scorpion"
        />
      </div>
    </section>
  );
};
