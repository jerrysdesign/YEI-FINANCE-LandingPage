"use client";

import Layout from "@/components/Layout";
import Hero from "./Hero";
import TotalNumber from "./TotalNumber";
import WhyYeiFinance from "./WhyYeiFinance";
import UseCases from "./UseCases";

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <TotalNumber />
            <WhyYeiFinance />
            <UseCases />
        </Layout>
    );
};

export default HomePage;
