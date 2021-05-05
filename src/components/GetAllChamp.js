import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

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
  return (
    <div className="flex justify-center items-center flex-wrap">
      {data.allChampions.edges.map((champ) => {
        const image = getImage(champ.node.remoteImage);
        const url =
          "/champions/" + champ.node.name.replace(/\s+/g, "-").toLowerCase();
        console.log("url: ", url);
        return (
          <div
            key={champ.node.id}
            className="p-4 m-4 shadow-md rounded-md flex justify-center items-center"
          >
            <GatsbyImage
              image={image}
              alt={champ.node.name}
              placeholder="blurred"
              className="rounded-md"
            />
            <div className="ml-2">
              <h3 className="text-lg font-bold">{champ.node.name}</h3>
              <Link className="cursor-pointer" to={url}>
                En savoir plus
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default GetAllChamp;
