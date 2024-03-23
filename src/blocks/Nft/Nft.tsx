import { FC } from "react";
import { config } from "@/config";
import nftImg from "@/assets/img/nft.png";

export const Nft: FC = () => {
  const { markerplaceLinkUrl } = config;

  return (
    <section id="nft">
      <div className="border-violet border-y-4 bg-gradient-to-t from-[#21BCA1] to-[#A1FFF6] py-[50px] lg:py-[95px]">
        <div className="relative mx-auto max-w-[1372px] px-4">
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="flex max-w-[542px] flex-col items-center">
              <h2 className="font-amazing text-shadow-md mb-5 text-[36px] leading-[120%] md:text-[64px]">NFT</h2>
              <p className="text-violet mb-5 text-center md:text-xl">
                Earn the cutest NFTs by playing our game. Stake $CUTE → Earn Ugly Points → Earn NFTs or cosmetics
                in-game.
              </p>
              <a
                className="text-shadow inline-flex h-[66px] w-[185px] shrink-0 items-center justify-center bg-[url('./assets/img/button-purple-bg.png')] bg-cover bg-center bg-no-repeat text-[20px] uppercase transition-transform hover:scale-[0.9]"
                href={markerplaceLinkUrl}
                rel="noreferrer"
                target="_blank"
              >
                Marketplace
              </a>
            </div>
            <div className="right-4 top-1/2 lg:absolute lg:w-[50%] lg:-translate-y-1/2">
              <img src={nftImg} alt="NFT" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
