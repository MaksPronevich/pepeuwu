import { FC } from "react";
import { config } from "@/config";
import appStoreImg from "@/assets/img/app-store.svg";
import googlePlayImg from "@/assets/img/google-play.svg";
import { MarketsBlockProps } from "./MarketsBlock.props";

export const MarketsBlock: FC<MarketsBlockProps> = ({ className = "", label }) => {
  const { googlePlayLinkUrl, appStoreLinkUrl } = config;

  return (
    <div className={`inline-flex flex-col gap-6 ${className}`}>
      {label && <span>{label}</span>}
      <a className="transition-transform hover:scale-[0.9]" href={appStoreLinkUrl} rel="noreferrer" target="_blank">
        <img src={appStoreImg} alt="App Store" width={204} height={60} />
      </a>
      <a className="transition-transform hover:scale-[0.9]" href={googlePlayLinkUrl} rel="noreferrer" target="_blank">
        <img src={googlePlayImg} alt="Google Play" width={204} height={60} />
      </a>
    </div>
  );
};
