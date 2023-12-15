import React from "react";
import { AddRequestUserStyles } from "./AddRequestUser.styles";
import face from "../../../../public/face.png";
import Image from "next/image";
const AddRequestUser = ({ setAddReq }) => {
  return (
    <AddRequestUserStyles>
      <div className="imageWrapper">
        <Image src={face} alt="face" />
      </div>
      There are no transfer requests from your side. Create one!{" "}
      <div className="addTransfer" onClick={() => setAddReq(false)}>
        + Transfer Request
      </div>
    </AddRequestUserStyles>
  );
};

export default AddRequestUser;
