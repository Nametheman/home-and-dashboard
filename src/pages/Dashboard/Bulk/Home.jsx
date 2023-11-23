import React, { useState } from "react";
import { PlaceholderAvatar } from "../../../assets/images";
import { Button, InputField } from "../../../reusables";
import Container from "./styles";
import { UserDetailsWrapper } from "./styles";
import { Switch, Table } from "antd";
import { example } from "./example";
import Papa from "papaparse";
import { produce } from "immer";
import { columns, bulkvend } from "../../../components/Dashboard/Wallet/table";
const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [copied, setCopied] = React.useState(false);
  const handleCopyClientId = () => {
    setCopied(true);
    navigator.clipboard.writeText(user?.clientId);
  };
  const handledownload = () => {
    console.log(example);
    const THEAD = ["phoneNumber", "network", "amount"];
    const headers = Object.values(THEAD).toString();

    const objValues = example.map((item) => Object.values(item).toString());
    const csv = [headers, ...Object.values(objValues)].join("\n");
    console.log(csv);
    const blob = new Blob([csv], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    console.log(a);
    a.download = `example.csv`;
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(blob);
  };
  const [csvData, setCsvData] = useState([]);
  console.log("🚀 ~ file: Home.jsx:49 ~ Home ~ csvData:", csvData);
  const [sortedcsvData, setSortedCsvData] = useState([]);

  const fecther = async (body) => {
    const response = await fetch(`${process.env.REACT_APP_PS_URL}/airtime`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "client-id": `${user.clientId}`,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvText = event.target.result;
      const parsedData = Papa.parse(csvText).data;
      setCsvData(parsedData);
    };

    reader.readAsText(file);

    //   const refactoredArray = csvData?.slice(1)?.map(item => {
    //     return {
    //       phoneNumber: item[0],
    //       network: item[1],
    //       amount: item[2]
    //     };
    //   });

    //  setSortedCsvData(refactoredArray)
  };

  const [messageArray, setMessageArray] = useState([]);

  // const test = csvData.

  const handleSendall = (e) => {
    setLoading(true);
    const refactoredArray = csvData?.slice(1)?.map((item) => {
      const fecther = async () => {
        const response = await fetch(`${process.env.REACT_APP_PS_URL}airtime`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "client-id": `${user.clientId}`,
          },
          body: JSON.stringify({
            phoneNumber: item[0],
            network: item[1],
            amount: item[2],
            provider: "creditswitch",
          }),
        });
        const data = await response.json();
        setLoading(false);
        if (data?.error) {
          setMessageArray((current) => [...current, data?.data?.status]);
        } else {
          setMessageArray((current) => [...current, data?.data?.status]);
          console.log(messageArray, "message");
          setCsvData([]);

          setTimeout(() => {
            setMessageArray([]);
          }, 2000);

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      };
      fecther();
    });
  };

  const handleSendall2 = () => {
    setLoading(true);

    variants?.forEach(async (item) => {
      const response = await fetch(`${process.env.REACT_APP_PS_URL}airtime`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "client-id": `${user.clientId}`,
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      setLoading(false);
      if (data?.error) {
        setMessageArray((current) => [...current, data?.data?.status]);
      } else {
        setMessageArray((current) => [...current, data?.data?.status]);
        console.log(messageArray, "message");
        setVariantsList([
          ...variant,
          {
            phoneNumber: "",
            network: "Select Network",
            amount: "",
            provider: "creditswitch",
          },
        ]);
        setTimeout(() => {
          setMessageArray([]);
        }, 2000);

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }

      console.log(data?.error?.message);
    });
  };
  const [variants, setVariantsList] = useState([
    { phoneNumber: "", network: "", amount: "", provider: "creditswitch" },
  ]);
  const [variant, setVariantList] = useState([]);

  const addVariant = () => {
    setVariantsList([
      ...variants,
      { phoneNumber: "", network: "", amount: "", provider: "creditswitch" },
    ]);
  };

  const removeVariant = (index) => {
    const list = [...variants];
    list.splice(index, 1);
    setVariantsList(list);
  };

  const [loading, setLoading] = useState(false);

  console.log(variants, "data-input");
  return (
    <Container>
      <h1>Bulk Recharge</h1>

      <br />
      <UserDetailsWrapper>
        <div className="details__group">
          {/* <img
            src={user?.avatar ?? PlaceholderAvatar}
            alt={PlaceholderAvatar}
          />
          <div className='text_group'>
            <h3>Client Name:</h3>
            <p>{user?.name}</p>
          </div>
          <div className='text_group'>
            <h3>Email:</h3>
            <p>{user?.email}</p>
          </div>
          <div className='text_group'>
            <h3>Phone Number:</h3>
            <p>{user?.phoneNumber ?? '+234-XXX-XXXX-XXX'}</p>
          </div>
          <div className='text_group'>
            <h3>App Logo:</h3>
            <p>{user?.logo}</p>
          </div>
          <div className='text_group'>
            <h3>App URL:</h3>
            <p>{user?.appURL}</p>
          </div> */}
          <hr
            style={{
              width: "100%",
              borderBottom: "1px solid #000000 !important",
            }}
          />
          <div className="wrapper">
            <h2>Vend Bulk Airtime</h2>
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              <button
                style={{
                  width: "50%",
                  height: "50px",
                  backgroundColor: "rgba(0,0,0,.85)",
                  textAlign: "center",
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                }}
                onClick={handledownload}
              >
                Download example Template
              </button>

              <button
                style={{
                  width: "50%",
                  height: "50px",
                  backgroundColor: "#28d1ff",
                  textAlign: "center",
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                <label htmlFor="uploadbtn">Upload</label>
              </button>

              <input
                type="file"
                id="uploadbtn"
                onChange={(e) => handleFileUpload(e)}
                style={{
                  display: "none",
                }}
              />
            </div>

            {/* <div className='copy__group'>
              <InputField value={user?.clientId} readOnly={true} />
              <Button
                onClick={handleCopyClientId}
                copy
                text={copied ? 'Copied' : 'Copy'}
              />
            </div> */}
          </div>
        </div>
        {/* <div className='details__group'>
          <img
            src={user?.avatar ?? PlaceholderAvatar}
            alt={PlaceholderAvatar}
          />
          <div className='text_group'>
            <h3>Client Name:</h3>
            <p>{user?.name}</p>
          </div>
          <div className='text_group'>
            <h3>Email:</h3>
            <p>{user?.email}</p>
          </div>
          <div className='text_group'>
            <h3>Phone Number:</h3>
            <p>{user?.phoneNumber ?? '+234-XXX-XXXX-XXX'}</p>
          </div>
          <div className='text_group'>
            <h3>App Logo:</h3>
            <p>{user?.logo}</p>
          </div>
          <div className='text_group'>
            <h3>App URL:</h3>
            <p>{user?.appURL}</p>
          </div>
          <hr
            style={{
              width: '100%',
              borderBottom: '1px solid #000000 !important',
            }}
          />
          <div className='wrapper'>
            <h2>Your Client ID</h2>
            <p>
              Use this key for each request. Please consult documents for more
              information
            </p>
            <div className='copy__group'>
              <InputField value={user?.clientId} readOnly={true} />
              <Button
                onClick={handleCopyClientId}
                copy
                text={copied ? 'Copied' : 'Copy'}
              />
            </div>
          </div>
        </div> */}
        {/* <div className='auth__group'>
          <h2>Change Your Password</h2>
          <InputField placeholder='Old Password' inputType='password' />
          <InputField placeholder='New Password' inputType='password' />
          <Button full text='Save' primary />
        </div> */}
      </UserDetailsWrapper>
      <br></br>

      <div
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        {variants?.map((data, index) => {
          return (
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "end",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "30%",
                }}
              >
                <div>Phone Number</div>
                <input
                  style={{ width: "100%" }}
                  value={data?.phoneNumber}
                  type="number"
                  onChange={(e) => {
                    const phoneNumber = e.target.value;
                    setVariantsList((currentVariant) =>
                      produce(currentVariant, (v) => {
                        v[index].phoneNumber = phoneNumber;
                      })
                    );
                  }}
                />
              </div>
              &nbsp; &nbsp;
              <div
                style={{
                  width: "30%",
                }}
              >
                <div>Network</div>

                <select
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    const network = e.target.value;
                    setVariantsList((currentVariant) =>
                      produce(currentVariant, (v) => {
                        v[index].network = network;
                      })
                    );
                  }}
                  name=""
                  id=""
                >
                  ;
                  {["Select Network", "AIRTEL", "GLO", "MTN", "9MOBILE"].map(
                    (x, index) => {
                      return (
                        <option
                          disabled={index === 0}
                          selected={index === 0}
                          value={x}
                        >
                          {x}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
              &nbsp; &nbsp;
              <div
                style={{
                  width: "30%",
                }}
              >
                <div>Amount</div>

                <input
                  style={{ width: "100%" }}
                  value={data?.amount}
                  type="number"
                  onChange={(e) => {
                    const amount = e.target.value;
                    setVariantsList((currentVariant) =>
                      produce(currentVariant, (v) => {
                        v[index].amount = amount;
                      })
                    );
                  }}
                />
              </div>
              &nbsp; &nbsp;
              {(index === 0 && variants?.length !== 5 && (
                <button
                  style={{
                    width: "10%",
                    height: "50px",
                    backgroundColor: "#28d1ff",
                    textAlign: "center",
                    border: "none",
                    borderRadius: "5px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={addVariant}
                >
                  Add
                </button>
              )) ||
                (index !== 0 && (
                  <button
                    style={{
                      width: "10%",
                      height: "50px",
                      backgroundColor: "red",
                      textAlign: "center",
                      border: "none",
                      borderRadius: "5px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    onClick={() => removeVariant(index)}
                  >
                    Remove
                  </button>
                )) || (
                  <button
                    style={{
                      width: "10%",
                      height: "50px",
                      backgroundColor: "#28d1ff",
                      textAlign: "center",
                      border: "none",
                      borderRadius: "5px",
                      color: "#fff",
                      cursor: "inherit",
                      opacity: "0.6",
                    }}
                    disabled
                  >
                    Add
                  </button>
                )}
            </div>
          );
        })}
      </div>
      <br />
      {(messageArray?.length && (
        <div>
          <span style={{ color: "green" }}>
            {messageArray?.filter((x) => x === "SUCCESS")?.length} - Successful
          </span>
          &nbsp; &nbsp;
          <span style={{ color: "red" }}>
            {messageArray?.length -
              messageArray?.filter((x) => x === "SUCCESS")?.length}{" "}
            - Failed
          </span>
        </div>
      )) ||
        ""}
      <br />

      {loading ? (
        <button
          style={{
            width: "20%",
            height: "50px",
            backgroundColor: "#28d1ff",
            textAlign: "center",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            opacity: "0.6",
            cursor: "default",
          }}
        >
          Send Recharge
        </button>
      ) : (
        <button
          style={{
            width: "20%",
            height: "50px",
            backgroundColor: "#28d1ff",
            textAlign: "center",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => handleSendall2()}
        >
          Send Recharge
        </button>
      )}

      <br />
      <br />
      <br />
      <br />

      <Table
        columns={bulkvend}
        dataSource={[
          ...csvData?.slice(1)?.map((item) => {
            return {
              phoneNumber: item[0],
              network: item[1],
              amount: item[2],
            };
          }),
        ]}
        pagination={true}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        {loading ? (
          <button
            style={{
              width: "20%",
              height: "40px",
              backgroundColor: "#28d1ff",
              textAlign: "center",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
              opacity: "0.6",
              cursor: "default",
            }}
          >
            Send Now
          </button>
        ) : (
          <button
            style={{
              width: "20%",
              height: "40px",
              backgroundColor: "#28d1ff",
              textAlign: "center",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
            }}
            onClick={handleSendall}
          >
            Send Now
          </button>
        )}
      </div>
    </Container>
  );
};

export default Home;
