import React, { useRef } from "react";
import { FaChevronDown, FaPaperPlane } from "react-icons/fa";
import styled from "styled-components";
import SubjectBubble from "./SubjectBubble";
import ReplyBubble from "./ReplyBubble";
import { InputField } from "../../../../reusables";
import { useSelector, useDispatch } from "react-redux";
import {
  activeTicketSelector,
  handleReply,
  handleSetActiveTicket,
} from "../../../../redux/reducers/support/activeTicket";
import {
  // getTicket,
  replyTicket,
} from "../../../../redux/actions/support/activeTicket";

const TicketCard = (props) => {
  const dispatch = useDispatch();
  const { ticket } = useSelector(activeTicketSelector);
  const [expand, setExpand] = React.useState(false);
  let now = new Date();
  let startDate = new Date(props.createdAt);
  let diff = now - startDate;
  const user = JSON.parse(localStorage.getItem("user"));

  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current?.scrollIntoView();
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, []);

  const [reply, setReply] = React.useState({
    supportId: props?.supportId?.substring(1),
    sender: user?.name,
    message: "",
    createdAt: new Date(),
  });

  const { message } = reply;

  return (
    <Container status={props?.status}>
      <div
        onClick={() => {
          setExpand(!expand);
          dispatch(handleSetActiveTicket(props));
        }}
        className="header"
      >
        <h4>{props.supportId}</h4>
        <p>{props.subject}</p>
        <div className="time">{new Date(diff).getHours()}&nbsp;hrs ago</div>
        <FaChevronDown />
      </div>
      {expand && (
        <div className="body">
          <SubjectBubble {...props} />
          {ticket &&
            ticket?.replies?.map((reply, index) => {
              return <ReplyBubble key={index} {...reply} />;
            })}

          {props?.status === "ACTIVE" && (
            <div className="reply_btn_group">
              <InputField
                fieldname="message"
                onTextChange={(e) =>
                  setReply({ ...reply, message: e.target.value })
                }
                placeholder="Type a message"
                value={message}
              />
              {message && (
                <FaPaperPlane
                  className="icon"
                  onClick={() => {
                    dispatch(replyTicket(reply));
                    dispatch(handleReply(reply));
                    setReply({ ...reply, message: "" });
                  }}
                />
              )}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}
    </Container>
  );
};

export default TicketCard;

const Container = styled.div`
  width: 100%;
  background: #fff;
  margin-bottom: 0.5rem;

  .header {
    height: 40px;
    width: 100%;
    padding: 0 1rem;
    background: ${({ status }) => (status === "ACTIVE" ? "#28d1ff" : "#666")};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media screen and (max-width: 450px) {
      height: 60px;
      flex-wrap: wrap;

      h4 {
        font-size: 13px;
      }
    }

    @media screen and (max-width: 325px) {
      height: 80px;
      flex-wrap: wrap;

      h4 {
        font-size: 13px;
      }
    }

    p {
      font-size: 14px;
      font-weight: 600;
      text-transform: capitalize;

      @media screen and (max-width: 450px) {
        font-size: 12px;
      }
    }

    p,
    h4 {
      margin: 0 !important;
      padding: 0 !important;
      color: #fff !important;
    }

    .row_group {
      display: flex;
    }
  }

  .body {
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #28d1ff;
    padding: 1rem;
    min-height: 300px;
    max-height: 500px;
    text-align: left;

    .reply_btn_group {
      // position: absolute;
      // bottom: 1rem;
      display: grid;
      margin-top: 0.5rem;
      grid-template-columns: 5fr 0.5fr;
      gap: 1rem;
      width: 100%;
      color: #28d1ff;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 1.5rem;
        cursor: pointer;

        :hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
