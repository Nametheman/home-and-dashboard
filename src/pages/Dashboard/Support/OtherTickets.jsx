import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTicket } from '../../../redux/actions/support/getTicket';
import { getTicketSelector } from '../../../redux/reducers/support/getTicket';
import TicketCard from './elements/TicketCard';

const OtherTickets = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);

  const { loading, tickets } = useSelector(getTicketSelector);
  const otherTickets = tickets?.filter((ticket) => ticket?.status !== 'ACTIVE');
  return (
    <Container>
      <h4>List of old tickets</h4>
      <br />
      {loading && <h5>Loading...</h5>}
      {!loading && otherTickets?.length === 0 && <h5>No old tickets</h5>}
      {!loading && otherTickets.map((ticket, index) => {
        return <TicketCard key={index} {...ticket} />;
      })}
    </Container>
  );
};

export default OtherTickets;

const Container = styled.div`
width: 100%;
display: flex;
min-height:400px;
background: #fff;
flex-direction: column;
padding: 2rem;

  h5 {
    font-weight: bold;
    text-align: center;
    opacity: 0.7;
  }

  h4 {
    font-weight: bold;
    margin-bottom: 0.5rem !important;
    text-align: left;
  }

  .input_group {
    display: flex;
    text-align: left;
    flex-direction: column;
    gap: 0.2em;

    p {
      color: #333;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`;
