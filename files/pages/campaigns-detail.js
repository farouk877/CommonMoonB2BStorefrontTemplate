import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CampaignDetail from '../components/CampaignDetail';

const CampaignPage = () => {
    return (
        <Layout pageTitle="PBTC | Campaign Detail">
            <NavOne />
            <PageHeader title="Campaign Detail" />
            <CampaignDetail />
            <Footer />
        </Layout>
    );
};

export default CampaignPage;
