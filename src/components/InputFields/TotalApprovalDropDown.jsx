import React, { useEffect, useState } from "react";
import {
  DropDownAssetsItem,
  DropDownItem,
  DropDownListWrapper,
  ProgramDrop,
} from "./Input.styles";

const TotalApprovalDropDown = ({
  onChange,
  selectedValue,
  setSelectedValue,
  className,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  // const [selectedValue, setSelectedValue] = useState(
  //   "  Select name of the program"
  // );
  const ProgramArray = [
    {
      id: 1,
      approval: 1,
    },
    {
      id: 2,
      approval: 2,
    },
    {
      id: 3,
      approval: 3,
    },
    {
      id: 4,
      approval: 4,
    },
  ];
  function handelChange(e, selectedValue) {
    e.stopPropagation();
    setSelectedValue(selectedValue);
    setOpenDropDown(false);
  }
  useEffect(() => {
    onChange(selectedValue);
  }, [onChange, selectedValue]);

  return (
    <ProgramDrop className={className}>
      <DropDownListWrapper onClick={() => setOpenDropDown(!openDropDown)}>
        {selectedValue?.approval ? <>{selectedValue.approval}</> : "1"}{" "}
        <span
          className="dropDownIcon"
          onClick={() => setOpenDropDown(!openDropDown)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
          >
            <path d="M7 10L13.9282 0.25H0.0717969L7 10Z" fill="#E1E1E1" />
          </svg>
        </span>
        <DropDownAssetsItem display={openDropDown ? "block" : "none"}>
          {ProgramArray.map((elem, ind) => (
            <li key={ind} onClick={(e) => handelChange(e, elem)}>
              {elem.approval}{" "}
            </li>
          ))}
        </DropDownAssetsItem>
      </DropDownListWrapper>
    </ProgramDrop>
  );
};

export default TotalApprovalDropDown;
