const fetch = require("node-fetch");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;
  const res = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json"
  );
  const champions = await res.json();
  Object.values(champions.data).forEach((champion) => {
    const nodeContent = JSON.stringify(champion);
    const nodeMeta = {
      id: createNodeId(`my-data-${champion.name}`),
      parent: null,
      children: [],
      internal: {
        type: `Champions`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(champion),
      },
    };
    const node = Object.assign({}, champion, nodeMeta);
    createNode(node);
  });
};
