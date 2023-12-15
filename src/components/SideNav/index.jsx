import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/klaytn-logo.svg";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { MainSideBar, Nav, UserController } from "./SideNav.styles";
import { useRouter } from "next/router";

function SideNav() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleClick = () => {
    document.body.classList.toggle("nav-active");
  };

  return (
    <MainSideBar>
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="klaytn" />
        </Link>
      </div>
      <Nav>
        <ul className="main-nav">
          <li
            onClick={handleClick}
            className={
              activeLink.includes("/admin/transfer-request") ? "active" : ""
            }
          >
            <Link
              href="/admin/transfer-request"
              onClick={() => handleLinkClick("Transfer Requests")}
            >
              Transfer Requests
            </Link>
          </li>
          <li
            onClick={handleClick}
            className={activeLink === "/admin/batch-transfer" ? "active" : ""}
          >
            <Link href="/admin/batch-transfer">Batch Transfer</Link>
          </li>
          <li
            onClick={handleClick}
            className={activeLink === "/admin/safes" ? "active" : ""}
          >
            <Link href="/admin/safes">Safes</Link>
          </li>
          <li
            onClick={handleClick}
            className={activeLink === "/admin/program" ? "active" : ""}
          >
            <Link href="/admin/program">Programs</Link>
          </li>
          <li
            onClick={handleClick}
            className={
              activeLink.includes("/admin/nft-redemption") ? "active" : ""
            }
          >
            <Link href="/admin/nft-redemption">NFT Collections</Link>
          </li>
          <li
            onClick={handleClick}
            className={activeLink === "/emissary-settings" ? "active" : ""}
          >
            <Link href="/emissary-settings">Emissary Settings</Link>
          </li>
        </ul>
      </Nav>
      <UserController>
        <div className="icon-box">
          <FaRegCircleUser size="22" />
        </div>
        <span className="name">8Eo3...KAFL</span>
        <button type="button" className="btn">
          Contoller
        </button>
      </UserController>
    </MainSideBar>
  );
}

export default SideNav;
