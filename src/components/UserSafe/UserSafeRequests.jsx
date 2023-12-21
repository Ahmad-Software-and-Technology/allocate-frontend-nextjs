import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Button from "@/components/Button/Button";
import {
  FilterBar,
  TransferList,
  TransferListWrapper,
  TransferUserListStyle,
} from "./UserSafeRequests.styles";
import Link from "next/link";
import { API } from "@/service/api/api";
import { useSelector } from "react-redux";





const UserSafeRequests = () => {
  const emissary = useSelector((state) => state.emissary.emissary);
  const [safes, setSafes] = useState([])

  const handleSafes = async () => {
    console.log(emissary)
    const body = { emissaryId: emissary._id }
    await API.getSafeByEmissaryId(body).then((res) => {
      if (res.status == 200) {
        setSafes(res.data.data)
      }
    })
  }

  const shorten = (address) => {
    if (address?.length > 10) {
      return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    }
    return address;
  };

  useEffect(() => {
    handleSafes()
  }, [])
  return (
    <TransferUserListStyle>
      <FilterBar>
        <div className="inputWrapper">
          <span className="icon">
            <IoSearch size="22" />
          </span>
          <input
            type="text"
            placeholder="Search request number, program, project name"
            label=""
          />
        </div>
        <Button variant="primary">Filter</Button>
      </FilterBar>
      <TransferListWrapper>
        {safes?.map((data) => {
          return (
            <TransferList>
              <div className="wrapper">
                <div className="item">
                  <span className="id">{data.safeId}</span>
                  <Link href={`/user/safes/${data.safeId}`}>
                    <span className="link">Details</span>
                  </Link>
                </div>
                <div className="item">
                  <span className="projectName">{data.name} </span>
                  <span className="program">{data.desc}</span>
                </div>
              </div>
              <div className="wrapper">
                <div className="item">
                  <span className="userID">{shorten(data.recipientWalletAddress)}</span>
                  <span className="date">{data.createdDate}</span>
                </div>
                <div className="item">
                  <span className="amount">{data.amount} {" "} {data.asset}</span>
                </div>
              </div>
            </TransferList>
          )
        })}
      </TransferListWrapper>
    </TransferUserListStyle>
  );
};

export default UserSafeRequests;
