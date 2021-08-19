import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import NonprofitPartnersArea from '../components/NonprofitPartnersArea';
import NonprofitShowcase from '../components/NonprofitShowcase';
import NonprofitFaq from '../components/NonprofitFaq';

const NonprofitPartners = () => {
    return (
        <Layout pageTitle="PBTC | Nonprofit Partners">
            <NavOne />
            <PageHeader title="Nonprofit Partners" />
            <NonprofitPartnersArea />
            <NonprofitShowcase />
            <NonprofitFaq />
            <CallToAction />
            <Footer />
        </Layout>
    );
};

export default NonprofitPartners;
