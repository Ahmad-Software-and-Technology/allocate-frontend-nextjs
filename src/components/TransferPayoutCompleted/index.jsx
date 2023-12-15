import React, { useState } from "react";
import Image from "next/image";
import ApprovedImg from "../../../public/approved.gif";
import Button from "../Button/Button";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { ProcessBlock } from "./TransferPayoutCompleted.styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const TransferPayoutCompleted = ({ setHandelForm }) => {
  const router = usePathname();
  console.log(router);
  return (
    <ProcessBlock>
      <div className="holder">
        <div className="img-box">
          <Image src={ApprovedImg} alt="img description" />
        </div>
        <strong className="title">Transfer request payout completed!</strong>
        <p>
          The payout had reached the applier.
          <br /> Track the payout with the txn info below
        </p>
        <div className="info-text">
          0x0f7ac266c8e003a3ef71ca56222bbff48d5e97c166ad4d5ef54e05288d86fa0a
          hamza
        </div>
        <div className="btn-holder">
          <Link href={`${router}/?data=Paid`} onClick={() => setHandelForm(1)}>
            <Button variant="primary">
              Redirect <MdOutlineArrowCircleRight size="24" /> Transfer Request
            </Button>
          </Link>
        </div>
      </div>
    </ProcessBlock>
  );
};

export default TransferPayoutCompleted;
