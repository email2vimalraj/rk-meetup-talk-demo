import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM, DD YYYY")
          }
          html
          excerpt(format: HTML)
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(edge => (
        <div key={edge.node.id}>
          <h3>
            <Link to={`/post/${edge.node.fields.slug}`}>
              {edge.node.frontmatter.title}
            </Link>
          </h3>
          <span>{edge.node.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
          <hr />
        </div>
      ))}
    </Layout>
  );
};

export default Home;
