import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutArea from "../components/AboutArea";
import CorpRelationsDescription from "../components/CorpRelationsDescription";

import MixerAreaTwo from "../components/MixerAreaTwo";
import CallToAction from "../components/CallToAction";
import ServiceArea from "../components/ServiceArea";
import ClientsLogoTwo from "../components/ClientsLogoTwo";
import Footer from "../components/Footer";
import FaqAreaCorpRel from '../components/FaqAreaCorpRel';

const CorporateRelationsPage = () => {
    return (
        <Layout pageTitle="PBTC | Corporate Relations">
            <NavOne />
            <PageHeader title="Corporate Relations" />
            {/* <CorpRelationsDescription /> */}
            <FaqAreaCorpRel />
            {/* <ClientsLogoTwo /> */}
            <CallToAction />
            {/* <TeamArea2 /> */}
            {/* <ServiceArea /> */}
            <Footer />
        </Layout>
    );
};

export default CorporateRelationsPage;
