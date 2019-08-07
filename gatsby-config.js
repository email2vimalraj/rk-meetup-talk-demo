module.exports = {
  siteMetadata: {
    title: "Vimalraj Selvam"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data/`
      }
    },
    "gatsby-transformer-remark"
  ]
};
