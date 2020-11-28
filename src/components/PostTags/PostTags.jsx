import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { Badge } from 'react-bootstrap';

function PostTags({ tags }) {
  return (
    <div className="post-tag-container">
      {tags ? "Tags: " : ''}
      {tags &&
        tags.map((tag) => (
          <Link
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/tags/${_.kebabCase(tag)}`}
          >
            <Badge pill variant="dark">
              {tag}
            </Badge>{' '}
          </Link>
        ))}
    </div>
  );
}

export default PostTags;
