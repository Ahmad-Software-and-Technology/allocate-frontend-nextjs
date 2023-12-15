import React, { useState } from "react";
import CombineInput from "../InputFields/CombineInput";
import Button from "../Button/Button";
import { GeneralTabHolder } from "./NFTaccessTab.styles";
import CheckBox from "../CheckBox";
import AssetsDropDown from "../InputFields/AssetsDropDown";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function NFTaccessTab() {
  const [toggleform, setToggleform] = useState(0);
  const notify = () =>
    toast.success("Changes saved successfully!", {
      hideProgressBar: true,
      icon: false,
    });
  return (
    <GeneralTabHolder>
      <ToastContainer />

      <form>
        <div className="content-holder">
          <div className="box">
            <strong className="subtitle">Emissary Access Method</strong>
            <p>Choose only one access method from the two below.</p>
          </div>
          <div className="box">
            {/* first check Box item */}
            <div className="checkBoxWrapper">
              <CheckBox
                type="checkbox"
                id="default"
                For="default"
                label="Access open for everyone (Default)"
              />
              <div className="formWrapper">
                <p>
                  Everyone can access to this emissary after connecting their
                  wallet at my emissary homepage. Perfect for community which
                  not everyone owns a certain NFT collection and need to process
                  different payouts!
                </p>
              </div>
            </div>
            <div className="checkBoxWrapper">
              <CheckBox
                type="checkbox"
                id="nft"
                For="nft"
                label="Access open for NFT collection holders only"
                onChange={(e) =>
                  e.target.checked == true ? setToggleform(1) : setToggleform(0)
                }
              />
              <div className="formWrapper">
                <p>
                  Only certain NFT collection holder can access to this emissary
                  after connecting their wallet at my emissary homepage. Perfect
                  for community with an NFT collection as an identity!
                </p>
                {toggleform == 1 && (
                  <div className="borderform">
                    <CombineInput label="NFT contract address" />
                  </div>
                )}
              </div>
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
  );
}

export default NFTaccessTab;
