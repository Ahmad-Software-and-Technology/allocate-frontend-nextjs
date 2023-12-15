import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";
import file from "../../../public/file.svg";
import Modal from "../Modal/Modal";
import Status from "../StatusComponent/Status";
import ChangeStatusAuto from "../ChangeStatusAuto";
import {
  RequestBlock,
  Header,
  ContentWrap,
  TaxDocument,
  Footer,
  TimeStampList,
} from "./TransferRequestAdmin.styles";
import { useRouter } from "next/router";

function TransferRequestAdmin({ setHandelForm }) {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [buttonValue, setButtonValue] = useState("On Hold");
  const [checkButton, setCheckButton] = useState(buttonValue);
  const router = useRouter();
  useEffect(() => {
    setButtonValue(router?.query.data || "On Hold");
  }, [router?.query.data]);
  console.log(buttonValue);

  console.log(router.query);
  function handelValue(elem) {
    setButtonValue(elem);
    console.log(elem);
  }
  function handelSelectValue() {
    setModal(true);
  }

  return (
    <RequestBlock>
      {buttonValue == "On Hold" && (
        <Modal layer open={modal} setOpen={setModal}>
          <Status setModal={setModal} handelChange={handelValue} />
        </Modal>
      )}
      <Modal layer open={modal2} setOpen={setModal2}>
        <ChangeStatusAuto
          setModal={setModal2}
          setHandelForm={setHandelForm}
          setButtonValue={setButtonValue}
        />
      </Modal>

      <Header>
        <strong className="subtitle">Transfer Request</strong>
        <Button
          className="btn"
          variant="light"
          onClick={() => handelSelectValue()}
        >
          {buttonValue}
        </Button>
        <span className="request-number">#915942594164</span>
        <span className="date">Created on 17 August 2023</span>
      </Header>
      <ContentWrap>
        <div className="info-box">
          <strong className="label-text">Applier</strong>
          <span className="text">
            5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
          </span>
        </div>
        <div className="info-box">
          <strong className="label-text">Program</strong>
          <span className="text">Klaymakers22 Global Hackathon</span>
        </div>
        <div className="info-box">
          <strong className="label-text">Project Name</strong>
          <span className="text">Chameleon</span>
        </div>
        <div
          className={
            buttonValue == "Approved"
              ? "infoBoxwithButton"
              : buttonValue == "Paid"
              ? "infoBoxwithButton"
              : ""
          }
        >
          <div className="info-box">
            <strong className="label-text">Requested Amount</strong>
            <span className="text">732 KLAY</span>
          </div>
          {buttonValue == "Approved" && (
            <Button variant="outline" onClick={() => setModal2(true)}>
              Process Payout
            </Button>
          )}
          {buttonValue == "Paid" && (
            <span className="transfer"> View Transfer Memo</span>
          )}
        </div>
        <TaxDocument>
          <strong className="title">Tax Documents</strong>
          <a
            href="/file.svg"
            passHref
            locale={false}
            download
            className="document"
          >
            <Image src={file} width="22" alt="file" />
            form_w8.pdf
          </a>
        </TaxDocument>
      </ContentWrap>
      <Footer>
        <strong className="title">Processing Timestamp</strong>
        <TimeStampList>
          <div className="list">
            <span className="text">8Eo3...KAFL</span>
            <span className="text">
              Changed status from <strong>On Hold</strong> to{" "}
              <strong>Approved</strong>
            </span>
            <span className="text">18/8/2023, 13:25:34pm</span>
          </div>
          <div className="list">
            <span className="text">8Eo3...KAFL</span>
            <span className="text">
              Changed status from <strong>SUBMITTED</strong> to{" "}
              <strong>ON HOLD</strong>
            </span>
            <span className="text">18/8/2023, 13:25:34pm</span>
          </div>
        </TimeStampList>
      </Footer>
    </RequestBlock>
  );
}

export default TransferRequestAdmin;
