/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import { BsEye, BsEyeSlashFill } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  .group {
    display: flex;
    align-items: center;
    position: relative;
    height: 2.5rem;

    .icon {
      position: absolute;
      right: 0;
      top: 0.9em;
      // transform: translateY(70%);
      margin-right: 1em;
      // width: 1rem;
      cursor: pointer;
      color: grey;
    }

    input {
      // background: transparent;
      border: 1px solid #999;
      padding: 0 3.5em 0 1em;
      height: 100%;
      border-radius: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 1em;
      letter-spacing: 0.018em;
      color: #000000;
      width: 100%;

      :focus {
        outline: none;
        border: 1px solid #bdbdbd;
      }

      @media screen and (max-width: 450px) {
        font-size: 0.8em;
      }
    }
  }
`;
const Index = ({
  inputType,
  placeholder,
  onTextChange,
  onKeyPress,
  fieldname,
  value,
  defaultValue,
  readOnly,
}) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Container>
      <div className="group">
        {inputType === "password" ? (
          togglePassword ? (
            <BsEye className="icon" onClick={() => setTogglePassword(false)} />
          ) : (
            <BsEyeSlashFill
              className="icon"
              onClick={() => setTogglePassword(true)}
            />
          )
        ) : (
          ""
        )}
        {inputType === "password" ? (
          <input
            name={fieldname}
            type={!togglePassword ? "password" : "text"}
            placeholder={placeholder}
            onChange={onTextChange}
          />
        ) : inputType === "number" ? (
          <input
            name={fieldname}
            type="number"
            placeholder={placeholder}
            onChange={onTextChange}
          />
        ) : (
          <input
            name={fieldname}
            type={inputType}
            placeholder={placeholder}
            onChange={onTextChange}
            onKeyPress={onKeyPress}
            value={value}
            defaultValue={defaultValue}
            readOnly={readOnly}
          />
        )}
      </div>
    </Container>
  );
};

export default Index;
