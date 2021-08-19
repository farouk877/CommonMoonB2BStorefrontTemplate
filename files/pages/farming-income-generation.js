import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import CommonMoonHeader from "../components/CommonMoonHeader";
import Footer from "../components/Footer";
import CallToAction from '../components/CallToAction';
import FarmingIncomeGenCM from '../components/FarmingIncomeGenCM';
import FooterCM from "../components/FooterCM";

const FarmingIncomeGenerationPage = () => {
    return (
        <Layout pageTitle="PBTC | Income Generation Farming Project">
            <NavOne />
            <CommonMoonHeader title="Income Generation Farming Project" />
            <FarmingIncomeGenCM />
            {/* <CallToAction /> */}
            <FooterCM />
            {/* <Footer /> */}
        </Layout>
    );
};

export default FarmingIncomeGenerationPage;
