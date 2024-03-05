import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout";

const ArticlePage = ({ data }: PageProps<Queries.ArticlePageQuery>) => {
  return (
    <Layout>
      <section>
        <div>
          <img src={data.newtArticle?.coverImage?.src!} alt="" />
          <h2>{data.newtArticle?.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: data.newtArticle?.body + "" }}
          />
        </div>
      </section>
    </Layout>
  );
};

export default ArticlePage;

export const Head: HeadFC<Queries.ArticlePageQuery> = ({ data }) => (
  <>
    <title>{data.newtArticle?.title}</title>
    <meta name="description" content="投稿詳細ページです" />
  </>
);

export const query = graphql`
  query ArticlePage($id: String) {
    newtArticle(id: { eq: $id }) {
      title
      body
      coverImage {
        src
      }
    }
  }
`;
