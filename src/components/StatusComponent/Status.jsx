import React, { useState } from "react";
import { Item, StatusModal } from "./status.styles";
import { RxCross2 } from "react-icons/rx";
import Button from "../Button/Button";
const NftCard = [
  "Approved",
  "Rejected",
  "Processing",
  "On Hold",
  "Required Change",
  "Paid",
];
const Status = ({ handelChange, setModal }) => {
  const [slectedCard, setSlectedCard] = useState(null);
  function handelClick(e) {
    setSlectedCard(e);
  }
  function handelSubmit(e, elem) {
    e.preventDefault();
    handelChange(slectedCard);
    setModal(false);
  }
  return (
    <StatusModal>
      <div className="detectedNftHEading">
        Change Status
        <span className="icon" onClick={() => setModal(false)}>
          <RxCross2 size="22" />
        </span>
      </div>
      <form className="itemWrapper" onSubmit={handelSubmit}>
        {NftCard.map((elem, ind) => (
          <Item
            color={slectedCard === elem ? true : false}
            key={ind}
            onClick={(e) => handelClick(elem, ind)}
          >
            {elem}
          </Item>
        ))}
        <Button variant="primary" width="100%">
          Confirm
        </Button>
      </form>
    </StatusModal>
  );
};

export default Status;
