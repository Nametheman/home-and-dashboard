import React from "react";
import { FaCheckCircle, FaWallet, FaHistory } from "react-icons/fa";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { accountSelector } from "../../../redux/reducers/wallet/account";
import { toggleShowModal } from "../../../redux/reducers/wallet/fundwallet";
import { getWalletBalance } from "../../../redux/actions/wallet/walletBalance";
import { walletBalanceSelector } from "../../../redux/reducers/wallet/walletBalance";

const Index = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { success, walletBalance } = useSelector(walletBalanceSelector);
  const { showBalance } = useSelector(accountSelector);

  React.useEffect(() => {
    dispatch(getWalletBalance());
  }, [dispatch]);

  return (
    <Container>
      <div className="first__row">
        <div className="total__balance">
          {showBalance
            ? `#${success ? walletBalance.toLocaleString() : 0.0}`
            : "XXXXXX"}
        </div>
        <div className="btn__group">
          <div
            onClick={() => dispatch(toggleShowModal())}
            className="btn_tab orange"
          >
            <FaWallet />
            Add Funds
          </div>
          {/* <div
            onClick={() => Navigate('/dashboard/transactions')}
            className='btn_tab success'
          >
            <FaHistory />
            Transactions
          </div> */}
        </div>
        <FaCheckCircle className="icon" />
      </div>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  padding: 2rem 1rem;
  border-radius: 10px;
  background: #3e464e;

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 180px;
  }

  .first__row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 24px;
      height: 24px;
      color: #28d1ff;
      background: transparent;
    }

    .total__balance {
      font-size: 2.5rem;
      letter-spacing: 0.2rem;
      font-weight: bold;
      color: #fff;

      span {
        font-size: 2rem;
        color: grey;

        @media screen and (max-width: 425px) {
          font-size: 1.7rem;
        }
      }

      @media screen and (max-width: 425px) {
        font-size: 1.7rem;
      }
    }

    .btn__group {
      display: flex;
      width: 100%;
      margin-top: 1rem;
      gap: 1rem;

      justify-content: center;
    }
    .orange {
      background: #e24307;
    }

    .success {
      background: #28d1ff;
    }

    .btn_tab {
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3em;
      color: #fff;
      padding: 0.5rem 0;
      font-weight: bold;
      cursor: pointer;
      border-radius: 5px;

      @media screen and (max-width: 425px) {
        font-size: 0.7rem;
      }

      .icon {
        width: 1rem;
        height: 1rem;
      }

      :hover {
        opacity: 0.7;
      }
    }
  }

  // .default_currency {
  //   position: absolute;
  //   left: 1em;
  //   top: 1em;
  //   width:80px;

  //   h3 {
  //     font-size: 1rem;
  //     color: #5a75ff;
  //     margin-bottom: 10px;
  //   }

  //   h4 {
  //     font-size: 0.7rem;
  //     color: #fff;
  //   }
  // }
`;
