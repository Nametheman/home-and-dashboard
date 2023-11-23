import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ onTextChange, full }) => (
  <SearchBar full={full ? full : undefined}>
    <form action="">
      <FaSearch className="icon" />
      <input
        type="text"
        placeholder="Search for keyword"
        onChange={onTextChange}
      />
    </form>
  </SearchBar>
);

const SearchBar = styled.div`
  position: relative;
  width: ${({ full }) => (full ? "100%" : "250px")};
  form {
    display: flex;
    align-items: center;
    position: relative;
    height: 2.5rem;

    .icon {
      position: absolute;
      top: 0.7em;
      right: 1em;
      // transfrom: translateX(-50%);
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      color: #28d1ff;

      :hover {
        transform: scale(1.1);
      }
    }

    input {
      background: #fff;
      border: 1px solid #bdbdbd;
      padding: 1em 3.5em 1em 1em;
      height: 100%;
      border-radius: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 0.9em;
      letter-spacing: 0.018em;
      color: #000000;
      width: 100%;

      :focus {
        outline: none;
        border: 1px solid #28d1ff;
      }
    }
  }
`;

export default Searchbar;
