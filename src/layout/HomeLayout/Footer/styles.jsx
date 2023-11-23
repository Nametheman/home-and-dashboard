import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled.div`
  position: relative;
  top: 90px;
  width: 100%;
  background: #f5f7fc;
  color: #333;
  padding: 48px 150px;
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    padding: 48px 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 48px 36px;
  }

  @media screen and (max-width: 450px) {
    padding: 48px 16px;
  }
`;

export const ColumnGroupWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    margin-top: -15px;
    padding: 0;
    width: 150px;
    height: 80px;
    object-fit: contain;

    @media screen and (max-width: 450px) {
      width: 110px;
      height: 80px;
    }
  }

  .link,
  p {
    font-size: 1rem;
    color: #333 !important;
    text-decoration: none !important;

    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .title {
    font-weight: bold;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
      margin-bottom: 0.5em;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    gap: 0.75rem;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Copyright = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  font-weight: bold;
  padding-bottom: 1rem;
`;

export const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #28d1ff;
  color: #fff;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
