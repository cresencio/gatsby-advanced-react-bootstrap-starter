import React from "react";
import { Link } from "gatsby";
import { ListGroup } from 'react-bootstrap';

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return (
    <ListGroup variant="flush">
      {
        /* Your post list here. */
        postList.map((post) => (
          <ListGroup.Item>
            <Link to={post.path} key={post.title}>
              <h1>{post.title}</h1>
            </Link>
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  );
}

export default PostListing;
