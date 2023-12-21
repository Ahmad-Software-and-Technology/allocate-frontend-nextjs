import React from "react";
import Image from "next/image";
import logoImg from "../../../public/injective.png";
import { WelcomeColumn } from "./WelcomeEmissary.styles";

const WelcomeEmissary = () => {
  return (
    <WelcomeColumn>
      <div className="wrap">
        <strong className="title">
          Welcome to
          <br /> Injective DAO’s Emissary.
        </strong>
        <div className="logo-box">
          <Image src={logoImg} alt="img description" />
        </div>
      </div>
    </WelcomeColumn>
  );
};

export default WelcomeEmissary;
