import { config } from "@/config";
import { FC, Fragment } from "react";
import logoImg from "@/assets/img/logo.png";
import closeImg from "@/assets/img/close.svg";
import burgerImg from "@/assets/img/burger.svg";
import { Popover, Transition } from "@headlessui/react";

export const Header: FC = () => {
  const { headerNav, playNowLinkUrl, airdropLinkUrl } = config;
  return (
    <header className="absolute left-0 top-0 z-50 min-h-[146px] w-full">
      <div className="mx-auto max-w-[1372px] px-4">
        <nav className="flex items-center justify-between">
          <ul className="hidden flex-[0_1_50%] flex-wrap justify-between gap-4 lg:flex">
            {headerNav.slice(0, 4).map((link, index) => (
              <li key={index}>
                <a className="whitespace-nowrap transition hover:text-teal" href={link.linkUrl}>
                  {link.linkLabel}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex-[0_0_280px] sm:flex-[0_0_340px] xl:flex-[0_0_430px]">
            <img src={logoImg} alt="PEPEUWU" />
          </div>
          <ul className="hidden flex-[0_1_50%] items-center justify-between gap-4 lg:flex">
            {headerNav.slice(-2).map((link, index) => (
              <li key={index}>
                <a className="whitespace-nowrap transition hover:text-teal" href={link.linkUrl}>
                  {link.linkLabel}
                </a>
              </li>
            ))}
            <li>
              <a
                className="inline-flex h-[71px] w-[195px] items-center justify-center whitespace-nowrap bg-[url('./assets/img/button-purple-bg.png')] bg-cover bg-center bg-no-repeat transition-transform hover:scale-[0.9]"
                href={playNowLinkUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-shadow text-[28px]">PLAY NOW</span>
              </a>
            </li>
          </ul>
          <Popover className="relative inline-flex lg:hidden">
            {({ open, close }) => (
              <>
                <Popover.Button className="outline-none">
                  {open && <img src={closeImg} height={35} alt="Close" width={35} />}
                  {!open && <img src={burgerImg} height={35} width={35} alt="Open" />}
                </Popover.Button>
                <Transition
                  enterFrom="opacity-0 translate-y-full"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-full"
                  enterTo="opacity-100 translate-y-0"
                  enter="linear duration-300"
                  leave="linear duration-300"
                  as={Fragment}
                >
                  <Popover.Panel className="absolute right-0 z-[90] mt-10 transform">
                    <div className="rounded-xl border-4 border-teal bg-teal/80 p-3 shadow-lg">
                      <ul className="flex flex-col">
                        {headerNav.map((link, index) => (
                          <li key={index}>
                            <a
                              className="text-shadow inline-flex min-w-[200px] whitespace-nowrap px-2 py-3 text-lg"
                              onClick={() => close()}
                              href={link.linkUrl}
                            >
                              {link.linkLabel}
                            </a>
                          </li>
                        ))}
                        <li>
                          <a
                            className="inline-flex h-[71px] w-[195px] items-center justify-center whitespace-nowrap bg-[url('./assets/img/button-purple-bg.png')] bg-cover bg-center bg-no-repeat transition-transform hover:scale-[0.9]"
                            onClick={() => close()}
                            href={playNowLinkUrl}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span className="text-shadow text-[28px]">PLAY NOW</span>
                          </a>
                          <a
                            className="text-shadow pointer-events-none mt-2 inline-flex h-[71px] w-[195px] shrink-0 items-center justify-center bg-[url('./assets/img/button-purple-bg.png')] bg-cover bg-center bg-no-repeat text-[20px] opacity-50 transition-transform hover:scale-[0.9]"
                            href={airdropLinkUrl}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span className="text-shadow text-[28px]">AIRDROP</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </nav>
      </div>
    </header>
  );
};
