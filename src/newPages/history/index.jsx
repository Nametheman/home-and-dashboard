import React from "react";
// import { PagesLayout } from "../../layout";
import Layout from "../../layout/PagesLayout/Layout";
import History from "./History";
import styled from "styled-components";

const index = () => {
  return (
    <>
      <Layout children={<History />} />
    </>
  );
};

export default index;
const Container = styled.div``;
