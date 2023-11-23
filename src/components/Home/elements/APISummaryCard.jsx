import React from "react";
import { TopRated } from "../../../assets/icons/APIListIcons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const APISummaryCard = (props) => {
  const Navigate = useNavigate();
  const handleSelect = () => {
    localStorage.setItem("selectedService", JSON.stringify(props));
    Navigate(`/api/details/${props?.name.toLowerCase()}`);
  };
  return (
    <Container onClick={handleSelect}>
      <div className="text__group">
        <div className="title__group">
          <h4>{props?.name}</h4>
          <img src={TopRated} alt="Icon" />
        </div>
        <div className="tag">{props?.category}</div>
        <div className="note">{props?.description}...</div>
      </div>
    </Container>
  );
};

export default APISummaryCard;

const Container = styled.div`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid #677788;
  border-radius: 5px;
  display: flex;
  gap: 0.6rem;
  // height: 175px;
  cursor: pointer;

  :hover {
    border: 1px solid #28d1ff;
  }

  .icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  .tag {
    border-radius: 5px;
    max-width: 150px;
    background: #0052cc0a;
    color: #28d1ff;
    display: flex;
    align-items: center;
    padding: 0.25em 2em;
    font-weight: 500;
    font-size: 14px;
  }

  .text__group {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    .note {
      color: silver;
    }

    .sub-title {
      color: #000;
    }

    .title__group {
      display: flex;
      align-items: center;
      gap: 1rem;

      h4 {
        font-size: 22px;
        font-weight: 600;
        margin: 0 !important;
        padding: 0 !important;
        color: #000;
        text-transform: capitalize;

        @media screen and (max-width: 425px) {
          font-size: 16px;
        }
      }

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
