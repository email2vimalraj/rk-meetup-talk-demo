import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        <nav style={{ paddingTop: "20px" }}>
          <Link style={{ fontSize: "24px", paddingRight: "30px" }} to="/">
            Home
          </Link>
          <Link style={{ fontSize: "24px", paddingRight: "30px" }} to="/about">
            About
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <center>Copyrights &copy; reserved</center>
      </footer>
    </>
  );
};

export default Layout;
