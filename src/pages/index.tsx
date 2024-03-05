import React from "react";
import { graphql, Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import * as styles from "../styles/index.module.css";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <Layout>
      <StaticImage
        src="../images/book.jpg"
        layout="fullWidth"
        style={{ maxHeight: "400px" }}
        placeholder="none"
        alt="gatsbyimage"
      />
      <section>
        <div>
          <ul className={styles.ul}>
            {data.allNewtArticle.edges.map((edge) => (
              <li key={edge.node._id}>
                <Link to={`/articles/${edge.node.slug}`}>
                  {edge.node.title}
                  <img src={edge.node.coverImage?.src!} alt="" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Newt・Gatsbyブログ</title>
    <meta name="description" content="NewtとGatsbyを利用したブログです" />
  </>
);

export const query = graphql`
  query IndexPage {
    allNewtArticle {
      edges {
        node {
          _id
          title
          slug
          coverImage {
            src
          }
        }
      }
    }
  }
`;
