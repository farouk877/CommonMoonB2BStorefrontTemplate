import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";
import OurOfficialRelaunchNews from '../components/OurOfficialRelaunchNews';
import SummaryJune2020 from '../components/SummaryJune2020';

const SummaryJune2020Page = () => {
    return (
        <Layout pageTitle="PBTC | Summary of Events: Jun 1, 2017 - Jun 1, 2020">
            <NavOne />
            <PageHeader title="Summary of Events: Jun 1, 2017 - Jun 1, 2020" />
            <SummaryJune2020 />
            <Footer />
        </Layout>
    );
};

export default SummaryJune2020Page;
