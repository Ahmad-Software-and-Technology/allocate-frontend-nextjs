import React, { useEffect, useState } from "react";
import {
  HeadingWrapper,
  TransferStyles,
  Wrapper,
} from "./TransferRequest.styles";
import nft from "../../../public/nft.png";
import file from "../../../public/file.svg";
import Image from "next/image";
import ProgramDropDown from "../InputFields/ProgramDropDown";
import CombineInput from "../InputFields/CombineInput";
import PaymentDropDown from "../InputFields/PaymentDropDown";
import Link from "next/link";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import Modal from "../Modal/Modal";
import AutoSubmit from "./autoSubmit/AutoSubmit";
import { RxCross2 } from "react-icons/rx";

const TransferRequest = () => {
  const router = useRouter();
  const [value, setvalue] = useState(null);
  const [scan, setScan] = useState(false);
  const [modal, setModal] = useState(false);
  const [uploadeDoc, setUploadeDoc] = useState("");
  function handelFileUpload(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile.name.length > 7) {
      setUploadeDoc(`${selectedFile.name.slice(0, 7)}`);
    } else {
      setUploadeDoc(selectedFile.name);
    }
  }
  function handelData(params) {
    setvalue(params);
  }
  function handelDataProgram(params) {
    // setvalue(params);
  }
  function handelSubmit(e) {
    e.preventDefault();
    router.push("/user/transfer-requests");
  }

  useEffect(() => {
    setScan(false);
  }, [modal]);

  return (
    <>
      <Modal layer open={modal} setOpen={setModal}>
        <AutoSubmit scan={scan} setScan={setScan} setModal={setModal} />
      </Modal>
      <TransferStyles>
        <form onSubmit={handelSubmit}>
          <HeadingWrapper>
            <span className="heading">Create transfer request</span>
            <span className="autosubmit" onClick={() => setModal(true)}>
              <Image src={nft} alt="nft" />
              Auto Request Submission
            </span>
          </HeadingWrapper>
          <Wrapper>
            <ProgramDropDown
              onChange={handelData}
              setSelectedValue={setvalue}
              selectedValue={value}
            />
            <CombineInput label="Project Name" />
            <div className="amountDrop">
              <CombineInput label="Request amount" />
              <PaymentDropDown
                label=""
                onChange={handelDataProgram}
                className="amount"
              />
            </div>
            <div className="DocumentUpload">
              <span>Tax Documents</span>
              <p>
                Upload{" "}
                <label htmlFor="upload" className="label">
                  required tax document(s)
                </label>{" "}
                to be associated with requests.
                <br />
                Any update to tax documents will be verified to make sure you
                can legally receive the payout.
              </p>
              <label htmlFor="upload" className="labelButton">
                Upload
              </label>
              <input
                type="file"
                id="upload"
                accept=".pdf"
                onChange={handelFileUpload}
              />
              {uploadeDoc && (
                <div className="uploadedDocument">
                  {" "}
                  <Image src={file} alt="file" />
                  <a href="/file.svg" passHref locale={false} download>
                    {uploadeDoc}.pdf
                  </a>
                  <span className="icon" onClick={() => setUploadeDoc("")}>
                    <RxCross2 color="var(--gray-50)" size="22" />
                  </span>
                </div>
              )}
            </div>
          </Wrapper>
          <Button variant="outline" type="button">
            Clear
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </TransferStyles>
    </>
  );
};

export default TransferRequest;
