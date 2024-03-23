import { FC } from "react";
import { config } from "@/config";
import { Timer } from "@/components";
import nftImg from "@/assets/img/nft.png";

export const Nft: FC = () => {
  const { markerplaceLinkUrl, nftTime } = config;

  return (
    <section id="nft">
      <div className="border-y-4 border-violet bg-gradient-to-t from-[#21BCA1] to-[#A1FFF6] py-[50px] lg:py-[95px]">
        <div className="relative mx-auto max-w-[1372px] px-4">
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="flex max-w-[632px] flex-col items-center">
              <h2 className="text-shadow-md mb-5 font-amazing text-[36px] leading-[120%] md:text-[64px]">NFT</h2>
              <p className="mb-5  max-w-[542px] text-center text-violet md:text-xl">
                Earn the cutest NFTs by playing our game. Stake $CUTE → Earn Ugly Points → Earn NFTs or cosmetics
                in-game.
              </p>
              <Timer time={nftTime} />
              <a
                className="text-shadow pointer-events-none mt-8 inline-flex h-[66px] w-[185px] shrink-0 items-center justify-center bg-[url('./assets/img/button-purple-bg.png')] bg-cover bg-center bg-no-repeat text-[20px] uppercase opacity-50 transition-transform hover:scale-[0.9]"
                href={markerplaceLinkUrl}
                rel="noreferrer"
                target="_blank"
              >
                Marketplace
              </a>
            </div>
            <div className="right-4 top-1/2 lg:absolute lg:w-[45%] lg:-translate-y-1/2">
              <img src={nftImg} alt="NFT" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
