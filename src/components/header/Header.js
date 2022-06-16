import React from "react";
import "./Header.scss";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter.svg";
import { ReactComponent as DiscordIcon } from "../../assets/images/discord.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/images/website.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram.svg";
import { ReactComponent as MediumIcon } from "../../assets/images/medium.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/telegram.svg";
import { ReactComponent as UploadIcon } from "../../assets/images/upload.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/Button.svg";
import { ReactComponent as EditIcon } from "../../assets/images/editIcon.svg";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as AdressIcon } from "../../assets/images/Address tag.svg";
import florePrice from "../../assets/images/FlorePrice.png";
import owners from "../../assets/images/owners.png";
import volumeTrade from "../../assets/images/volumeTrade.png";
import items from "../../assets/images/items.png";

export default function Header() {
  const socialIcons = [
    {
      id: 1,
      name: "Twitter",
      icon: <TwitterIcon />,
    },
    {
      id: 2,
      name: "Discord",
      icon: <DiscordIcon />,
    },
    {
      id: 3,
      name: "Website",
      icon: <WebsiteIcon />,
    },
    {
      id: 4,
      name: "Instagram",
      icon: <InstagramIcon />,
    },
    {
      id: 5,
      name: "Medium",
      icon: <MediumIcon />,
    },
    {
      id: 6,
      name: "Telegram",
      icon: <TelegramIcon />,
    },
  ];
  return (
    <div className="header-wrapper">
      <div className="header-bg">
        <div className="upload-logo">
          <UploadIcon />
        </div>
      </div>
      <div className="header-parent">
        <div className="header-container">
          <div className="header">
            <div className="logo">
              <LogoIcon />
              <div className="adress-info">
                <h1>Fluf World</h1>
                <AdressIcon />
              </div>
            </div>
            <div className="findUs">
              {socialIcons.map((s) => {
                return (
                  <div key={s.id} className="social-icon">
                    <span className="tooltip">{s.name}</span>
                    {s.icon}
                  </div>
                );
              })}
              <div className="menu-icon">
                <MenuIcon />
                <span className="tooltip-list">
                  <ul>
                    <li>
                      <TwitterIcon /> Twitter
                    </li>
                    <li>
                      <DiscordIcon /> Discord
                    </li>
                    <li>
                      <WebsiteIcon /> Website
                    </li>
                    <li>
                      <InstagramIcon /> Instagram
                    </li>
                    <li>
                      <MediumIcon /> Medium
                    </li>
                    <li>
                      <TelegramIcon /> Telegram
                    </li>
                  </ul>
                </span>
              </div>
              <button className="btn-vote">Vote</button>
                <button className="btn-edit">
                  Edit
                  <EditIcon />
                </button>
            </div>
          </div>
          <div className="info-header">
            <div>
              <img src={items} alt={items} />
              <h1>5.2K</h1>
            </div>
            <div>
              <img src={owners} alt={owners} />
              <h1>354</h1>
            </div>
            <div>
              <img src={florePrice} alt={florePrice} />
              <h1>0.62</h1>
            </div>
            <div>
              <img src={volumeTrade} alt={volumeTrade} />
              <h1>243.6</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
