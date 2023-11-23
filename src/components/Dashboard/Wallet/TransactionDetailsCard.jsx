import React from 'react';
import styled from 'styled-components';

const TransactionDetailsCard = (props) => {
  console.log(props)
  return (
    <Container>
      <div className='group'>
        <div className='channel'>
          {props.type} -{' '}
          {props.status === 'SUCCESS' ? (
            <span className='success'>{props.status}</span>
          ) : (
            <span className='others'>{props.status}</span>
          )}
        </div>
        <div className='amount'>#{props.amount.toLocaleString()}</div>
      </div>
      <div className='group'>
        
        {/* <div>Ref: {props.meta.transactionId}</div> */}
        <div className='date'>
          {props.createdAt && new Date(props.createdAt).toLocaleDateString()},
          {props.createdAt && new Date(props.createdAt).toLocaleTimeString()}
        </div>
      </div>
    </Container>
  );
};

export default TransactionDetailsCard;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
  gap: 0.5em;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  .date,
  div {
    padding:0 !important;
    color: grey;
  }

  .group {
    display: flex;
    margin: 0 !important;
    padding: 0 !important;
    gap: 0;
    justify-content: space-between;

    .channel {
      font-weight: bold;
      font-size: 18px;
      margin: 0 !important;
      padding: 0 !important;
      text-transform: capitalize;

      @media screen and (max-width: 425px) {
        font-size: 14px;
      }
      .success {
        color: green;
        font-size: 14px;
        text-transform: capitalize !important;

        @media screen and (max-width: 425px) {
          font-size: 12px;
        }
      }

      .others {
        color: orange;
        font-size: 14px;
        text-transform: capitalize;

        @media screen and (max-width: 425px) {
          font-size: 12px;
        }
      }
    }

    .amount {
      font-weight: bold;
      font-size: 18px;

      @media screen and (max-width: 425px) {
        font-size: 15px;
      }
    }
  }
`;

export const transactions = [
  {
    key: 1,
    channel: 'Deposit',
    amount: 500,
    status: 'PENDING',
    description: 'Deposit-E0000004784787487',
    createdAt: new Date(),
  },
  {
    key: 2,
    channel: 'Deposit',
    amount: 500,
    status: 'PENDING',
    description: 'Deposit-E0000004784787487',
    createdAt: new Date(),
  },
  {
    key: 3,
    channel: 'Deposit',
    amount: 500,
    status: 'PENDING',
    description: 'Deposit-E0000004784787487',
    createdAt: new Date(),
  },
  {
    key: 4,
    channel: 'Deposit',
    amount: 500,
    status: 'PENDING',
    description: 'Deposit-E0000004784787487',
    createdAt: new Date(),
  },
  {
    key: 5,
    channel: 'Deposit',
    amount: 500,
    status: 'PENDING',
    description: 'Deposit-E0000004784787487',
    createdAt: new Date(),
  },
];
