import React from "react";
import styled from "styled-components";
import alarmSvg from "../../assets/images/alarm.svg";
import userAvi from "../../assets/images/dummyAvi.svg";
import { RxCaretDown } from "react-icons/rx";
import addService from "../../assets/images/add_service.svg";
import rateServices from "../../assets/images/rate_services.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const name = JSON.parse(sessionStorage?.getItem("name"));

  return (
    <Container>
      <div className="head">
        <div className="head_content">
          <img src={alarmSvg} alt="" />
          <div
            className="userProfileWrapper"
            onClick={() => {
              navigate("/dashboard/profile-settings");
            }}
          >
            <img src={userAvi} alt="" />
            <div className="userInfo">
              <p style={{ fontWeight: "bold" }}>{name}</p>
              <p style={{ fontSize: "11px", fontWeight: "bold" }}>User</p>
            </div>
            <RxCaretDown size={17} style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
      <div className="contentWrapper">
        <div className="firstContentHead">
          <p className="pageName">Services</p>
        </div>
        <div className="header">
          <p>This is a list of all your active services</p>
          <a href="https://saas.tm30.net/marketplace" target="_blank">
            <img src={addService} alt="" />
          </a>
        </div>
        <div className="services">
          <ul>
            <li>Notification Services.</li>
            <hr />
            <li>Wallet Services.</li>
            <hr />
            <li>Payment-Services.</li>
            <hr />
            <li>Event Services.</li>
            <hr />
            <li>File Services.</li>
            <hr />
            <li>Third Party Services.</li>
            <hr />
          </ul>
        </div>

        <div className="rateService">
          <img src={rateServices} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 30px;
  position: absolute;
  top: 0;
  width: calc(100% - 16%);
  max-width: calc(100% - 16%);

  @media only screen and (max-width: 1147px) {
    width: calc(100%);
    margin-left: 0;
    max-width: calc(100%);
  }
  @media only screen and (max-width: 450px) {
    padding: 0;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .head_content {
      display: flex;
      width: 300px;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;

      @media only screen and (max-width: 450px) {
        width: 150px;
      }

      img {
        @media only screen and (max-width: 450px) {
          width: 20px;
        }
      }

      .userProfileWrapper {
        width: 200px;
        border-left: 1px solid #eeebeb;
        padding-left: 40px;
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;

        @media only screen and (max-width: 450px) {
          width: 100px;
          padding-left: 0;
          margin-top: 20px;
          border-left: 0 solid #eeebeb;
          /* flex-direction: column; */
        }

        .userInfo {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #fff !important;

          p {
            color: #fff !important;

            @media only screen and (max-width: 450px) {
              font-size: 11px;
            }
          }
          /* align-items: center; */
        }

        img {
          @media only screen and (max-width: 450px) {
            width: 40px;
          }
        }

        svg {
          @media only screen and (max-width: 450px) {
            display: none;
          }
        }
      }
    }
  }

  .contentWrapper {
    background-color: #fff;
    padding: 20px 0 80px;
    border-radius: 20px;
    margin-top: 50px;

    .firstContentHead {
      display: flex;
      align-items: center;
      padding: 20px;
      justify-content: space-between;
      .pageName {
        font-size: 30px;
        @media only screen and (max-width: 450px) {
          font-size: 18px;
        }
      }
      .filterWrapper {
        display: flex;
        align-items: center;
        gap: 15px;

        select {
          border: 1px solid #00000047;
          border-radius: 5px;
          padding: 5px;
        }
      }
    }

    .header {
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media only screen and (max-width: 450px) {
        padding: 0 20px;
      }

      img {
        width: 200px;
        @media only screen and (max-width: 450px) {
          width: 140px;
        }
      }
      p {
        margin-left: 30px;
        font-weight: 500;
        font-size: 17px;
        @media only screen and (max-width: 450px) {
          margin-left: 0;
          font-size: 12px;
        }
      }
    }

    .services {
      margin: 30px 0;
      /* padding: 0 55px; */
      ul {
        li {
          padding: 50px 0 5px;
          margin: 0 55px;
          font-size: 18px;

          @media only screen and (max-width: 450px) {
            font-size: 12px;
          }
        }
      }
    }

    .rateService {
      display: flex;
      justify-content: center;
      padding: 40px 0;

      img {
        width: 380px;
        /* height: 30px; */
        cursor: pointer;
        @media only screen and (max-width: 450px) {
          width: 240px;
        }
      }
    }
  }
`;
