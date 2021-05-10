import React, { useState } from "react";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [champPerPage, setChampPerPage] = useState(15);

  const indexOfLastChamp = currentPage * champPerPage;
  const indexOfFirstChamp = indexOfLastChamp - champPerPage;
  const currentChamp = data.allChampions.edges.slice(
    indexOfFirstChamp,
    indexOfLastChamp
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(data.allChampions.edges.length / champPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        className={`m-3 rounded-lg p-2 cursor-pointer ${
          currentPage == number && "bg-blue-200"
        }`}
        key={number}
        id={number}
        onClick={(e) => setCurrentPage(e.target.id)}
      >
        {number}
      </li>
    );
  });

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="p-4 flex justify-center items-center flex-wrap">
        {currentChamp.map((champ) => {
          const image = getImage(champ.node.remoteImage);
          const url =
            "/champions/" + champ.node.name.replace(/\s+/g, "-").toLowerCase();
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
      <ul id="page-numbers" className="flex">
        {renderPageNumbers}
      </ul>
    </div>
  );
};
export default GetAllChamp;
