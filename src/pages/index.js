import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import GetAllChamp from "../components/GetAllChamp";

const IndexPage = () => {
  return (
    <Layout>
      <title>Home</title>
      <h1 className="font-bold text-2xl">Tous les champions</h1>
      <GetAllChamp />
    </Layout>
  );
};

export default IndexPage;
