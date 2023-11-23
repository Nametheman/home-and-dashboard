import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createTicket } from "../../../redux/actions/support/newTicket";
import { InputField, TextArea, Button } from "../../../reusables";
import {
  newTicketSelector,
  clearState,
} from "../../../redux/reducers/support/newTicket";

const NewTicket = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [ticket, setTicket] = React.useState({
    name: user?.name ?? "client",
    subject: "",
    message: "",
  });
  const { message, subject } = ticket;
  const { loading, success, error, errors } = useSelector(newTicketSelector);
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (subject && message) {
      dispatch(createTicket(ticket));
    }
  };

  return success ? (
    <SuccessContainer>
      <h3>Success!</h3>
      <p>
        Your ticket has been successfully submitted. You will be contacted
        shortly. Kindly check the <b>Active Ticket</b> tab to track the ticket.{" "}
      </p>
      <Button
        text="Close"
        lightPrimary
        onClick={() => {
          setSubmitted(false);
          dispatch(clearState());
        }}
      />
    </SuccessContainer>
  ) : (
    <Container onSubmit={handleSubmit}>
      <h4>Submit a new ticket</h4>
      <div className="input_group">
        <p>Subject</p>
        <InputField
          fieldname="subject"
          onTextChange={handleChange}
          placeholder="Subject"
        />
        {submitted && !subject && (
          <p className="error-msg">Subject is required</p>
        )}
      </div>
      <div className="input_group">
        <p>Message</p>
        <TextArea
          fieldname="message"
          onTextChange={handleChange}
          placeholder="Type your issue here"
        />
        {submitted && !message && (
          <p className="error-msg">Subject is required</p>
        )}
      </div>
      <div className="input_group">
        <p>Attachment (optional)</p>
        <input type="file" />
      </div>
      {error && <p className="error-msg">{errors}</p>}
      <Button loading={loading} text="Submit" primary />
    </Container>
  );
};

export default NewTicket;

const Container = styled.form`
  width: 50%;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h4 {
    font-weight: bold;
    margin-bottom: 0.5rem !important;
    text-align: left;

    @media screen and (min-width: 768px) {
      margin-bottom: 0rem !important;
    }
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

const SuccessContainer = styled.div`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h3 {
    color: #28d1ff;
    font-weight: 600;
  }
  p {
    width: 80%;
    text-align: center;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
