import React, { useEffect, useState } from "react";
import { SafesContent, ContentSection } from "./SafesPageContent.styles";
import Link from "next/link";
import Button from "../Button/Button";
import { FaRegCheckCircle } from "react-icons/fa";
import { API } from "@/service/api/api";
import { useRouter } from "next/router";

function SafesPageContent({ heighLight }) {
  const router = useRouter()
  const [safeDetails, setSafeDetails] = useState({})
  const [approvers, setApprovers] = useState([])


  const handleSafe = async (safeId) => {
    const body = { safeId: safeId }
    await API.getUserSafeById(body).then((res) => {
      if (res.status == 200) {
        console.log(res.data.data)
        setSafeDetails(res.data.data)
      }
    })
  }

  const shorten = (address) => {
    if (address?.length > 10) {
      return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    }
    return address;
  };

  const getSafeApprovers = async (safeId) => {
    const body = { safeId: safeId }

    await API.getRolesBySafeId(body).then((res) => {
      if (res.status == 200) {
        setApprovers(res.data.data)
      }
    })
  }


  useEffect(() => {
    const { safeId } = router.query;
    handleSafe(safeId)
    getSafeApprovers(safeId)
  }, [])

  return (
    <SafesContent>
      <ContentSection>
        <div className="header">
          <strong className="subtitle">Safes</strong>
          <h1 className="h2">{safeDetails.name}</h1>
          <div className="date-wrap">
            <span className="date">{safeDetails.createdDate}</span>
            <span className="number-text">{shorten(safeDetails.recipientWalletAddress)}</span>
          </div>
        </div>
        <div className="holder">
          <div className="text-box">
            <div className="wrap">
              <strong className="title">About this safe</strong>
              <p>
                {safeDetails.desc}
              </p>
            </div>
          </div>
          <div className="info-holder">
            {/* <div className="info-wrap">
              <div className="info-box">
                <strong className="label-text">Applier</strong>
                <span className="text">
                  5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                </span>
              </div>
            </div> */}
            {/* <div className="info-wrap">
              <div className="info-box">
                <strong className="label-text">Executor</strong>
                <span className="text">
                  5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                </span>
              </div>
            </div> */}
            <div className="info-wrap">
              <div className="info-box">
                <strong className="label-text">
                  Lum Sum payout amount
                </strong>
                <span className="text">{safeDetails?.lumSumReleaseAmount}{" "}{safeDetails?.asset?.toUpperCase()}</span>
              </div>
              <Link href="/">View Transfer Memo</Link>
            </div>
            {/* <div className="info-wrap">
              <div className="info-box">
                <strong className="label-text">
                  Milestone 2 payout amount
                </strong>
                <span className="text">300 KLAY</span>
              </div>
            </div> */}
          </div>
          <div className="memo-holder">
            {approvers?.map((data) => {
              return (
                <div className="flex">
                  <div className="memo-box">
                    <span className="text">
                      {data.approverAddress}
                    </span>
                    <FaRegCheckCircle style={{ color: data.status == "Pending" ? "" : "green" }} className="icon" size="23" />
                  </div>

                  <div className="flex-column">
                    {

                      data.status === "Pending" ? (
                        < >
                          Pending
                        </>
                      ) : (
                        data.status === "Completed" && (
                          <span className="date">Signed on {data?.signedTime}</span>
                        )

                      )
                    }

                  </div>
                </div>
              )
            })}
            {/* <div className="flex">
                                <div className="memo-box">
                                    <span className="text">
                                        5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                                    </span>
                                    <FaRegCheckCircle className="icon" size="23" />
                                </div>
                                <span className="date">Signed on 1 July 2023, 11:58:39am</span>
                            </div>
                            <div className="flex">
                                <div className="memo-box">
                                    <span className="text">
                                        5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                                    </span>
                                    <FaRegCheckCircle className="icon" size="23" />
                                </div>
                                <span className="date">Signed on 1 July 2023, 11:58:39am</span>
                            </div> */}
          </div>
        </div>
      </ContentSection>
    </SafesContent>
  );
}

export default SafesPageContent;
