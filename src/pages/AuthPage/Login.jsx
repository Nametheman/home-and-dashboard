import React, { useState } from "react";
import styled from "styled-components";
import loginImg from "../../assets/images/login.svg";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "../../layout/HomeLayout/Navbar";
import Footer from "../../layout/HomeLayout/Footer2";

const Login = () => {
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);
  const [passwordInputTouched, setPasswordInputTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formIsValid1, setFormIsValid1] = useState(false);
  const [formIsValid2, setFormIsValid2] = useState(false);
  const [showForgotPass, setShowForgotPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const errors = {};

  const handleEmail = (e) => {
    setEnteredEmail(e.target.value);

    if (e.target.value.length >= 4) {
      setFormIsValid1(true);
    } else {
      errors.email = "Enter a correct email";
      setFormIsValid1(false);
    }
    console.log(enteredEmail, formIsValid1);
  };
  const handlePassword = (e) => {
    setEnteredPassword(e.target.value);

    if (e.target.value.length >= 7) {
      setFormIsValid2(true);
    } else {
      errors.password = "Field is required";
      setFormIsValid2(false);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEnteredEmail("");
    setEnteredPassword("");
    setErrorMessage(errors);
    setFormIsValid1(false);
    setFormIsValid2(false);
    AuthUser();
  };

  const AuthUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}auths/login`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (
        response.status === 200 &&
        data?.message === "Success" &&
        data?.data?.token
      ) {
        sessionStorage.setItem("token", JSON.stringify(data?.data?.token));
        sessionStorage.setItem(
          "clientId",
          JSON.stringify(data?.data?.client?.userId)
        );
        sessionStorage.setItem(
          "email",
          JSON.stringify(data?.data?.client?.email)
        );
        sessionStorage.setItem(
          "name",
          JSON.stringify(data?.data?.client?.name)
        );
        navigate("/dashboard");
      } else {
        setErrorMessage(data?.error);

        toast.error(data?.error);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const LoginBtn = styled.button`
    width: 100%;
    margin-top: 40px;
    padding: 15px 0;
    font-size: 17px;
    border: none;
    outline: none;
    color: #fff;
    background-color: #28d1ff;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;

    &:disabled {
      background-color: #323232;
      color: #c6c3c3;
      cursor: not-allowed;
    }
  `;

  return (
    <>
      <Navbar />
      <Container>
        <div className="left-pane">
          <img src={loginImg} alt="" />
        </div>
        <div className="right-pane">
          <div className="head">
            <h3>Login Account</h3>
          </div>
          <div className="loginFormWrapper">
            <p>Login to manage your account.</p>
            <form action="" onSubmit={handleFormSubmit}>
              <div className="usernameWrapper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={enteredEmail}
                  onChange={handleEmail}
                  onBlur={handleEmail}
                  onFocus={() => {
                    setEmailInputTouched(true);
                  }}
                />
                {/* <p className="errorMsg">{errorMessage.email}</p> */}
              </div>
              <div className="passwordWrapper">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={enteredPassword}
                  onChange={handlePassword}
                  onBlur={handlePassword}
                  onFocus={() => {
                    setPasswordInputTouched(true);
                  }}
                />
                {showPass ? (
                  <AiOutlineEye
                    size={19}
                    style={{ cursor: "pointer", color: "#00c8ff" }}
                    onClick={() => {
                      setShowPass(false);
                    }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    size={19}
                    style={{ cursor: "pointer", color: "#00c8ff" }}
                    onClick={() => {
                      setShowPass(true);
                    }}
                  />
                )}
              </div>

              <div className="userInteractions">
                <p style={{ color: "#909090" }}>
                  Don't have an account ?,{" "}
                  <Link
                    to="/register"
                    style={{
                      color: "#28d1ff",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    Sign Up
                  </Link>
                </p>
                <p
                  style={{ cursor: "pointer", color: "#28d1ff" }}
                  onClick={() => {
                    setShowForgotPass(true);
                  }}
                >
                  Forgot Password ?
                </p>
              </div>

              <LoginBtn
                disabled={formIsValid1 && formIsValid2 ? false : true}
              >{`${loading ? "Please wait..." : "Sign In"}`}</LoginBtn>
            </form>
          </div>
        </div>
        {showForgotPass && (
          <ForgotPassword setShowForgotPass={setShowForgotPass} />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100vh;
  /* max-height: 1024px; */
  overflow-y: hidden;

  .left-pane {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #28d0ff0;
    opacity: 0.7;
    @media only screen and (max-width: 450px) {
      display: none;
    }

    img {
      width: 60%;
    }
  }
  .right-pane {
    flex: 0.8;
    background-color: #fff;
    @media only screen and (max-width: 450px) {
      padding: 10px;
    }

    .head {
      text-align: center;
      margin-top: 180px;
      @media only screen and (max-width: 450px) {
        margin-top: 80px;
        text-align: left;
      }

      h3 {
        font-size: 30px;
        color: #28d1ff;
        @media only screen and (max-width: 450px) {
          font-size: 20px;
        }
      }
    }
    .loginFormWrapper {
      padding: 0 120px;
      margin-top: 40px;

      @media only screen and (max-width: 500px) {
        padding: 0px 30px;
      }

      p {
        color: #3d3d3d;
        font-size: 16px;
        font-weight: 500;
      }

      form {
        margin-top: 40px;
        @media only screen and (max-width: 450px) {
          margin-top: 20px;
        }
        .usernameWrapper {
          /* width: 100%; */
          padding: 14px 10px;
          border: 1px solid #28d1ff;
          font-size: 16px;
          outline: none;
          border-left: 7px solid #28d1ff;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          input {
            width: 100%;
            border: none;
            outline: none;
            &::placeholder {
              color: #909090;
              font-size: 14px;
            }
          }
          input:-webkit-autofill {
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
          }
          .errorMsg {
            color: red;
            margin-left: 5px;
            font-size: 12px;
            margin-top: 4px;
          }
        }
        .passwordWrapper {
          margin-top: 30px;
          padding: 14px 20px;
          border: 1px solid #28d1ff;
          font-size: 16px;
          outline: none;
          border-left: 7px solid #28d1ff;
          border-top-left-radius: 5px;
          display: flex;
          border-bottom-left-radius: 5px;
          input {
            width: 100%;
            border: none;
            outline: none;

            &::placeholder {
              color: #909090;
              font-size: 14px;
            }
          }

          .errorMsg {
            color: red;
            margin-left: 5px;
            font-size: 12px;
            margin-top: 4px;
          }
        }

        .userInteractions {
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media only screen and (max-width: 1200px) {
            flex-wrap: wrap;
            p {
              font-size: 12px;
            }
          }

          p {
            @media only screen and (max-width: 450px) {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    display: block;
    background-image: linear-gradient(0deg, #ffffff14 100%), url(${loginImg});
    /* backdrop-filter: blur(125px); */
    color: #d0ebff;
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: cover; */
    .left-pane {
      display: none;
    }
    .right-pane {
      .loginFormWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        form {
          width: 400px;
        }
      }
    }
  }
`;
