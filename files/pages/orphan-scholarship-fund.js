import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CallToAction from '../components/CallToAction';
import FarmingIncomeGen from '../components/FarmingIncomeGen';
import OrphanScholarFund from '../components/OrphanScholarFund';

const OrphanScholarshipFundPage = () => {
    return (
        <Layout pageTitle="PBTC | Orphan Children Scholarship Fund">
            <NavOne />
            <PageHeader title="Orphan Children Scholarship Fund" />
            <OrphanScholarFund />
            <CallToAction />
            <Footer />
        </Layout>
    );
};

export default OrphanScholarshipFundPage;
