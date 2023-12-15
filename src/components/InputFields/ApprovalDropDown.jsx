import React, { useEffect, useState } from "react";
import {
  DropDownAssetsItem,
  DropDownItem,
  DropDownListWrapper,
  ProgramDrop,
} from "./Input.styles";
import { useSelector } from "react-redux";
import { API } from "@/service/api/api";

const ApprovalDropDown = ({ onChange, selectedValue, setSelectedValue, setEmissaryRole }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const emissary = useSelector((state) => state.emissary.emissary);
  const [body, setBody] = useState({});
  const [emissaryRoles, setEmissaryRoles] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  function handelChange(e, selectedValue) {
    e.stopPropagation();
    console.log(selectedValue.userAddress)
    setSelectedValue(selectedValue);
    setOpenDropDown(false);
  }


  const handleControllers = async () => {
    body.emissaryId = emissary._id
    await API.getEmissaryController(body).then((res) => {
      if (res.status == 200) {
        setEmissaryRoles(res.data.data)
        setEmissaryRole(res.data.data.length)
      }
    })
  }


  useEffect(() => {
    handleControllers()
  }, [])

  const handleChange = (e, newValue) => {
    e.stopPropagation();
    const newValues = selectedValues.includes(newValue)
      ? selectedValues.filter(value => value !== newValue)
      : [...selectedValues, newValue];

    setSelectedValues(newValues);
    setOpenDropDown(false);
  };

  useEffect(() => {
    onChange(selectedValues);
  }, [onChange, selectedValues]);



  return (
    <ProgramDrop>
      <DropDownListWrapper onClick={() => setOpenDropDown(!openDropDown)}>
        {selectedValue?.userAddress ? (
          <>{selectedValue.userAddress}</>
        ) : (
          "Select Approval Signature"
        )}{" "}
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
          {emissaryRoles?.map((elem, ind) => (
            <li key={ind} onClick={(e) => handelChange(e, elem)}>
              {elem.userAddress}{" "}
            </li>
          ))}
        </DropDownAssetsItem>
      </DropDownListWrapper>
    </ProgramDrop>
  );
};

export default ApprovalDropDown;




