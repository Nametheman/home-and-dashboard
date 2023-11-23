import React from "react";
import styled from "styled-components";
import totaltxnImg from "../assets/images/totaltxn.svg";
import totaltxnvalImg from "../assets/images/totaltxnval.svg";
import totalcommImg from "../assets/images/totcomm.svg";
import arrIncrease from "../assets/icons/arrIncrease.svg";

const TotalTxnCount = ({ txnCount }) => {
  return (
    <Container>
      <div className="u_head">
        <p>Total Transaction Count</p>
        <img src={totaltxnImg} alt="" />
      </div>
      <p className="u_balance">{txnCount ? txnCount : 0}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginTop: "19px",
        }}
      >
        <img src={arrIncrease} alt="" />
        <p className="change_rate">
          <span style={{ color: "#008000" }}>1.3%</span> up from last week
        </p>
      </div>
    </Container>
  );
};

export default TotalTxnCount;
const Container = styled.div`
  .u_head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 13px;
      font-weight: bold;
      color: #04aedb;
    }
    img {
      width: 50px;
    }
  }
  .u_balance {
    font-size: 30px;
    font-weight: bold;
    color: #04aedb;

    /* margin-top: 10px; */
    /* letter-spacing: 0.2pt; */
  }

  .change_rate {
    margin-top: 20px;
    font-size: 10px;
    span {
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`;
