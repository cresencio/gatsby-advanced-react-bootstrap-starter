import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.scss";
import {Container} from 'react-bootstrap';
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <Container fluid>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {children}
      <Footer config={config} />
    </Container>
  );
}
