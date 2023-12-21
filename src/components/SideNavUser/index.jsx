import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/klaytn-logo.svg";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { MainSideBar, Nav, UserController } from "./SideNavUser.styles";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getUser } from "@/service/storage/storage";

function SideNavUser() {
  const router = useRouter();
  console.log(router.pathname);
  const user = getUser()
  console.log(user)
  const [activeLink, setActiveLink] = useState(router.pathname);
  const emissary = useSelector((state) => state.emissary.emissary);

  const shorten = (address) => {
    if (address?.length > 10) {
      return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    }
    return address;
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <MainSideBar>
      <div className="logo">
        <Link href="/">
          <Image width={200} height={100} src={emissary?.logo} alt="klaytn" />
        </Link>
      </div>
      <Nav>
        <ul className="main-nav">
          <li
            className={
              activeLink == "/user/transfer-request"
                ? "active"
                : activeLink == "/user/transfer-requests"
                  ? "active"
                  : ""
            }
          >
            <Link href="/user/transfer-request">Transfer Requests</Link>
          </li>
          <li className={activeLink === "/user/batch-transfer" ? "active" : ""}>
            <Link href="/user/batch-transfer">Batch Transfer</Link>
          </li>
          <li className={activeLink === "/user/safes" ? "active" : ""}>
            <Link href="/user/safes">Safes</Link>
          </li>

          <li
            className={
              activeLink.includes("/user/nft-redemption") ? "active" : ""
            }
          >
            <Link href="/user/nft-redemption">NFT Collections</Link>
          </li>
        </ul>
      </Nav>
      <UserController>
        <div className="icon-box">
          <FaRegCircleUser size="22" />
        </div>
        <span className="name">{shorten(user?.address)}</span>
        <button type="button" className="btn">
          User
        </button>
      </UserController>
    </MainSideBar>
  );
}

export default SideNavUser;
