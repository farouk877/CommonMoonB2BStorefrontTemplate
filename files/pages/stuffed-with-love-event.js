import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsSingle from "../components/NewsSingle";
import OurOfficialRelaunchNews from '../components/OurOfficialRelaunchNews';
import SummaryJune2020 from '../components/SummaryJune2020';
import StuffedWithLove from '../components/StuffedWithLove';

const StuffedWithLoveEvent = () => {
    return (
        <Layout pageTitle="PBTC | Our Official Relaunch">
            <NavOne />
            <PageHeader title="Stuffed With Love Event" />
            <StuffedWithLove />
            <Footer />
        </Layout>
    );
};

export default StuffedWithLoveEvent;
