import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutArea from "../components/AboutArea";
import AboutArea2 from "../components/AboutArea2";
import AboutArea3 from "../components/AboutArea3";

import MixerAreaTwo from "../components/MixerAreaTwo";
import CallToAction from "../components/CallToAction";
import TeamArea2 from "../components/TeamArea2";
import FaqArea from "../components/FaqArea";
import ServiceArea from "../components/ServiceArea";
import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="PBTC | About">
            <NavOne />
            <PageHeader title="About" />
            
            <AboutArea />
            <AboutArea2 />
            <AboutArea3 />
            <CallToAction />
            {/* <TeamArea2 /> */}
            {/* <FaqArea /> */}
            {/* <ServiceArea /> */}
            {/* <ClientsLogoTwo /> */}
            <Footer />
        </Layout>
    );
};

export default AboutPage;
