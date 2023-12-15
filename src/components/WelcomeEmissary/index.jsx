import React from "react";
import Image from "next/image";
import logoImg from "../../../public/klaytn-logo.svg";
import { WelcomeColumn } from "./WelcomeEmissary.styles";

const WelcomeEmissary = () => {
  return (
    <WelcomeColumn>
      <div className="wrap">
        <strong className="title">
          Welcome to
          <br /> Klaytn DAO’s Emissary.
        </strong>
        <div className="logo-box">
          <Image src={logoImg} alt="img description" />
        </div>
      </div>
    </WelcomeColumn>
  );
};

export default WelcomeEmissary;
