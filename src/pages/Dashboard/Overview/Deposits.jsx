import React from 'react';
import Container from './styles';
import { useState } from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { depositColumns as columns } from '../../../components/Dashboard/Wallet/table';
import { getTransactionSelector } from '../../../redux/reducers/wallet/transactions';
import { getWalletTransactions } from '../../../redux/actions/wallet/transactions';
import { useNavigate } from 'react-router-dom';
import { Searchbar, SelectField } from '../../../reusables';

const Home = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getWalletTransactions());
  }, [dispatch]);
  const { transactions } = useSelector(getTransactionSelector);


  const [trnx,setTrnx] = useState(transactions && transactions ) 
  // const [trnx,setTrnx] = useState(transactions && transactions.map((item,idx) => transactions[transactions.length-1-idx])) 


  const handleChange = (e) => {
    if(e.target.value){
      const searchBy = trnx.filter(item => {
        return Object.values(item).some(value => value.toString().toLowerCase().includes(e.target.value));
      });
      setTrnx(searchBy)
    }else{
      setTrnx(transactions)
    }
    // if(!searchBy.lenght){
    //   setTrnx(transactions)
    // }
  }

  return (
    <Container>
      <div className='group'>
        <FaChevronCircleLeft className='icon' onClick={() => Navigate(-1)} />
        <h3>Deposits History</h3>
      </div>
      <br />
      <p>
       
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
        <Searchbar onTextChange={(e) => handleChange(e)} />
      </div>
      <br />
      <Table columns={columns} dataSource={trnx && trnx} scroll={{ x: 768 }} />
    </Container>
  );
};

export default Home;
