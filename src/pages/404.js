import React from 'react'
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

export default () => {
    return (
        <Layout>
            <div className="page-container">
                <Helmet title={`Page Not Found | ${config.siteTitle}`} />
                <h1>Sorry, that page was not found.</h1>
            </div>
        </Layout>
    )
}
