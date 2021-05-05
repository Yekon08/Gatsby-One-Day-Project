import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";

const Champion = (props) => {
  console.log("data: ", props);
  return (
    <Layout>
      <h1> {props.data.champions.name} </h1>
    </Layout>
  );
};

export const query = graphql`
  query($name: String) {
    champions(name: { eq: $name }) {
      name
    }
  }
`;

export default Champion;
