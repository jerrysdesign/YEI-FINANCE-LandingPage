"use client";

import Layout from "@/components/Layout";
import Hero from "./Hero";
import TotalNumber from "./TotalNumber";
import WhyYeiFinance from "./WhyYeiFinance";
import UseCases from "./UseCases";
import Partners from "./Partners";
import Join from "@/components/Join";

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <TotalNumber />
            <WhyYeiFinance />
            <UseCases />
            <Partners />
            <Join />
        </Layout>
    );
};

export default HomePage;
