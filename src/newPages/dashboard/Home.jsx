import React, { useState, useEffect } from "react";
import styled from "styled-components";
import alarmSvg from "../../assets/images/alarm.svg";
import userAvi from "../../assets/images/dummyAvi.svg";
import { RxCaretDown } from "react-icons/rx";
import Ubalance from "../../components/Ubalance";
import TotalTxnCount from "../../components/TotalTxnCount";
import Totaltxnvalue from "../../components/TotalTxnValue";
import Totalcommission from "../../components/Totalcomm";
import ReusableTable from "../../reusables/ReusableTable";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [mydata, setMyData] = useState();
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerOage] = useState(5);
  const [recentTxnData, setRecentTxnData] = useState();
  const [init, setInit] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [endNumber, setEndNumber] = useState(indexOfLastPost);
  const [startCount, setStartCount] = useState(currentPage);
  const [endCount, setEndCount] = useState(currentPage * 10);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(5);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(false);
  const [txnCount, setTxnCount] = useState();
  const [txnValue, setTxnValue] = useState();
  const [txnComm, setTxnComm] = useState();
  const [rangeFilter, setRangeFilter] = useState("today");
  let num = 1;

  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("token"));
  const clientId = JSON.parse(sessionStorage.getItem("clientId"));
  useEffect(() => {
    getDashboard();
  }, [token]);
  useEffect(() => {
    getRecentTransactions();
  }, [clientId, currentPage]);
  useEffect(() => {
    getMetrics();
  }, [clientId, rangeFilter]);

  //Table column goes in here. This is to be passed as props/////////////////////////////
  const columns = [
    { field: "no", header: "S/N" },
    { field: "txnID", header: "TRANSACTION ID" },
    { field: "serviceName", header: "SERVICE NAME" },
    { field: "billerName", header: "BILLER NAME" },
    { field: "amount", header: "AMOUNT" },
    { field: "netVal", header: "NET VALUE" },
    { field: "commission", header: "COMMISSION" },
    { field: "date", header: "DATE" },
    { field: "status", header: "STATUS" },
  ];
  //APIs section starts here ////////////////////////////////////////////////////////////  const getDashboard = async () => {
  //APIs section starts here ////////////////////////////////////////////////////////////
  const getDashboard = async () => {
    try {
      setDashboardLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}client/${clientId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      sessionStorage.setItem(
        "clientId2",
        JSON.stringify(data?.data?.client?.clientId)
      );
      setMyData(data);

      setDashboardLoading(false);
    } catch (error) {
      console.log(error);
      setDashboardLoading(false);
    }
  };

  const getRecentTransactions = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}transactions/billing/?page=${currentPage}&startDate=2022-09-13&endDate=2023-12-01&limit=${postsPerPage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setRecentTxnData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const getMetrics = async () => {
    try {
      setDashboardLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/transactions/metrics/?range=${rangeFilter}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setDashboardLoading(false);
      // setRecentTxnData(data);
      setTxnCount(data?.data?.totalTransactionCount);
      setTxnValue(data?.data?.totalValue);
      setTxnComm(data?.data?.totalCommission);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  //APIs section ends here ////////////////////////////////////////////////////////////

  let myData = recentTxnData?.data;
  const dataLength = recentTxnData?.total;

  const endPage = Math.ceil(dataLength / postsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dataLength / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const myPageNumbers = pageNumbers.slice(startPoint, endPoint);

  const prevPageHandler = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
    if (currentPage <= startPoint + 1) {
      setStartPoint(startPoint - 5);
      setEndPoint(endPoint - 5);
    }
    setStartCount(startCount - 10);
    setEndCount(endCount - 10);
    setInit(init - 10);
  };
  const nextPageHandler = () => {
    if (currentPage >= endPage) {
      setIsLastPage(true);
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
    if (currentPage >= endPoint) {
      setStartPoint(startPoint + 5);
      setEndPoint(endPoint + 5);
    }

    setStartCount(startCount + 10);
    setEndCount(endCount + myData?.length);
    setInit(init + 10);
    num = num + 1;
  };

  useEffect(() => {
    if (dataLength < postsPerPage) {
      setEndCount(endCount + (dataLength - 10));
    }

    if (endPage > currentPage) {
      setEndCount(currentPage * 10);
    }
  }, [currentPage]);

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
            <RxCaretDown
              className="arrowDown"
              size={17}
              style={{ color: "#fff" }}
            />
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <div className="firstContentHead">
          <p className="pageName">Overview</p>
          {/* <p>hi</p> */}
          <div className="filterWrapper">
            <p>Filter By :</p>
            <select
              name="filter"
              id="filter"
              onChange={(e) => {
                setRangeFilter(e.target.value);
              }}
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>

        <div className="accountInfoWrapper">
          <Card>
            {dashboardLoading ? (
              <Skeleton width={"230px"} height={"140px"} />
            ) : (
              <Ubalance balance={mydata?.data?.wallet?.balance} />
            )}
          </Card>
          <Card>
            {dashboardLoading ? (
              <Skeleton width={"230px"} height={"140px"} />
            ) : (
              <TotalTxnCount txnCount={txnCount} />
            )}
          </Card>
          <Card>
            {dashboardLoading ? (
              <Skeleton width={"230px"} height={"140px"} />
            ) : (
              <Totaltxnvalue txnValue={txnValue} />
            )}
          </Card>
          <Card>
            {dashboardLoading ? (
              <Skeleton width={"230px"} height={"140px"} />
            ) : (
              <Totalcommission txnComm={txnComm} />
            )}
          </Card>
        </div>

        <p className="recentCustomers">Recent Transactions</p>

        {loading ? (
          <div style={{ padding: "0 50px" }}>
            <Skeleton height={400} />
          </div>
        ) : (
          <TableWrapper>
            <ReusableTable
              type="recent"
              data={recentTxnData?.data}
              columns={columns}
              init={init}
            />
          </TableWrapper>
        )}
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

  /* svg {
    @media only screen and (max-width: 450px) {
      display: none;
    }
  } */

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
    padding: 20px 0 80px;
    border-radius: 20px;
    margin-top: 50px;

    .firstContentHead {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .pageName {
        font-size: 30px !important;
        color: #000;
        @media only screen and (max-width: 450px) {
          font-size: 20px; /* grid-template-columns: 1fr 1fr; */
        }
      }
      .filterWrapper {
        display: flex;
        align-items: center;
        gap: 15px;

        p {
          font-size: 13px;
        }
        select {
          border: 1px solid #00000047;
          border-radius: 5px;
          padding: 5px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;
          outline: none;
          /* padding-right: 20px; */
        }
      }
    }

    .accountInfoWrapper {
      display: flex;
      gap: 12px;
      margin-top: 10px;
      flex-wrap: wrap;
      padding: 20px;
      @media only screen and (max-width: 1280px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      @media only screen and (max-width: 450px) {
        display: block;
      }
    }

    .recentCustomers {
      /* margin-top: 40px; */
      font-size: 30px !important;
      padding: 20px !important;
      color: #000;

      @media only screen and (max-width: 450px) {
        font-size: 20px;
      }
    }
  }
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.2);
  flex: 1 0 16rem;
  padding: 10px 15px;
  border-radius: 10px;
  min-height: 150px;
  @media only screen and (max-width: 1280px) {
    /* width: 13rem; */
  }
  @media only screen and (max-width: 450px) {
    margin-bottom: 20px;
    /* grid-template-columns: 1fr 1fr; */
  }
`;

const TableWrapper = styled.div`
  @media only screen and (max-width: 450px) {
    /* padding: 10px; */
    width: 100%;
    max-width: 100%;
    overflow-y: scroll;
  }
  /* margin: 20px 0; */
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
  h5 {
    font-weight: 500;
  }
`;
export const PaginationBtnWrapper = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;

  button:not(.numbers a) {
    text-decoration: none;
    color: black;
    margin: 0 10px;
    font-size: 11px;
    font-weight: 600;
    font-family: "Karla", sans-serif;
    border: none;
    background: none;
    cursor: pointer;
    height: 100%;
  }

  .numbers {
    margin-bottom: 0px;

    p {
      cursor: default;
      color: black;
      text-decoration: none;
      border: 0.5px solid #d2d2d2;
      padding: 8px 12px;
      font-family: "Karla", sans-serif;
      font-size: 11px;
      font-weight: 600;
    }
  }
`;
