import React, { useState } from "react";
import Container from "./styles";
import { Switch, Table } from "antd";
import {
  AccountSummaryCard,
  TransactionDetailsCard,
} from "../../../components/Dashboard/Wallet";
import {
  accountSelector,
  toggleShowBalance,
} from "../../../redux/reducers/wallet/account";
import { useDispatch, useSelector } from "react-redux";
import {
  columns,
  transactionbillng,
} from "../../../components/Dashboard/Wallet/table";
import { FundWalletModal, VerifyFundWalletModal } from "./Modal";
// import { transactions as deposits } from '../../../components/Dashboard/Wallet/TransactionDetailsCard';
import { Link, useLocation } from "react-router-dom";
import { getTransactionSelector } from "../../../redux/reducers/wallet/transactions";
import { getWalletTransactions } from "../../../redux/actions/wallet/transactions";
import { verifyFundWallet } from "../../../redux/actions/wallet/fundwallet";
import { getDebitTransactionSelector } from "../../../redux/reducers/services/getDebits";
import { getDebits } from "../../../redux/actions/services/getDebits";

const Home = () => {
  const dispatch = useDispatch();
  const { debitTrack } = useSelector((state) => state.debitTrack);

  const { name } = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    setTrnx(debitTrack);
  }, [debitTrack]);

  const [trnx, setTrnx] = useState(debitTrack);
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });
  const [show, setShow] = useState(false);

  React.useEffect(() => {
    dispatch(getDebits(dates));
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(getDebits(dates));
  }, [dates]);

  const {
    transactions: deposits,
    loading,
    transactions,
  } = useSelector(getTransactionSelector);

  // const { transactions: deposit,transactions } = useSelector(
  //   getTransactionSelector
  //   );

  // const {name} = JSON.parse(localStorage.getItem("user"))

  // const {debitTrack} = useSelector(getDebitTransactionSelector)
  // console.log("🚀 ~ file: Home.jsx:36 ~ Home ~ debitTrack:", debitTrack)

  // const [trnx,setTrnx] = React.useState(debitTrack)

  React.useEffect(() => {
    setTrnx(debitTrack);
  }, [debitTrack]);

  const transactionId = new URLSearchParams(useLocation().search).get(
    "reference"
  );
  React.useEffect(() => {
    const data = {
      transactionId,
    };
    if (transactionId) {
      dispatch(verifyFundWallet(data));
    }
  }, [transactionId, dispatch]);

  React.useEffect(() => {
    dispatch(getWalletTransactions());
  }, [dispatch]);

  // React.useEffect(() => {
  //   dispatch(getWalletTransactions());
  // }, [dispatch]);

  // const {debitTrack:tranx} = useSelector(getDebitTransactionSelector)

  // const { transactions: deposits,loading } = useSelector(
  //   getTransactionSelector
  // );

  // console.log(transactions)
  // console.log(deposits)
  const { showBalance } = useSelector(accountSelector);
  return (
    <Container>
      <FundWalletModal />
      <VerifyFundWalletModal />
      <h1>Dashboard</h1>
      <p> </p>
      {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
      <div className="card_group">
        <div className="wallet__group">
          <div className="header">
            <h3>UBalance</h3>
            <div className="balance__group">
              {showBalance ? <p>Hide Balance</p> : <p>Show Balance</p>}
              <Switch
                style={{ background: "#28d1ff" }}
                onChange={() => dispatch(toggleShowBalance())}
              />
            </div>
          </div>
          <AccountSummaryCard />
        </div>
        <div className="table">
          <div className="header">
            <h3>Deposit History</h3>
            <Link to="/dashboard/transactions">View All</Link>
          </div>
          {loading && <h1 className="loading">Loading...</h1>}
          {!loading && deposits.length < 1 ? (
            <div className="loading">No Deposit History</div>
          ) : (
            deposits.slice(0, 3).map((item) => {
              return <TransactionDetailsCard {...item} />;
            })
          )}
        </div>
        <div />
      </div>
      <br />
      <div className="header">
        <h3>Recent Transactions</h3>
        <Link to="/dashboard/services">View All</Link>
      </div>
      {/* <Table columns={columns} dataSource={trnx && trnx} scroll={{ x: 768 }} /> */}
      {/* <Table columns={columns} dataSource={transactions} scroll={{ x: 768 }} /> */}

      <Table
        columns={transactionbillng}
        dataSource={trnx && [...trnx?.slice(0, 10)]}
        // pagination={false}
        // scroll={{ x: 768 }}
      />
    </Container>
  );
};

export default Home;
