import styled from "styled-components";

export const ProgramStyled = styled.form`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px; */
  color: var(--gray-50);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  max-width: 580px;
  width: 100%;

  .buttonWrapp {
    display: flex;
    gap: 10px;
    margin: 20px 0;

    @media (min-width: 768px) {
      margin: 20px 0 20px 30px;
    }
  }

  p {
    padding-top: 10px;
  }

  .heading {
    color: var(--blue);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }
  .inputWrapper {
    width: 100%;
    margin-bottom: 20px;
  }
  .checkBoxWrapper {
    margin-bottom: 29px;
    width: 100%;
  }
  .formWrapper {
    width: 100%;

    @media (min-width: 768px) {
      margin-left: 30px;
    }
  }
  .borderform {
    border-radius: 5px;
    border: 1px solid var(--gray-300);
    padding: 16px 15px;
    width: 100%;
    margin-top: 8px;

    @media (min-width: 768px) {
      padding: 20px 29px;
    }

    .input {
      margin-top: 20px;
      &:first-child {
        margin-top: 0;
      }
    }

    .amountDrop {
      display: flex;
      input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .amount {
        max-width: 112px;
        width: 100%;
        margin-top: 17px;
        /* z-index: 2; */
        ul {
          padding: 14px 18px;
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
          color: var(--blue);
        }
      }
    }
  }
`;

export const UploadImage = styled.div`
  position: relative;
  padding-top: 20px;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 55px;
    padding-top: 40px;
  }

  .inputupload {
    display: none;
  }

  .text {
    position: relative;
    margin: 0 0 13px;

    @media (min-width: 768px) {
      margin: 0;
    }

    strong.title {
      display: block;
      color: var(--solid-gray);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    p {
      max-width: 206px;
      margin: 0;
    }
  }

  .labelBorder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 217px;
    height: 217px;
    border-radius: 5px;
    border: 1px solid var(--gray-300);
    overflow: hidden;
  }
`;

export const FinalCheck = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  width: 100%;
  p {
    margin: 0;
  }
  strong {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  label {
    color: var(--gray-50);
  }
`;

import React, { useState } from "react";
import CombineInput from "../InputFields/CombineInput";
import CheckBox from "../CheckBox";
import PaymentDropDown from "../InputFields/PaymentDropDown";
import Image from "next/image";
import plusIcon from "../../../public/plusIcon.png";
import Button from "../Button/Button";
import {
  NftCreationprocess,
  NftDetailWrapper,
} from "../NftCreationComp/NftCreation";
import nftGif from "../../../public/nftCreation.gif";
import NftCreated from "./NftCreatedComp";
import AutoSubmittedComp from "./AutoSubmittedComp";
const ProgramCreation = () => {
  const [uploadedNft, setUploadedNft] = useState("");
  const [toggleform, setToggleform] = useState(false);
  const [toggleform1, setToggleform1] = useState(false);
  const [toggleform2, setToggleform2] = useState(false);

  //using 3rd CheckBox

  // if (true) {
  //   return <AutoSubmittedComp />;
  // }
  //using Second CheckBox
  // if (true) {
  //   return (
  //     <NftDetailWrapper>
  //       <NftCreationprocess>
  //         <div className="imageWrappe">
  //           <Image src={nftGif} alt="nft creation" />
  //         </div>
  //         <h6>Creating your NFT collection...</h6>
  //         <span className="alert">
  //           Process with the gas fee in order to mint your NFT <br /> Do not
  //           close the window during this process
  //         </span>
  //       </NftCreationprocess>
  //       <NftCreated />
  //     </NftDetailWrapper>
  //   );
  // }
  return (
    <>
      <ProgramStyled>
        <div className="heading">Create programs</div>
        <div className="inputWrapper">
          <CombineInput label="Program name" />
        </div>
        {/* first check Box item */}
        <div className="checkBoxWrapper">
          <CheckBox
            type="checkbox"
            id="program"
            For="program"
            label="Set as token-gated (NFT) program"
            onChange={(e) =>
              e.target.checked == true
                ? setToggleform(true)
                : setToggleform(false)
            }
          />

          <div className="formWrapper">
            <p>
              Only certain NFT holder can create a transfer request of this
              program. You can perfectly <br /> restrict clients who are not
              related to this program to create a transfer request.
            </p>
            {toggleform && (
              <div className="borderform">
                <CombineInput label="NFT contract address" />
              </div>
            )}
          </div>
        </div>
        {/* 2nd check Box item */}
        <div className="checkBoxWrapper">
          <CheckBox
            type="checkbox"
            id="redemption"
            For="redemption"
            label="Setup NFT redemption"
            onChange={(e) =>
              e.target.checked == true
                ? setToggleform1(true)
                : setToggleform1(false)
            }
          />
          <div className="formWrapper">
            <p>
              By enabling this, you can create an NFT collection for this
              program. If your client create a transfer request for this program
              and successfully get paid, they can go to the NFT redemption tab
              to claim their NFT. Perfect for event related programs!
            </p>
            {toggleform1 && (
              <div className="borderform">
                <CombineInput label="Title" className="input" />
                <span>This is the name of your NFT collection</span>
                <CombineInput label="Description" className="input" />
                <span>
                  Briefly describe what’s your NFT collection is about
                </span>
                <CombineInput
                  label="Symbol"
                  placeholder="Example: PYTHON"
                  className="input"
                />
                <span>The symbol for the NFT collection</span>
                <UploadImage>
                  <div className="text">
                    <strong>NFT Image</strong>
                    <p>
                      Upload your NFT media. Supporting JPEG, PNG and GIF.
                      Maximum size is 100 MB.
                    </p>
                  </div>
                  <div className="labelBorder">
                    <label htmlFor="upload">
                      <Image
                        src={
                          uploadedNft
                            ? URL.createObjectURL(uploadedNft)
                            : plusIcon
                        }
                        alt="img"
                        width={uploadedNft && 185}
                        height={uploadedNft && 185}
                      />
                    </label>
                    <input
                      className="inputupload"
                      id="upload"
                      type="file"
                      accept=".png , .jpg , .gif"
                      onChange={(e) => setUploadedNft(e.target.files[0])}
                    />
                  </div>
                </UploadImage>
                <FinalCheck>
                  <strong>Final Check</strong>
                  <p>
                    Please ensure all the inputs and info are correct before
                    publishing this course. As once the NFT contract is
                    deployed, it cant be changed anymore.
                  </p>
                  <CombineInput label="Type your title of NFT collection again to confirm the final check." />
                </FinalCheck>
              </div>
            )}
          </div>
        </div>
        {/* 3rd check Box item */}
        <div className="checkBoxWrapper">
          <CheckBox
            type="checkbox"
            id="Submission"
            For="Submission"
            label="Setup NFT Auto Request Submission"
            onChange={(e) =>
             setToggleform2(e.target.checked) 
               
            }
          />
          <div className="formWrapper">
            <p>
              By enabling this, you can bond an NFT collection to this program.
              When your client is an holder of this NFT collection and creating
              a transfer request, he/she can choose to use Auto Request
              Submission where all the info of the transfer request will
              automatically fill in for him/her. Perfect to a program where the
              amount of transfer request is the same!
            </p>
            {toggleform2 && (
              <div className="borderform">
                <CombineInput label="NFT Contract Address" />
                <div className="amountDrop">
                  <CombineInput label="Request amount" />
                  <PaymentDropDown
                    label=""
                    onChange={(param) => console.log(param)}
                    className="amount"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="buttonWrapp">
          <Button variant="outline" type="reset">
            Clear
          </Button>
          <Button variant="primary">Submit</Button>
        </div>
      </ProgramStyled>
      {/* when second checkBox is checked and form is submitted this part will work */}
      {/* <NftDetailWrapper>
        <NftCreationprocess>
          <div className="imageWrappe">
            <Image src={nftGif} alt="nft creation" />
          </div>
          <h6>Creating your NFT collection...</h6>
          <span className="alert">
            Process with the gas fee in order to mint your NFT <br /> Do not
            close the window during this process
          </span>
        </NftCreationprocess>
        <NftCreated />
      </NftDetailWrapper> */}
      {/* After form submision this part will work */}

      {/* when third checkBox is checked and form is submitted this part will work */}

      {/* <AutoSubmittedComp /> */}
    </>
  );
};

export default ProgramCreation;
