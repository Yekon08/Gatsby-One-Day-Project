import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GetAllChamp = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allChampions {
        edges {
          node {
            name
            id
            remoteImage {
              childImageSharp {
                gatsbyImageData(width: 50, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);
  return (
    <>
      {data.allChampions.edges.map((champ) => {
        const image = getImage(champ.node.remoteImage);
        return (
          <div key={champ.node.id}>
            <h3>{champ.node.name}</h3>
            <GatsbyImage image={image} />
          </div>
        );
      })}
    </>
  );
};
export default GetAllChamp;
