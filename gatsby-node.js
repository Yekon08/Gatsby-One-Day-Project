const fetch = require("node-fetch");
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

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

exports.onCreateNode = async ({
  node, // the node that was just created
  actions: { createNode },
  createNodeId,
  getCache,
}) => {
  const POST_NODE_TYPE = `Champions`;
  // console.log("data: ", node);
  if (node.internal.type === POST_NODE_TYPE) {
    const urlChamp = `http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${node.image.full}`;
    const fileNode = await createRemoteFileNode({
      // the url of the remote image to generate a node for
      url: urlChamp,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });
    if (fileNode) {
      node.remoteImage___NODE = fileNode.id;
    }
  }
};
