```
npm i -g gatsby-cli
mkdir my-blog
cd my-blog
npm init -y
npm i -S gatsby react react-dom
```

Add scripts:

```
"scripts": {
  "develop": "gatsby develop",
  "build": "gatsby build"
}
```

- Create home page `src/pages/index.js`
- Run `npm run develop`
- Add about page: `src/pages/about.js`
- Add layout component: `src/components/layout.js`
- Add nav links
- Attach layout component with the pages
- Intro `gatsby-config.js` - for site metadata, managing plugins
- Show the `useStaticQuery` hook to get the site title and add it in header
- Add the `gatsby-source-filesystem` plugin to read the markdown
- Show the `graphiql` interface to query the list of files from the `data`
- Add the `gatsby-transformer-remark` plugin to transform the markdown files
- Show the `graphiql` interface to query the transformed markdown files
- Add the `page query` in the home page to query the list of posts
- Now question how do we create dynamic pages
- Intro `gatsby-node.js` and showcase `onCreateNode` method
- Show creating a custom `slug` field in our `MarkdownRemark` type
- Using `createPages`, query the `allMarkdownRemark` for the `slug` field and create a dynamic page and passing slug in context to the page
- Create a template page `src/templates/post.js` and query the `allMarkdownRemark` with variable `slug`
- Deploy time!
- Install `now-cli` globally: `npm i -g now`
- Login to `now`: `now login`
- Deploy the project: `now`
