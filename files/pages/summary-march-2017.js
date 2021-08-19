import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";
import OurOfficialRelaunchNews from '../components/OurOfficialRelaunchNews';
import SummaryMarch2017 from '../components/SummaryMarch2017';

const SummaryMarch2017Page = () => {
    return (
        <Layout pageTitle="PBTC | Summary of Events: Dec. 26, 2016 - Mar. 29, 2017">
            <NavOne />
            <PageHeader title="Summary of Events: Dec. 26, 2016 - Mar. 29, 2017" />
            <SummaryMarch2017 />
            <Footer />
        </Layout>
    );
};

export default SummaryMarch2017Page;
