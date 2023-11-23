import React, { useState, useEffect } from "react";
import styled from "styled-components";
import alarmSvg from "../../assets/images/alarm.svg";
import userAvi from "../../assets/images/dummyAvi.svg";
import cloud from "../../assets/icons/cloud.svg";
import { RxCaretDown } from "react-icons/rx";
import ReusableTable from "../../reusables/ReusableTable";
import Filter from "./Filter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../../assets/icons/calendar.svg";
import filter from "../../assets/icons/filter.svg";
import search from "../../assets/icons/search.svg";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-hot-toast";

// imort dateFilter

const History = () => {
  const [init, setInit] = useState(1);
  const [page, setPage] = useState(1);
  const [txnData, setTxnData] = useState();
  const [limit, setLimit] = useState(10);
  const [mydata, setMyData] = useState();
  const [postsPerPage, setPostsPerOage] = useState(10);
  const [csvLimit, setCsvLimit] = useState("");
  const [csvInfo, setCsvInfo] = useState();
  const [recentTxnData, setRecentTxnData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [endNumber, setEndNumber] = useState(indexOfLastPost);
  const [startCount, setStartCount] = useState(currentPage);
  const [endCount, setEndCount] = useState(currentPage * 10);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(5);
  const [isLastPage, setIsLastPage] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [date1Type, setDate1Type] = useState("text");
  const [date2Type, setDate2Type] = useState("text");

  let num = 1;

  const clientId = JSON.parse(sessionStorage.getItem("clientId"));
  const token = JSON.parse(sessionStorage.getItem("token"));

  //Table column goes in here. This is to be passed as props/////////////////////////////
  const columns = [
    { field: "no", header: "S/N" },
    { field: "amount", header: "AMOUNT" },
    { field: "date", header: "DATE" },
    { field: "status", header: "STATUS" },
  ];

  //APIs section starts here ////////////////////////////////////////////////////////////
  const getTransactions = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}transactions/${clientId}?page=${currentPage}&startDate=${startDate}&endDate=${endDate}&limit=${postsPerPage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setTxnData(data);
      setLoading(false);
      setCsvLimit(data?.total);
    } catch (error) {
      setLoading(false);
    }
  };
  //APIs section ends here ////////////////////////////////////////////////////////////

  useEffect(() => {
    console.log(moment(startDate).format(), moment(endDate).format());
  }, []);
  let myData = txnData?.data;
  const dataLength = txnData?.total;

  const endPage = Math.ceil(dataLength / postsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dataLength / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const myPageNumbers = pageNumbers.slice(startPoint, endPoint);

  const prevPageHandler = async () => {
    if (currentPage === 1) {
      return;
    } else if (currentPage === endPage) {
      setCurrentPage(currentPage - 1);
      setStartCount(startCount - Number(postsPerPage));
      setEndCount(endCount - Number(txnData?.data?.length));
      setInit(init - Number(limit));
    } else {
      setCurrentPage(currentPage - 1);
      setStartCount(startCount - Number(postsPerPage));
      setEndCount(endCount - limit);
      setInit(init - Number(limit));
    }
    if (currentPage <= startPoint + 1) {
      setStartPoint(startPoint - 5);
      setEndPoint(endPoint - 5);
    }
  };

  const nextPageHandler = async () => {
    if (currentPage >= endPage) {
      setIsLastPage(true);
      setEndCount(dataLength);
      return;
    } else {
      setCurrentPage(currentPage + 1);
      setStartCount(startCount + Number(postsPerPage));
      setEndCount(startCount + limit + limit - 1);
      setInit(init + Number(limit));
    }
    if (currentPage >= endPoint) {
      setEndPoint(endPoint + 5);
      setStartPoint(startPoint + 5);
    }
  };

  useEffect(() => {
    if (currentPage === endPage) {
      setEndCount(dataLength);
    } else {
      return;
    }
  }, [currentPage]);

  useEffect(() => {
    getTransactions();
    if (txnData && dataLength < postsPerPage) {
      setEndCount(dataLength);
    }
  }, [clientId, currentPage, postsPerPage]);

  //APIs section starts here ////////////////////////////////////////////////////////////
  const getAllTransactions = async () => {
    try {
      // setLoading(txrue);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}transactions/billing/?startDate=${startDate}&endDate=${endDate}&limit=${csvLimit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      return data?.data;
    } catch (error) {
      toast.error("Please try again");
      return;
    }
  };
  //APIs section ends here ////////////////////////////////////////////////////////////

  const csvExportHandler = async (expectedData) => {
    const csvTableHead = [
      "Transaction ID",
      "Service Name",
      "Biller Name",
      "Amount",
      "Commission",
      "Net Value",
      "Date",
      "Status",
    ];

    const myCsvData = expectedData;
    let formattedData = [];
    for (let i = 0; i < myCsvData.length; i++) {
      let meta = { ...myCsvData[i]?.meta?.payload };
      let info = { ...myCsvData[i] };

      let { transactionId } = meta;
      let { amount, status, route, billingId, commission, netValue } = info;
      const csvData = {
        transactionID: transactionId,
        setviceName: route,
        billerName: billingId,
        amount,
        commission,
        netValue,
        date: info.createdAt,
        status,
      };
      formattedData.push(csvData);
    }

    const objValues = formattedData.map((item) =>
      Object.values(item).toString()
    );
    const csv = [csvTableHead, ...Object.values(objValues)].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = "deposits.csv";
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(blob);
  };

  const csvDownloadHandler = async () => {
    try {
      const transactions = await getAllTransactions();
      await csvExportHandler(transactions);
    } catch (e) {
      toast.error(e);
    }
  };

  const filterByDateHandler = () => {
    getTransactions();
    // getAllTransactions
  };

  const name = JSON.parse(sessionStorage?.getItem("name"));

  return (
    <Container>
      {" "}
      <div className="head">
        <div className="head_content">
          <img src={alarmSvg} alt="" />
          <div className="userProfileWrapper">
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
        <div className="table-head">
          <p className="recentCustomers">Deposit History</p>
          <div className="filterSection">
            <FilterContainer>
              <DatePickers>
                <Range>
                  <input
                    type={date1Type}
                    value={date1Type === "text" ? "Start Date" : null}
                    onClick={() => {
                      setDate1Type("date");
                    }}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                    min="2022-01-01"
                    max="2023-12-31"
                  />
                </Range>
              </DatePickers>
              <DatePickers>
                <Range>
                  <input
                    type={date2Type}
                    value={date2Type === "text" ? "End Date" : null}
                    onClick={() => {
                      setDate2Type("date");
                    }}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                    }}
                    min="2022-01-01"
                    max="2023-12-31"
                  />
                </Range>
              </DatePickers>
              <Range
                style={{ width: "35px", cursor: "pointer" }}
                onClick={filterByDateHandler}
              >
                <img src={filter} alt="" />
              </Range>
              <SearchWrapper>
                <img src={search} alt="" />
                <input type="text" placeholder="Search" />
                <p style={{ cursor: "pointer" }}>Go</p>
              </SearchWrapper>
            </FilterContainer>
            <MobileContainer>
              <div className="dateInputsWrapper">
                <div className="dateInputs">
                  <Range>
                    <input
                      type={date1Type}
                      value={date1Type === "text" ? "Start Date" : null}
                      onClick={() => {
                        setDate1Type("date");
                      }}
                      onChange={(e) => {
                        setStartDate(e.target.value);
                      }}
                      min="2022-01-01"
                      max="2023-12-31"
                    />
                  </Range>
                  <Range>
                    <input
                      type={date2Type}
                      value={date2Type === "text" ? "End Date" : null}
                      onClick={() => {
                        setDate2Type("date");
                      }}
                      onChange={(e) => {
                        setEndDate(e.target.value);
                      }}
                      min="2022-01-01"
                      max="2023-12-31"
                    />
                  </Range>
                </div>

                <Range
                  style={{ width: "35px", cursor: "pointer" }}
                  onClick={filterByDateHandler}
                >
                  <img src={filter} alt="" />
                </Range>
              </div>
              <div className="mobileSearch">
                <img src={search} alt="" />
                <input type="text" placeholder="Search" />
                <p style={{ cursor: "pointer" }}>Go</p>
              </div>
            </MobileContainer>
            <button className="downloadBtn" onClick={csvDownloadHandler}>
              <img src={cloud} alt="" /> Download
            </button>
          </div>
        </div>
        {loading ? (
          <div style={{ padding: "0 30px" }}>
            <Skeleton height={500} />
          </div>
        ) : (
          <>
            <TableWrapper>
              <ReusableTable
                type="deposit-history"
                columns={columns}
                init={init}
                data={txnData?.data}
              />
            </TableWrapper>
            <PaginationWrapper>
              <h5>
                Showing {startCount} to {endCount} of {dataLength} Entries
              </h5>

              <div className="xPagination">
                <div className="perPage">
                  <p>Per page:</p>
                  <select
                    name="perPage"
                    id="perPage"
                    onChange={(e) => {
                      if (currentPage === 1) {
                        setPostsPerOage(e.target.value);
                        setEndCount(e.target.value);
                        setLimit(Number(e.target.value));
                      } else {
                        setCurrentPage(1);
                        setInit(1);
                        setStartCount(1);
                        setLimit(Number(e.target.value));
                        setPostsPerOage(e.target.value);
                        setEndCount(e.target.value);
                      }
                    }}
                    value={limit}
                  >
                    {[10, 20, 50].map((opt, idx) => {
                      return (
                        <option value={opt} key={idx}>
                          {opt}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <PaginationBtnWrapper>
                  <button onClick={prevPageHandler}>Previous</button>
                  {myPageNumbers.map((number) => (
                    <div key={number} className="numbers">
                      <p
                        href="#"
                        className="paginationNumbers"
                        style={{
                          background: currentPage === number ? "#28D1FF" : "",
                          color: currentPage === number ? "#fff" : "",
                          cursor: "pointer",
                        }}
                        key={number}
                        onClick={() => {
                          setCurrentPage(number);
                          setInit(number * postsPerPage - postsPerPage + 1);
                          setStartCount(
                            number * postsPerPage - postsPerPage + 1
                          );
                          setEndCount(number * postsPerPage);
                        }}
                      >
                        {number}
                      </p>
                    </div>
                  ))}
                  <button onClick={nextPageHandler}>Next</button>
                </PaginationBtnWrapper>
              </div>
            </PaginationWrapper>
          </>
        )}
      </div>
    </Container>
  );
};

export default History;

const Container = styled.div`
  padding: 30px !important;
  position: absolute !important;
  top: 0 !important;
  width: calc(100% - 16%) !important;
  max-width: calc(100% - 16%) !important;
  @media only screen and (max-width: 1147px) {
    width: calc(100%) !important;
    margin-left: 0 !important;
    max-width: calc(100%) !important;
  }
  @media only screen and (max-width: 450px) {
    padding: 0 !important;
  }
  .head {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;

    .head_content {
      display: flex !important;
      width: 300px !important;
      justify-content: space-between !important;
      align-items: center !important;
      padding: 0 10px !important;

      @media only screen and (max-width: 450px) {
        width: 150px !important;
      }
      img {
        width: 35px !important;
        @media only screen and (max-width: 450px) {
          width: 20px !important;
        }
      }
      .userProfileWrapper {
        width: 200px !important;
        border-left: 1px solid #eeebeb !important;
        padding-left: 40px !important;
        display: flex !important;
        align-items: center !important;
        gap: 15px !important;

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
    background-color: #fff !important;
    padding: 10px 0 80px !important;
    border-radius: 20px !important;
    margin-top: 50px !important;

    .firstContentHead {
      padding: 20px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      @media only screen and (max-width: 450px) {
        display: unset !important;
      }
      .pageName {
        font-size: 30px !important;
      }
      .filterWrapper {
        display: flex !important;
        align-items: center !important;
        gap: 15px !important;

        @media only screen and (max-width: 450px) {
          align-items: flex-start !important;
          justify-content: space-between !important;
          padding: 30px !important;
        }

        select {
          border: 1px solid #00000047 !important;
          border-radius: 5px !important;
          padding: 5px !important;
        }
      }
    }

    .accountInfoWrapper {
      display: flex !important;
      gap: 12px !important;
      margin-top: 10px !important;
      flex-wrap: wrap;
      padding: 20px !important;
    }

    .table-head {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 5px !important;
      padding-right: 10px;
      @media only screen and (max-width: 987px) {
        justify-content: center !important;
        margin-top: 10px !important;
        margin-bottom: 20px !important;
      }
      .filterSection {
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        @media only screen and (max-width: 450px) {
          align-items: flex-start;
          justify-content: space-between;
          padding: 30px;
        }

        .downloadBtn {
          display: flex;
          align-items: center;
          height: 40px;
          width: 130px;
          background-color: #28d1ff;
          justify-content: center;
          gap: 8px;
          color: #fff;
          border: none;
          outline: none;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;

          @media only screen and (max-width: 450px) {
            /* display: none; */
            width: 40px;
            font-size: 0;
          }

          img {
            width: 20px;
            margin-bottom: 2px;
            @media only screen and (max-width: 450px) {
              /* display: none; */
              margin-bottom: 0;
              margin-left: 4px;
            }
          }
        }
      }
      .recentCustomers {
        /* margin-top: 20px; */
        font-size: 20px !important;
        padding: 20px !important;
        color: #3d3d3d;

        @media only screen and (max-width: 987px) {
          display: none;
        }
        em {
          font-size: 25px;
        }
      }
    }
  }
`;
const TableWrapper = styled.div`
  /* margin: 20px 0; */
`;
export const PaginationWrapper = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-top: 40px !important;
  padding: 0 20px !important;
  h5 {
    font-weight: 500 !important;
    font-size: 13px;
    font-family: "DM Sans", sans-serif !important;
    @media only screen and (max-width: 450px) {
      display: none !important;
    }
  }
  .xPagination {
    display: flex !important;
    align-items: center !important;
    gap: 20px !important;

    .perPage {
      display: flex !important;
      align-items: center !important;
      gap: 5px !important;

      p {
        font-size: 13px;
        @media only screen and (max-width: 450px) {
          font-size: 9px;
        }
      }

      select {
        height: 30px !important;
        padding: 0 10px !important;
        cursor: pointer !important;
        border-radius: 8px !important;
        border: 1px solid #d2d2d2 !important;
        color: #4d4c4c !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
      }
    }
  }
`;
export const PaginationBtnWrapper = styled.div`
  border: 1px solid #d2d2d2 !important;
  border-radius: 8px !important;
  display: flex !important; !important
  align-items: center !important;
  justify-content: center !important;
  height: 31px !important;

  button:not(.numbers a) {
    text-decoration: none !important;
    color: black !important;
    margin: 0 10px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    font-family: "Karla", sans-serif !important;
    border: none !important;
    background: none !important;
    cursor: pointer !important;
    height: 100% !important;
  }

  .numbers {
    margin-bottom: 0px !important;

    p {
      cursor: pointer !important;
      color: black !important;
      text-decoration: none !important;
      border: 0.5px solid #d2d2d2 !important;
      padding: 8px 12px !important;
      font-family: "Karla", sans-serif !important;
      font-size: 11px !important;
      font-weight: 600 !important;

      &:hover {
        background-color: #dff0f452 !important; 
      }
      @media only screen and (max-width: 450px) {
        font-size: 9px;
      }
    }
  }
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media only screen and (max-width: 450px) {
    display: none;
  }
`;

export const Range = styled.div`
  display: flex;
  border: 1px solid #28d1ff;
  background-color: #fff;
  width: 150px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 6px;
  input {
    border: none;
    outline: none;
    width: 130px;
    height: 37px;
    cursor: pointer;
    font-family: "Karla", sans-serif;
  }
  .myInput {
    height: 30px;
    width: 120px;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
  }
  img {
    width: 15px;
  }
  select {
    border: none;
    width: 50px;
    &:active,
    &:focus {
      outline: none;
    }
  }
`;

const DatePickers = styled.div`
  p {
    font-size: 11px;
    margin-bottom: 2px;
    font-weight: 500;
    margin-left: 1px;
  }
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #28d1ff;
  height: 40px;
  border-radius: 6px;
  padding: 0 2px 0 10px;

  input {
    width: 220px;
    border: none;
    outline: none;
    height: 90%;
    margin-left: 9px;
  }
  p {
    background-color: #28d1ff;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 5px;
    font-size: 14px;
  }
`;

const MobileContainer = styled.div`
  display: none;
  @media only screen and (max-width: 450px) {
    display: block;
    position: relative;
    .dateInputsWrapper {
      display: flex;
      gap: 20px;

      .dateInputs {
        /* margin-left: 10px; */

        div {
          margin-bottom: 10px;
        }
      }
    }

    .mobileSearch {
      margin-top: 10px;
      /* margin-left: 10px; */
      display: flex;
      align-items: center;
      border: 1px solid #28d1ff;
      height: 40px;
      border-radius: 6px;
      /* width: 90%; */
      padding: 0 2px 0 10px;
      /* position: absolute; */
      input {
        width: 220px;
        border: none;
        outline: none;
        height: 90%;
        margin-left: 9px;
      }
      p {
        background-color: #28d1ff;
        height: 35px;
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 5px;
        font-size: 14px;
      }
    }
  }
`;
