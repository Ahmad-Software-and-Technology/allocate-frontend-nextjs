import React, { useState } from "react";
import Image from "next/image";
import walletImg from "../../../public/walletIcon.png";
import Button from "../Button/Button";
import { WalletColumn } from "./WalletConnected.styles";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { storeAddress } from "../../redux/AddressRedux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API } from "@/service/api/api";
import { storeToken, storeUser } from "@/service/storage/storage";


const WalletConnected = ({ isConnected, setIsConnected }) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const walletConnected = localStorage.getItem("isConnected")
  const [body, setBody] = useState({})


  const handleConnect = async () => {
    const chainIdHex = '0x' + parseInt('1738').toString(16);

    const chainData = {
      chainId: chainIdHex,
      chainName: 'Custom Network',
      nativeCurrency: {
        name: 'INJ',
        symbol: 'INJ',
        decimals: 18,
      },
      rpcUrls: ['https://inevm-rpc.caldera.dev'],
      blockExplorerUrls: ['https://explorer.injective.network'],
    };

    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainData.chainId }],
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [chainData],
            });
          } catch (addError) {
            console.error('Error adding new chain:', addError);
            return;
          }
        } else {
          console.error('Error switching to new chain:', switchError);
          return;
        }
      }


      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected', accounts[0]);
        const address = accounts[0]
        localStorage.setItem("isConnected", "true")
        dispatch(storeAddress(accounts[0]));
        setIsConnected(true)
        toast.success("Wallet connected successfully!", {
          hideProgressBar: true,
          icon: false,
        });
        handleLogin(address)
      } catch (connectError) {
        // Handle errors when requesting accounts
        console.error('Error connecting to wallet:', connectError);
      }
    } else {
      console.log('MetaMask is not installed!');
    }
  };



  const handleConnectAndNavigation = async () => {
    const chainIdHex = '0x' + parseInt('1738').toString(16);

    const chainData = {
      chainId: chainIdHex,
      chainName: 'Custom Network',
      nativeCurrency: {
        name: 'INJ',
        symbol: 'INJ',
        decimals: 18,
      },
      rpcUrls: ['https://inevm-rpc.caldera.dev'],
      blockExplorerUrls: ['https://explorer.injective.network'],
    };

    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainData.chainId }],
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [chainData],
            });
          } catch (addError) {
            console.error('Error adding new chain:', addError);
            return;
          }
        } else {
          console.error('Error switching to new chain:', switchError);
          return;
        }
      }
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected', accounts[0]);
        const address = accounts[0]
        localStorage.setItem("isConnected", "true")
        dispatch(storeAddress(accounts[0]));
        setIsConnected(true)
        handleLogin(address)
        router.push("/emissary-listed")
      } catch (connectError) {
        // Handle errors when requesting accounts
        console.error('Error connecting to wallet:', connectError);
      }
    } else {
      console.log('MetaMask is not installed!');
    }
  };


  const handleLogin = async (address) => {
    if (!address) {
      return toast.error("Wallet address not found!", {
        hideProgressBar: true,
        icon: false,
      });
    }
    body.userAddress = address
    await API.login(body).then((resp) => {
      if (resp.status === 200) {
        storeToken(resp?.data?.data?.token);
        storeUser(resp?.data?.data);
      }
    });
  }

  return (

    <WalletColumn>
      <ToastContainer />
      <div className="wrap">
        <div className="icon-box">
          <Image src={walletImg} alt="img description" />
        </div>
        <strong className="title">Keplr Wallet</strong>

        <div className="btn-holder">
          <Button onClick={() => walletConnected ? handleConnectAndNavigation() : handleConnect()} variant="primary" width="200">
            {walletConnected ? "Continue" : "Connect"}
          </Button>
        </div>
      </div>
    </WalletColumn>
  );
};

export default WalletConnected;
