import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Campaign from '../components/Campaign';

const CampaignPage = () => {
    return (
        <Layout pageTitle="PBTC | Campaigns">
            <NavOne />
            <PageHeader title="Campaigns" />
            <Campaign />
            <Footer />
        </Layout>
    );
};

export default CampaignPage;
