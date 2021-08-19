import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CallToAction from '../components/CallToAction';
import LebanonReliefFund from '../components/LebanonReliefFund';

const LebanonRelief = () => {
    return (
        <Layout pageTitle="PBTC | Lebanon Relief Fund">
            <NavOne />
            <PageHeader title="Lebanon Relief Fund" />
            <LebanonReliefFund />
            <CallToAction />
            <Footer />
        </Layout>
    );
};

export default LebanonRelief;
