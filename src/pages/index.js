import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import GetAllChamp from "../components/GetAllChamp";

const IndexPage = () => {
  return (
    <Layout>
      <title>Hello World</title>
      <h1>Bonjour</h1>
      <GetAllChamp />
    </Layout>
  );
};

export default IndexPage;
