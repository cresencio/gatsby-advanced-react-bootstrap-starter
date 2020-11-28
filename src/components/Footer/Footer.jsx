import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.scss";
import { Row, Col } from 'react-bootstrap';

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <Row as="footer" className="footer bg-dark text-white">
      <Col sm={6}>
      <UserLinks config={config} labeled />
        <div className="notice-container">
          <h4>{copyright}</h4>

          <Link to={url}>
            <button type="button">Subscribe</button>
          </Link>
          <h4>
            Based on{" "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
            .
          </h4>
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
