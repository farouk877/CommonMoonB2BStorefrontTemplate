import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import SliderOne from "../components/SliderOne";
import CampaignArea from "../components/CampaignArea";
import ServiceArea from "../components/ServiceArea";
import MixerArea from "../components/MixerArea";
import CallToAction from "../components/CallToAction";

import CallToActionTwo from "../components/CallToActionTwo";

import ExamplePaypal from '../components/ExamplePaypal';
import GoodPartners from '../components/GoodPartners';
import RaisingMoney from '../components/RaisingMoney';
import GraphOne from '../components/GraphOne';

const HomePage = () => {
    return (
        <Layout pageTitle="Project Break The Cycle - Sustainably Ending Poverty">
          <NavOne />
          <SliderOne />
          <ServiceArea />
          <GoodPartners />
          <CampaignArea />
          {/* <GraphOne /> */}
          <RaisingMoney />
          
          <CallToAction />
          <CallToActionTwo />
          <Footer />
        </Layout>
    );
};

export default HomePage;
