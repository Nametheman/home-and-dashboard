import React, { useState } from "react";
import styled from "styled-components";
import alarmSvg from "../../assets/images/alarm.svg";
import userAvi from "../../assets/images/dummyAvi.svg";
import { RxCaretDown } from "react-icons/rx";
import profileBg from "../../assets/images/profileBg.svg";
import copy from "../../assets/icons/copy.svg";
import { toast, Toaster } from "react-hot-toast";

const Home = () => {
  const clientId = JSON.parse(sessionStorage.getItem("clientId2"));
  const email = JSON.parse(sessionStorage.getItem("email"));
  const name = JSON.parse(sessionStorage.getItem("name"));
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // const clientId = JSON.parse(sessionStorage.getItem("clientId"));

  return (
    <Container>
      <div className="head">
        <div className="head_content">
          <img src={alarmSvg} alt="" />
          <div className="userProfileWrapper">
            <img src={userAvi} alt="" />
            <div className="userInfo">
              <p style={{ fontWeight: "bold" }}>{name}</p>
              <p style={{ fontSize: "11px", fontWeight: "bold" }}>User</p>
            </div>
            <RxCaretDown
              className="arrowDown"
              size={17}
              style={{ color: "#fff" }}
            />
          </div>
        </div>
      </div>
      <div className="contentWrapper">
        <p className="recentCustomers">Profile and Security</p>
        <div className="profileNameWrapper">
          <img src={profileBg} alt="" />
          <div className="profileNameHolder">
            <img src={userAvi} alt="" />
            <div className="profileUser">
              <p>{name}</p>
              <p className="position">Account Manager</p>
            </div>
          </div>
        </div>
        <div className="accountsInformation">
          <p className="sectionHead">Accounts Information</p>

          <div className="accountInfoWrapper">
            <div className="inputWrapper">
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name" id="name" value={name} />
            </div>
            <div className="inputWrapper">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" value={email} />
            </div>
            <div className="inputWrapper">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" value={email} />
            </div>
            <div className="inputWrapper">
              <label htmlFor="id">Client ID</label>
              <div className="idInput">
                <input type="text" name="id" id="id" value={clientId} />
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(clientId);
                    toast.success("Copied!");
                  }}
                >
                  <img src={copy} alt="" />
                  <button>Copy ID</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="accountsInformation">
          <p className="sectionHead">Security and Password Info.</p>

          <div className="accountInfoWrapper">
            <div className="inputWrapper">
              <label htmlFor="oldPassword">Old Password</label>
              <input
                type="password"
                name="oldPassword"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
              />
            </div>
            <div className="inputWrapper">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="saveChanges">
            <button>Save Changes</button>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />{" "}
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
        .arrowDown {
          @media only screen and (max-width: 450px) {
            display: none;
          }
        }
      }
    }
  }

  .contentWrapper {
    background-color: #fff;
    padding: 10px 0 80px;
    border-radius: 20px;
    margin-top: 50px;

    .recentCustomers {
      /* margin-top: 20px; */
      font-size: 30px !important;
      padding: 20px !important;
      font-family: "DM Sans", sans-serif;
      color: #3d3d3d;

      @media only screen and (max-width: 450px) {
        font-size: 20px;
      }
    }

    .profileNameWrapper {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      width: 100%;
      position: relative;

      img {
        width: 88%;

        /* @media only screen and (max-width: 450px) {
          width: 30px;
        } */
      }

      .profileNameHolder {
        width: 300px;
        position: absolute;
        bottom: -50px;
        left: 90px;
        display: flex;
        align-items: center;
        gap: 20px;

        @media only screen and (max-width: 450px) {
          bottom: -10px;
          left: 50px;
        }

        img {
          width: 150px;

          @media only screen and (max-width: 450px) {
            width: 30px;
          }
        }

        .profileUser {
          margin-top: -40px !important;
          color: #fff !important;

          p {
            font-size: 30px;
            font-weight: 600;
            color: #fff !important;

            @media only screen and (max-width: 450px) {
              font-size: 15px;
            }
          }
          .position {
            font-size: 12px;

            @media only screen and (max-width: 450px) {
              font-size: 10px;
            }
          }
        }
      }
    }

    .accountsInformation {
      margin-top: 90px !important;
      padding: 0 20px !important;

      .sectionHead {
        font-size: 23px !important;
        font-weight: 500 !important;

        @media only screen and (max-width: 450px) {
          font-size: 15px;
        }
      }

      .accountInfoWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 80px;
        gap: 30px;
        margin-top: 30px;

        @media only screen and (max-width: 450px) {
          grid-template-columns: 1fr;
          padding: 0 20px;
        }

        .inputWrapper {
          display: flex;
          flex-direction: column;

          label {
            font-size: 14px;
            font-weight: 500;
          }

          input {
            margin-top: 12px;
            height: 40px;
            padding: 0 15px;
            background-color: #f1fff780;
            border-radius: 10px;
            font-weight: 500;
            border: 1px solid #28d1ff;

            &:active,
            &:focus {
              outline: none;
            }
          }

          .idInput {
            border: 1px solid #28d1ff;
            height: 40px;
            margin-top: 12px;
            display: flex;
            align-items: center;
            border-radius: 10px;
            overflow: hidden;

            input {
              height: 100%;
              margin-top: 0;
              width: 77%;
              border-radius: 0;
              border: none;

              &:active,
              &:focus {
                outline: none;
              }
            }
            span {
              background-color: #28d1ff;
              width: 23%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              padding: 0 9px;
              cursor: pointer;
              @media only screen and (max-width: 450px) {
                justify-content: center;
              }

              img {
                height: 25px;
                cursor: pointer;
              }
              button {
                background: transparent;
                border: none;
                outline: none;
                font-size: 14px;
                color: #fff;
                cursor: pointer;

                @media only screen and (max-width: 1300px) {
                  display: none;
                }
              }
            }
          }
        }
      }
      .saveChanges {
        display: flex;
        justify-content: center;
        margin-top: 90px;

        button {
          padding: 17px 0;
          width: 450px;
          font-size: 21px;
          background-color: #28d1ff;
          color: #fff;
          border: none;
          outline: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;

          @media only screen and (max-width: 450px) {
            width: 90%;
            font-size: 14px;
          }
        }
      }
    }
  }
`;
