import React, { useEffect, useState } from "react";
import Image from "next/image";
import klaytnImg from '../../../public/klaytn.svg';
import { LoginColumn } from "./RecentLogin.styles";
import { API } from "@/service/api/api";





const RecentLogin = () => {

  const [emissaries, setEmissaries] = useState([])


  const handleEmissaries = async () => {
    await API.getUserEmissaries().then((res) => {
      if (res.status === 200) {
        setEmissaries(res.data.data)
      }
    })
  }


  useEffect(() => {
    handleEmissaries();
  }, []);



  return (
    <LoginColumn>
      <ul className="login-list">
        {emissaries.map((data, index) => (<li>
          <div key={index} className="img-box">
            <Image width={35} height={35} src={data.logo} alt="logo" />
            <span className="name">{data.name}</span>
          </div>
          <span className="text">{data.lastLogin}</span>
        </li>))}
      </ul>
    </LoginColumn>
  );
};

export default RecentLogin;
