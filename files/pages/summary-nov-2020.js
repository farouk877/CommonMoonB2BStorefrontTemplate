import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import SummaryNov2020 from '../components/SummaryNov2020';

const SummaryNov2020Page = () => {
    return (
        <Layout pageTitle="PBTC | Summary of Events: Jul. 6, 2020- Oct. 31, 2020">
            <NavOne />
            <PageHeader title="Summary of Events: Jul. 6, 2020- Oct. 31, 2020" />
            <SummaryNov2020 />
            <Footer />
        </Layout>
    );
};

export default SummaryNov2020Page;
