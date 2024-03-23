import { FC } from "react";
import flightImg from "@/assets/img/flight.png";

export const Community: FC = () => {
  return (
    <section
      id="community"
      className="relative bg-[url('./assets/img/stars-bg.png')] bg-cover bg-center bg-no-repeat pb-[230px] pt-[60px] sm:pb-[280px] md:pb-[320px] lg:pb-[10%] lg:pt-[150px]"
    >
      <div className="relative mx-auto max-w-[1372px] px-4">
        <div className="grid justify-items-center gap-y-6 md:grid-cols-2">
          <div className="max-w-[432px] md:justify-self-start">
            <h2 className="font-amazing text-shadow-md mb-5 text-center text-[36px] leading-[120%] md:text-[64px]">
              ROADMAP
            </h2>
            <div className="text-center md:text-xl">
              <p>Phase 1,000,000:</p>
              <br />
              <p>Become the biggest PEPE of Solana</p>
            </div>
          </div>
          <div className="max-w-[432px] md:justify-self-end">
            <h2 className="font-amazing text-shadow-md mb-5 text-center text-[36px] leading-[120%] md:text-[64px]">
              TOKENOMICS
            </h2>
            <div className="text-center md:text-xl">
              <p>Total & Circulating Supply</p>
              <div className="font-amazing text-shadow-md text-[40px] leading-[120%]">777,777,777,777</div>
              <p>Simple. No taxes, no presale. Fair launch, LP locked forever, ownership renounced.</p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute -bottom-[4%] left-1/2 z-30 -translate-x-1/2 sm:-bottom-[6%] md:-bottom-[9%] lg:-bottom-[20%]"
        src={flightImg}
        alt="Flight"
      />
    </section>
  );
};
