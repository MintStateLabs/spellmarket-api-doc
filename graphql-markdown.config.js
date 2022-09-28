module.exports = {
  schema: "schema/fullSchema.graphql",
  rootPath: "./docs",
  baseURL: "/",
  homepage: "static/index.md",
  loaders: {
    UrlLoader: "@graphql-tools/url-loader"
  },
  docOptions: {
    pagination: true, // disable buttons previous and next, same as cli flag --noPagination
    toc: true, // disable page table of content, same as cli flag --noToc
    index: true, // enable generated index pages, same as cli flag --index
  }
};
