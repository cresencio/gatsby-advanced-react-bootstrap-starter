import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import { Row, Col, Jumbotron } from 'react-bootstrap';

export default function TagTemplate({ pageContext, data }) {
  const { tag } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="tag-container">
      <Row>
        <Col>
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
          <Row>
            <Col className="px-0">
              <Jumbotron>
                <h1>Posts in tag: {tag}</h1>
              </Jumbotron>
            </Col>
          </Row>
          <PostListing postEdges={postEdges} />
        </Col>
      </Row>
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
