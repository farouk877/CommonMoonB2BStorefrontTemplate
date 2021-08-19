import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ItemsDetail from "../components/ShopDetail";

const ItemPage = () => {
    return (
        <Layout pageTitle="PBTC | Item Detail">
            <NavOne />
            <PageHeader title="Item Detail" />
            <ItemsDetail />
            <Footer />
        </Layout>
    );
};

export default ItemPage;
