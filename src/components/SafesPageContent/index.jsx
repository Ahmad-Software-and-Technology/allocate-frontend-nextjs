import React from "react";
import { SafesContent, ContentSection } from "./SafesPageContent.styles";
import Link from "next/link";
import Button from "../Button/Button";
import { FaRegCheckCircle } from "react-icons/fa";

function SafesPageContent({ heighLight }) {
  return (
    <SafesContent>
      <ContentSection>
        <div className="header">
          <strong className="subtitle">Safes</strong>
          <h1 className="h2">Developed an NFT minting DApps</h1>
          <div className="date-wrap">
            <span className="date">Created on 30 Jun 2023</span>
            <span className="number-text">0x1f2...55369</span>
          </div>
        </div>
        <div className="holder">
          <div className="text-box">
            <div className="wrap">
              <strong className="title">About this safe</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
            </div>
          </div>
          <div className="info-holder">
            <div className="info-wrap">
              <div className="info-box">
                <strong className="label-text">Applier</strong>
                <span className="text">
                  5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                </span>
              </div>
            </div>
            <div className="info-wrap">
              <div className="info-box">
                <strong className="label-text">Executor</strong>
                <span className="text">
                  5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                </span>
              </div>
            </div>
            <div className="info-wrap">
              <div className="info-box">
                <strong className="label-text">
                  Milestone 1 payout amount
                </strong>
                <span className="text">200 KLAY</span>
              </div>
              <Link href="/">View Transfer Memo</Link>
            </div>
            <div className="info-wrap">
              <div className="info-box">
                <strong className="label-text">
                  Milestone 2 payout amount
                </strong>
                <span className="text">300 KLAY</span>
              </div>
            </div>
          </div>
          <div className="approves-memos">
            <strong className="title">
              Approval Signatures - 2 out of 3 approver(s)
            </strong>
            <div className="memo-holder">
              <div className="flex">
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
              </div>
              <div className="flex">
                <div className="memo-box">
                  <span className="text">
                    5D25X4qhiqpv8Eo3RFiZiq4N5RHLJKAFLXMQH5pejGGsoePo
                  </span>
                  <FaRegCheckCircle className="icon" size="23" />
                </div>
                <span className="date">Signed on 1 July 2023, 11:58:39am</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </SafesContent>
  );
}

export default SafesPageContent;
