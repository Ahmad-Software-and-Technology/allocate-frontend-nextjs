import React, { useEffect, useState } from "react";
import autoSubmit from "../../../../public/autoSubmit.gif";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
import Image from "next/image";
import Button from "@/components/Button/Button";
export const AutoSubmitStyles = styled.div`
  max-width: 444px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: var(--white);
  padding: 0px 50px 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .imageWrapper {
    max-width: 290px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .submitText {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    p {
      color: var(--gray-50);
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .scaning {
    color: var(--blue);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const Detected = styled.div`
  width: 444px;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  position: relative;
  background: var(--white);
  .icon {
    position: absolute;
    right: 10px;
    top: 17px;
  }
  .itemWrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    button {
      max-width: 170px;
      margin: 36px auto;
    }
  }
  .detectedNftHEading {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: relative;
    padding: 21px;

    &::before {
      content: "";
      position: absolute;
      height: 1px;
      background: var(--gray-300);
      top: 54px;
      left: 0;
      right: 0;
    }
  }
`;
export const Item = styled.div`
  border-radius: 5px;
  border: 1px solid
    ${({ color }) => (color ? "var(--blue)" : "var(--gray-300)")};
  padding: 16px 18px;
  color: ${({ color }) => (color ? "var(--blue)" : "var( --solid-gray)")};
`;
const AutoSubmit = ({ scan, setScan, setModal }) => {
  const NftCard = [
    "Klaytn Hackathon 2023 Winner Badges",
    "Polkadot Azuki",
    "Klaytn Hackathon 2023 Winner Badges",
  ];
  const [slectedCard, setSlectedCard] = useState(null);
  function handelClick(index) {
    setSlectedCard(index);
  }

  useEffect(() => {
    setTimeout(() => {
      setScan(true);
    }, 2000);
  }, []);

  return (
    <>
      {!scan ? (
        <AutoSubmitStyles>
          <div className="imageWrapper">
            <Image src={autoSubmit} alt="autoSubmit" />
          </div>
          <div className="submitText">
            <span className="scaning">Scanning NFT Collections...</span>
            <p>
              Detecting usable NFT collection in your wallet bonded by this
              emissary. Do not close the window during this process.
            </p>
          </div>
        </AutoSubmitStyles>
      ) : (
        <Detected>
          <div className="detectedNftHEading">
            Detected Usable NFT Collections
            <span className="icon" onClick={() => setModal(false)}>
              <RxCross2 size="22" />
            </span>
          </div>
          <form className="itemWrapper">
            {NftCard.map((elem, ind) => (
              <Item
                color={slectedCard === ind ? true : false}
                key={ind}
                onClick={() => handelClick(ind)}
              >
                {elem}
              </Item>
            ))}
            <Button variant="primary">Apply</Button>
          </form>
        </Detected>
      )}
    </>
  );
};

export default AutoSubmit;
