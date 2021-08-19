import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Artist from "../components/Artist";


const ArtistPage = () => {
    return (
        <Layout pageTitle="PBTC | Artist">
            <NavOne />
            <PageHeader title="Artist" />
            <Artist />
            <Footer />
        </Layout>
    );
};

export default ArtistPage;
