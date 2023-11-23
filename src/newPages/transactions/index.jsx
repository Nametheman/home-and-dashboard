import React from "react";
// import { PagesLayout } from "../../layout";
import Layout from "../../layout/PagesLayout/Layout";
import Home from "./Home";
import styled from "styled-components";

const index = () => {
  return (
    <>
      <Layout children={<Home />} />
    </>
  );
};

export default index;
const Container = styled.div``;
