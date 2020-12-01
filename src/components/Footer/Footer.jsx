import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.scss";
import { Row, Col, Button } from 'react-bootstrap';

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <Row as="footer" className="footer bg-dark text-white py-5">
      <Col sm={6}>
      <UserLinks config={config} labeled />
        <div className="notice-container">
          <h4>{copyright}</h4>

          <Button href={url}>
            Subscribe
          </Button>
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
