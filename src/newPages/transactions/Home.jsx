import React, { useState, useEffect } from "react";
import styled from "styled-components";
import alarmSvg from "../../assets/images/alarm.svg";
import userAvi from "../../assets/images/dummyAvi.svg";
import { RxCaretDown } from "react-icons/rx";
import ReusableTable from "../../reusables/ReusableTable";
import { useNavigate } from "react-router-dom";
import filter from "../../assets/icons/filter.svg";
import search from "../../assets/icons/search.svg";
import cloud from "../../assets/icons/cloud.svg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-hot-toast";

const Home = () => {
  const [init, setInit] = useState(1);
  const [txnData, setTxnData] = useState();
  const [limit, setLimit] = useState(10);
  const [mydata, setMyData] = useState();
  const [postsPerPage, setPostsPerOage] = useState(10);
  const [csvLimit, setCsvLimit] = useState("");
  const [csvInfo, setCsvInfo] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [startCount, setStartCount] = useState(currentPage);
  const [endCount, setEndCount] = useState(10);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(5);
  const [isLastPage, setIsLastPage] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [endPage, setEndPage] = useState();
  const [dataLength, setDataLength] = useState("");
  const [date1Type, setDate1Type] = useState("text");
  const [date2Type, setDate2Type] = useState("text");

  const navigate = useNavigate();

  const clientId = JSON.parse(sessionStorage.getItem("clientId"));
  const token = JSON.parse(sessionStorage.getItem("token"));
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

  //APIs section starts here ////////////////////////////////////////////////////////////
  const getTransactions = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}transactions/billing/?page=${currentPage}&startDate=${startDate}&endDate=${endDate}&limit=${postsPerPage}`,
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
      setTxnData(data);
      setLoading(false);
      setDataLength(data?.total);
      setCsvLimit(data?.total);
      setEndPage(data?.pages);
    } catch (error) {
      setLoading(false);
      toast.error("Please try again or refresh page.");
    }
  };
  //APIs section ends here ////////////////////////////////////////////////////////////

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
      setCsvInfo(data?.data);
    } catch (error) {
      toast.error("Please try again or refresh page.");
    }
  };
  //APIs section ends here ////////////////////////////////////////////////////////////

  useEffect(() => {
    getTransactions();
  }, [clientId, currentPage, postsPerPage]);

  useEffect(() => {
    getAllTransactions();
  }, [csvLimit]);

  let myData = txnData?.data;

  // const endPage = Math.ceil(dataLength / postsPerPage);

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

  const csvExportHandler = async () => {
    await getAllTransactions();

    // await getAllTransactions();
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

    const myCsvData = JSON.parse(JSON.stringify(csvInfo));
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
      console.log(csvData);
      formattedData.push(csvData);
    }

    console.log(formattedData);
    const objValues = formattedData.map((item) =>
      Object.values(item).toString()
    );
    const csv = [csvTableHead, ...Object.values(objValues)].join("\n");
    console.log(csv);
    const blob = new Blob([csv], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    console.log(a);
    a.download = "transactions.csv";
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(blob);
  };

  const filterByDateHandler = () => {
    getTransactions();
  };

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
        <div className="table-head">
          <p className="recentCustomers">Transactions</p>
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
            </FilterContainer>{" "}
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
            <button className="downloadBtn" onClick={csvExportHandler}>
              <img src={cloud} alt="" /> Download
            </button>
          </div>
        </div>{" "}
        {loading ? (
          <div style={{ padding: "0 50px" }}>
            <Skeleton height={500} style={{ marginTop: "30px" }} />
          </div>
        ) : (
          <>
            <TableWrapper>
              <ReusableTable
                type="transactions"
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
                        setStartPoint(0);
                        setEndPoint(5);
                      } else {
                        setCurrentPage(1);
                        setInit(1);
                        setStartCount(1);
                        setLimit(Number(e.target.value));
                        setPostsPerOage(e.target.value);
                        setEndCount(e.target.value);
                        setStartPoint(0);
                        setEndPoint(5);
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
    background-color: #fff !important;
    padding: 10px 0 80px !important;
    border-radius: 20px !important;
    margin-top: 50px !important;
    .table-head {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 5px !important;
      padding-right: 10px !important;
      @media only screen and (max-width: 987px) {
        justify-content: center !important;
        margin-bottom: 20px !important;
      }
      @media only screen and (max-width: 450px) {
        display: unset !important;
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
        color: #000;
        font-family: "DM Sans", sans-serif !important;
        @media only screen and (max-width: 987px) {
          display: none !important;
        }
        em {
          font-size: 25px;
        }
      }
    }

    .firstContentHead {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .pageName {
        font-size: 30px;
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

    .accountInfoWrapper {
      display: flex;
      gap: 12px;
      margin-top: 10px;
      flex-wrap: wrap;
      padding: 20px;
    }

    .recentCustomers {
      /* margin-top: 20px; */
      font-size: 30px;
      padding: 20px;

      @media only screen and (max-width: 450px) {
        display: none;
      }
    }
  }
`;
const TableWrapper = styled.div`
  @media only screen and (max-width: 450px) {
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
    font-size: 12px;
    font-family: "DM Sans", sans-serif !important;
    @media only screen and (max-width: 450px) {
      display: none;
    }
  }

  .xPagination {
    display: flex;
    align-items: center;
    gap: 20px;

    .perPage {
      display: flex;
      align-items: center;
      gap: 5px;

      p {
        font-size: 13px;
        @media only screen and (max-width: 450px) {
          font-size: 9px;
        }
      }

      select {
        height: 30px;
        padding: 0 10px;
        cursor: pointer;
        border-radius: 8px;
        border: 1px solid #d2d2d2;
        color: #4d4c4c;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }
  }
`;
export const PaginationBtnWrapper = styled.div`
  border: 1px solid #d2d2d2 !important;
  border-radius: 8px !important;
  display: flex !important;
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
        background-color: #dff0f452;
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
