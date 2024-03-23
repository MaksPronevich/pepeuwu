import { FC } from "react";
import { config } from "@/config";
import { TickerPanel } from "@/components";
import { Nft, Buy, Game, Intro, Stake, About, Footer, Header, Airdrop, Community } from "@/blocks";

export const App: FC = () => {
  const { tickerPanelData } = config;

  return (
    <div className="relative">
      <Header />
      <Intro />
      <TickerPanel data={tickerPanelData} />
      <Game />
      <Stake />
      <Nft />
      <About />
      <Buy />
      <Airdrop />
      <TickerPanel data={tickerPanelData} />
      <Community />
      <Footer />
    </div>
  );
};
