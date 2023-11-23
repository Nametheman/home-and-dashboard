import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  serviceTabSelector,
  handleActiveTab,
} from "../../../redux/reducers/services/serviceTab";

const Tab = (props) => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector(serviceTabSelector);

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
  position: relative;
  width: 100%;
  max-height: 50px;
  background: transparent;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0 0.5rem 1rem;
  color: #28d1ff;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  text-transform: capitalize;

  .indicator {
    position: absolute;
    right: 5px;
    background: #e24307;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    padding: 0.15em 0.5em;
    border-radius: 50%;
    color: #fff;
    font-weight: 600;
  }

  @media screen and (max-width: 425px) {
    font-size: 0.9rem;
    font-weight: 400;
    padding-left: 0.5em;
  }
`;
