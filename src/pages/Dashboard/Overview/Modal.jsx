import React from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { Button, InputField } from "../../../reusables";
import { FaInfoCircle } from "react-icons/fa";
import {
  clearVerifyState,
  fundWalletSelector,
  toggleShowModal,
  toggleShowVerifyModal,
} from "../../../redux/reducers/wallet/fundwallet";
import { useSelector, useDispatch } from "react-redux";
import { initiateFundWallet } from "../../../redux/actions/wallet/fundwallet";
import { useNavigate } from "react-router-dom";

export const FundWalletModal = () => {
  const dispatch = useDispatch();
  const { showModal, loading, success, error, errors, redirectUrl } =
    useSelector(fundWalletSelector);

  const [submitted, setSubmitted] = React.useState(false);

  const [body, setBody] = React.useState({
    provider: "paystack",
    redirectUrl: "http://localhost:3000/wallet",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (body.amount >= 100) {
      dispatch(initiateFundWallet(body));
    }
  };

  React.useEffect(() => {
    if (success) {
      //   console.log(redirectUrl);
      window.location.href = redirectUrl;
    }
  });

  return (
    <ModalContainer
      visible={showModal}
      footer={false}
      centered={true}
      onCancel={() => dispatch(toggleShowModal())}
    >
      <form onSubmit={handleSubmit}>
        <h2>Enter Amount</h2>
        <br />
        <InputField
          onTextChange={(e) =>
            setBody((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }))
          }
          inputType="number"
          placeholder="Enter amount"
        />
        {submitted && body.amount < 100 && (
          <p className="error-msg">Invalid amount!</p>
        )}
        {error && errors && <p className="error-msg">{errors}</p>}
        <br />
        <Button loading={loading} text="Continue" primary />
      </form>
    </ModalContainer>
  );
};

export const VerifyFundWalletModal = () => {
  const dispatch = useDispatch();
  const {
    showVerifyModal,
    verifyLoading,
    verifySuccess,
    verifyError,
    verifyErrors,
  } = useSelector(fundWalletSelector);
  const Navigate = useNavigate();
  return (
    <ModalContainer2
      visible={showVerifyModal}
      footer={false}
      centered={true}
      closable={false}
    >
      <div className="container">
        <FaInfoCircle className="icon" />
        {/* <form onSubmit={handleSubmit}> */}
        {verifyLoading && <h1>Finalizing Transaction</h1>}
        {verifyLoading && (
          <div class="spinner">
            <div class="bounce1 blue"></div>
            <div class="bounce2 blue"></div>
            <div class="bounce3 blue"></div>
          </div>
        )}
        {verifySuccess && <h1>Fund Wallet Successful!</h1>}
        {verifyError && <h1>{verifyErrors || "Something went wrong!"}</h1>}
        {!verifyLoading && (
          <Button
            full
            loading={verifyLoading}
            text="Close"
            primary
            onClick={() => {
              dispatch(clearVerifyState());
              dispatch(toggleShowVerifyModal());
              Navigate("/wallet");
            }}
          />
        )}
      </div>
      {/* </form> */}
    </ModalContainer2>
  );
};

const ModalContainer = styled(Modal)`
  height: 300px !important;
  width: 400px !important;
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    width: 70% !important;
  }

  @media screen and (max-width: 450px) {
    width: 90% !important;
  }
`;

const ModalContainer2 = styled(Modal)`
  height: 300px !important;
  width: 300px !important;
  border-radius: 20px;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .icon {
    font-size: 2.5rem;
    text-align: center;
    color: #28d1ff;
  }
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  // @media screen and (max-width: 1024px) {
  //   width: 70% !important;
  // }

  // @media screen and (max-width: 450px) {
  //   width: 90% !important;
  // }
`;
