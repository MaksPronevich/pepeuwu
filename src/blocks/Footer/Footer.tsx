import { FC } from "react";
import { config } from "@/config";
import { MarketsBlock } from "@/components";
import logoImg from "@/assets/img/footer-logo.png";

export const Footer: FC = () => {
  const { footerNav, footerLinks, socials } = config;

  return (
    <footer className="bg-violet relative z-40 py-[40px] lg:py-[72px]">
      <div className="relative mx-auto max-w-[1372px] px-4">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex flex-col items-center gap-6">
            <img src={logoImg} alt="PEPEUWU" height={109} width={242} />
            <div className="max-w-[320px] text-center">
              Embark on an epic arcade shooting adventure with Pepe Uwu! Help Pepe battle diverse monsters in this
              arcade shooter!
            </div>
            <div className="flex justify-between gap-6">
              {footerNav.map((link, index) => (
                <a
                  className="hover:text-teal transition"
                  href={link.linkUrl}
                  rel="noreferrer"
                  target="_blank"
                  key={index}
                >
                  {link.linkLabel}
                </a>
              ))}
            </div>
          </div>
          <MarketsBlock label="Get the app" />
        </div>
        <div className="mt-12 flex flex-col flex-wrap items-center justify-between gap-4 lg:flex-row">
          <div>{new Date().getFullYear()} PepeUwu. All Rights Reserved.</div>
          <div className="flex justify-between gap-3 lg:gap-6">
            {footerLinks.map((link, index) => (
              <a
                className="hover:text-teal whitespace-nowrap transition"
                href={link.linkUrl}
                rel="noreferrer"
                target="_blank"
                key={index}
              >
                {link.linkLabel}
              </a>
            ))}
          </div>
          <div className="flex justify-between gap-5">
            {socials.map((social, index) => (
              <a
                className="transition-transform hover:scale-[0.9]"
                href={social.linkUrl}
                rel="noreferrer"
                target="_blank"
                key={index}
              >
                <img alt={social.socialName} src={social.iconUrl} height={24} width={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
