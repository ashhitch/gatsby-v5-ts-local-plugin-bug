// constants for your GraphQL Post and Author types
const POST_NODE_TYPE = `Post`;

export const sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType
}) => {
  const { createNode } = actions;

  const data = {
    posts: [
      { id: 1, description: `Hello world!` },
      { id: 2, description: `Second post!` }
    ]
  };

  // loop through data and create Gatsby nodes
  data.posts.forEach((post) =>
    createNode({
      ...post,
      id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        contentDigest: createContentDigest(post)
      }
    })
  );

  return;
};
