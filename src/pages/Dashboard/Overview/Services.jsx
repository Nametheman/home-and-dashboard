import React from 'react';
import Container from './styles';
import { Button, Table } from 'antd';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getDebitTransactionSelector } from '../../../redux/reducers/services/getDebits';
import { getDebits } from '../../../redux/actions/services/getDebits';
import { useState } from 'react';
import { getTransactionSelector } from '../../../redux/reducers/wallet/transactions';

import {
  columns,
  transactions,
  transactionbillng
} from '../../../components/Dashboard/Wallet/table';
import { useNavigate } from 'react-router-dom';
import { Searchbar, SelectField } from '../../../reusables';

const Home = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch()
  const {debitTrack} = useSelector((state)=> state.debitTrack)
  console.log("🚀 ~ file: Services.jsx:23 ~ Home ~ debitTrack:", debitTrack)

  const {name} = JSON.parse(localStorage.getItem("user"))
  
  React.useEffect(()=>{
    setTrnx(debitTrack)
  },[debitTrack])

  const [trnx,setTrnx] = useState(debitTrack) 
  const [dates,setDates] = useState({
    startDate:'',
    endDate:''
  }) 
  const [show,setShow] = useState(false)

  

  React.useEffect(() => {
    dispatch(getDebits(dates));
  }, [dispatch]);
  React.useEffect(() => {

    dispatch(getDebits(dates));
  }, [dates]);

  const { transactions: deposits, loading,transactions } = useSelector(
    getTransactionSelector
    );




  const handleChange = (e) => {
    if(e.target.value){
      const searchBy = trnx.filter(item => {
        return Object.values(item).some(value => value.toString().toLowerCase().includes(e.target.value));
      });    
      setTrnx(searchBy)
    }else{
      setTrnx(debitTrack)
    }
    // if(!searchBy.lenght){
    //   setTrnx(transactions)
    // }
  }

  const dateOnChange = (e) => {
    const { value, name } = e.target
   
    setDates((prev) => {
        return {...prev, [name]:value}
     })     
 }

 const handleQueries = (e) => {
  dispatch(getDebits(dates));
  setTrnx(debitTrack)
 }

const THEAD = [
  "Transaction ID",
  "Service Name",
  "Biller Name",
  "NetValue",
  "Amount",
  "Commission",
  "Date",
  "Status"
]

 const downloadCsv = (e) => {
  const headers = Object.values(THEAD).toString()
  const myData = JSON.parse(JSON.stringify(trnx));
  const formattedData = [];
  for(let i = 0; i <myData.length; i++) {
    let transactionId = myData[i]?.id ;
    let serviceName = myData[i]?.serviceName;
    let billerName = myData[i].meta?.biller ? myData[i].meta?.biller : '-';
    let NetValue = myData[i]?.amount;
    let Commission = myData[i]?.meta?.commission ? myData[i]?.meta?.commission : '-';
    let Date = myData[i]?.createdAt ? myData[i]?.createdAt :"-";
    let status = myData[i].status;

    console.log(Commission)

    const csvData = {
      transactionId,
      serviceName,
      billerName,
      NetValue,
      Commission,
      Date,
      status,
    };
    formattedData.push(csvData);
    console.log(formattedData)
  }


  const objValues = formattedData.map((item) =>
    Object.values(item).toString()
  );
  const csv = [headers, ...Object.values(objValues)].join("\n");
  console.log(csv);
  const blob = new Blob([csv], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  console.log(a);
  a.download = `${name}.csv`;
  a.href = url;
  a.click();
  a.remove();
  URL.revokeObjectURL(blob);
 }



//  const csvTableHead = [
//   "Beneficiary Name",
//   "Sender ID",
//   "Date",
//   "Sender Name",
//   "Beneficiary Acct No",
//   "Amount",
//   "Trans. Ref",
//   "Status",
// ];
// console.log(csvTableHead);
// const myData = JSON.parse(JSON.stringify(recentCustomers));
// const formattedData = [];
// let newCsvData = [];
// for (let i = 0; i < myData.length; i++) {
//   let customer = { ...myData[i].customer };
//   let dates = myData[i].created_on;
//   let benName = myData[i].beneficiary_name;
//   let benAcount = myData[i].beneficiary_acct_no;
//   let reference = myData[i].reference;
//   let amount = myData[i].amount;
//   let status = myData[i].status;

//   const newBenName = benName.replace(/,/g, "");
//   let { last_name, first_name, customer_id } = customer;

//   const csvData = {
//     senderName: `${last_name} ${first_name}`,
//     customer_id,
//     dates,
//     newBenName,
//     benAcount,
//     amount,
//     reference,
//     status,
//   };
//   console.log(csvData);
//   formattedData.push(csvData);
// }
// console.log(formattedData);

// const objValues = formattedData.map((item) =>
//   Object.values(item).toString()
// );
// const csv = [csvTableHead, ...Object.values(objValues)].join("\n");
// console.log(csv);
// const blob = new Blob([csv], { type: "application/pdf" });
// const url = URL.createObjectURL(blob);
// const a = document.createElement("a");
// console.log(a);
// a.download = "cit-transfers.csv";
// a.href = url;
// a.click();
// a.remove();
// URL.revokeObjectURL(blob);
// });


 


  return (
    <Container>
      <div className='group'>
        <FaChevronCircleLeft className='icon' onClick={() => Navigate(-1)} />
        <h3>Transaction History</h3>
      </div>
      <br />
      <p>
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat */}
      </p>
      <br />
      <div className='leading_row'>
        {/* <SelectField
          placeholder='Filter'
          data={[
            { value: 'Last Week', name: 'Last Week' },
            { value: 'Last Month', name: 'Last Month' },
            { value: 'Custom', name: 'Custom' },
          ]}
        /> */}
        <Searchbar onTextChange={(e)=> handleChange(e)} />
        <p onClick={() => setShow(!show)} style={{cursor:'pointer'}}>Filter By Date</p>
      </div>
        
        <div style={{display:'flex',gap:'15px',justifyContent:'flex-end',alignItems:'center'}}>
          <div>
            <i>start date</i> 
          <input type="date" id="startDate" name="startDate"
            onInput={dateOnChange} style={{border:'none',padding:'5px 10px',borderRadius:'3px'}} />
          </div>
          <div>
            <i>end date</i>
          <input type="date" id="startDate" name="endDate"
           onInput={dateOnChange} style={{border:'none',padding:'5px 10px',borderRadius:'3px'}}
           />
          </div>
          <button onClick={handleQueries} style={{border:'none',background:'#343a40',borderRadius:'5px',padding:'5px 10px',color:'#fff'}}>Search</button> | 
          <button onClick={downloadCsv} style={{border:'none',background:'#343a40',borderRadius:'5px',padding:'5px 10px',color:'#fff'}}>Download CSV</button>
        </div>
        
        
      <br />
      <Table columns={transactionbillng} dataSource={trnx && trnx} loading={loading} />
    </Container>
  );
};

export default Home;
