import React from "react";
import styled, { css } from "styled-components";
// import { Spin } from 'antd';
// import { Loading3QuartersOutlined } from '@ant-design/icons';

const Button = ({
  text,
  loading,
  onClick,
  full,
  quarter,
  primary,
  muted,
  secondary,
  info,
  outline,
  lightPrimary,
  copy,
  light,
  type = "submit",
  disabled = false,
}) => {
  // const antIcon = (
  //   <Loading3QuartersOutlined style={{ fontSize: 24, color: '#fff' }} spin />
  // );
  return (
    <Container
      type={type ? type : ""}
      full={full ? full : undefined}
      primary={primary}
      lightPrimary={lightPrimary ? lightPrimary : undefined}
      copy={copy ? copy : undefined}
      info={info ? info : undefined}
      muted={muted ? muted : undefined}
      secondary={secondary ? secondary : undefined}
      outline={outline ? outline : undefined}
      light={light ? light : undefined}
      onClick={onClick}
      disabled={disabled ? disabled : loading ? true : false}
    >
      {loading ? (
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      ) : (
        text
      )}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  width: ${({ full }) => (full ? "100%" : "50%")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #fff;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  cursor: pointer;

  ${(props) => css`
    ${props.primary &&
    css`
      background: #28d1ff;
    `}
    ${props.lightPrimary &&
    css`
      color: #28d1ff;
      background-color: rgba(0, 82, 204, 0.1);

      :hover {
        color: #fff;
        background: #28d1ff;
      }
    `}
    ${props.muted &&
    css`
      background: #666;
      color: #fff;
    `}
    ${props.light &&
    css`
      background: #f4f4f4;
      color: #999999;

      :hover {
        color: #000000;
      }
    `}
    ${props.copy &&
    css`
      background: #28d1ff;
      color: #fff;
      border-radius: 0 5px 5px 0;
      margin-left: -5px;
      z-index: 2000;
    `}
    ${props.secondary &&
    css`
      background: #999999;
      color: #ffffff;
    `}
    ${props.info &&
    css`
      background: #455afe;
      color: #ffffff;
    `}
    ${props.outline &&
    css`
      border: 1px solid #455afe !important;
      background: transparent;
      color: #455afe;
    `}
  `}

  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.8;
  }
`;
