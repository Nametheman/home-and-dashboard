import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleActiveTab } from "../../../../redux/reducers/support/supportTab";
import { supportTabSelector } from "../../../../redux/reducers/support/supportTab";
import { useSelector } from "react-redux";

const Tab = (props) => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector(supportTabSelector);

  return (
    <Container
      className={activeTab === props?.name ? "active" : ""}
      onClick={() => dispatch(handleActiveTab(props.name))}
    >
      {props.icon}
      {props.name}
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  width: 100%;
  max-height: 50px;
  background: transparent;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0 0.5rem 2rem;
  color: #28d1ff;
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: capitalize;

  @media screen and (max-width: 425px) {
    font-size: 0.9rem;
    font-weight: 400;
    padding-left: 0.5em;
  }
`;
