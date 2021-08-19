import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Donate from "../components/Donate";
import ExamplePaypal from '../components/ExamplePaypal';
import Pricing from '../components/Pricing';

const DonatePage = () => {
    return (
        <Layout pageTitle="PBTC | Donate">
            <NavOne />
            <PageHeader title="Donate" />
            <Donate />
            <Footer />
        </Layout>
    );
};

export default DonatePage;
