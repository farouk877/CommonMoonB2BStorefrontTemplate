import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";
import OurOfficialRelaunchNews from '../components/OurOfficialRelaunchNews';

const OurOfficialRelaunchPage = () => {
    return (
        <Layout pageTitle="PBTC | Our Official Relaunch">
            <NavOne />
            <PageHeader title="Our Official Relaunch" />
            <OurOfficialRelaunchNews />
            <Footer />
        </Layout>
    );
};

export default OurOfficialRelaunchPage;
