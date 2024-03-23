import { FC } from "react";
import { config } from "@/config";
import swapImg from "@/assets/img/swap.png";
import walletImg from "@/assets/img/wallet.png";
import solanaImg from "@/assets/img/solana.png";
import raydiumImg from "@/assets/img/raydium.png";

export const Buy: FC = () => {
  const { phantomWalletLinkUrl, raydiumLinkUrl } = config;

  return (
    <section id="buy" className="pb-[50px] lg:pb-[80px]">
      <div className="relative mx-auto max-w-[1372px] px-4">
        <h2 className="font-amazing text-shadow-md mb-10 text-center text-[36px] leading-[120%] md:text-[64px]">
          HOW TO BUY
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-center">
            <img className="h-[110px] w-[110px]" src={walletImg} alt="Wallet" />
            <h3 className="font-amazing text-shadow-md my-6 text-2xl">Create a Wallet</h3>
            <div className="text-center">
              Download Phantom or your wallet of choice from the app store or Google Play store for free. Desktop users,
              download the Google Chrome extension by going to{" "}
              <a
                className="text-teal hover:text-pink transition"
                href={phantomWalletLinkUrl}
                rel="noreferrer"
                target="_blank"
              >
                https://phantom.app/
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-[110px] w-[110px]" alt="Solana Token" src={solanaImg} />
            <h3 className="font-amazing text-shadow-md my-6 text-2xl">Get Some SOL</h3>
            <div className="text-center">
              Have SOL in your wallet to switch to $CUTE. If you don’t have any SOL, you can buy directly on Phantom,
              transfer from another wallet, or buy on another exchange and send it to your wallet.
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-[110px] w-[110px]" alt="Solana Token" src={raydiumImg} />
            <h3 className="font-amazing text-shadow-md my-6 text-2xl">Connect to Raydium</h3>
            <div className="text-center">
              Visit{" "}
              <a
                className="text-teal hover:text-pink transition"
                href={raydiumLinkUrl}
                rel="noreferrer"
                target="_blank"
              >
                https://raydium.io/swap/
              </a>{" "}
              in Chrome or on the browser inside your Metamask app. Connect wallet, paste $CUTE token address, select
              CUTE, confirm, and sign when prompted by Phantom.
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="h-[110px] w-[110px]" alt="Solana Token" src={swapImg} />
            <h3 className="font-amazing text-shadow-md my-6 text-2xl">Switch SOL for $CUTE</h3>
            <div className="text-center">
              Switch SOL for $CUTE. We have ZERO taxes, so you don’t need to worry about buying with a specific
              slippage, although you may need to use slippage during times of market volatility.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
