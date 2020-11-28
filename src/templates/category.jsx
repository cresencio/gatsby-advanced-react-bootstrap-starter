import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import { Row, Col, Jumbotron } from 'react-bootstrap';

export default function CategoryTemplate({ pageContext, data }) {
  const { category } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Row>
        <Col>
          <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <Row>
            <Col className="px-0">
              <Jumbotron>
                <h1>Posts in category: {category}</h1>
              </Jumbotron>
            </Col>
          </Row>
          <PostListing postEdges={postEdges} />
        </Col>
      </Row>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
