"use client";
import React, { useState } from "react";
import CombineInput from "../InputFields/CombineInput";
import Button from "../Button/Button";
import Image from "next/image";
import plusIcon from "../../../public/plusIcon.png";
import { LuFiles } from "react-icons/lu";
import { GeneralTabHolder } from "./GeneralInfoTab.styles";
import AssetsDropDown from "../InputFields/AssetsDropDown";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function GeneralInfoTab() {
  const [assetsValue, setAssetsValue] = useState("Select an asset");
  const [uploadedNft, setUploadedNft] = useState("");

  function handelDataProgram(params) {
    // setvalue(params);
  }
  const notify = () =>
    toast.success("Changes saved successfully!", {
      hideProgressBar: true,
      icon: false,
    });

  return (
    <>
      <GeneralTabHolder>
        <ToastContainer />
        <form>
          <div className="content-holder">
            <div className="box">
              <CombineInput label="Name of emissary" placeholder="Klaytn" />
            </div>
            <div className="box">
              <strong className="subtitle">Emissary Unique Code</strong>
              <p>
                This unique code is generated at the time you create the
                emissary and cannot be changed. Your client can use this unique
                code to direct to your emissary homepage (without the need of
                URL).
              </p>
              <div className="code-input">
                <button className="btn-copy" type="button">
                  <LuFiles size="20" />
                </button>
                <input type="text" placeholder="32sj34" />
              </div>
            </div>
            <div className="box">
              <strong className="subtitle">Utilize Asset(s)</strong>
              <p>
                Add asset(s) that will be using in this emissary for transfer
                requests and safes payout.
              </p>
              <AssetsDropDown
                onChange={(value) => console.log(value)}
                selectedValue={assetsValue}
                setSelectedValue={setAssetsValue}
              />
            </div>
            <div className="recommend-img">
              <div className="text-box">
                <strong className="subtitle">Logo Image</strong>
                <p>
                  Recommend an image with a ratio of 4:1 and transparent
                  background for the perfect effect.
                </p>
              </div>
              <div className="logo-holder">
                <label htmlFor="upload">
                  <Image
                    src={
                      uploadedNft ? URL.createObjectURL(uploadedNft) : plusIcon
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
            </div>
          </div>
          <div className="btn-holder">
            <Button variant="primary" type="button" onClick={notify}>
              Save Changes
            </Button>
          </div>
        </form>
      </GeneralTabHolder>
    </>
  );
}

export default GeneralInfoTab;
