import { useRef } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Section from "@/components/Section";
import Image from "@/components/Image";

import { whyYeiFinance } from "@/mocks/why-yei-finance";
import Arrows from "@/components/Arrows";

type WhyYeiFinanceProps = {};

const WhyYeiFinance = ({}: WhyYeiFinanceProps) => {
    const ref = useRef<any>(null);

    return (
        <Section
            className="py-10 md:pb-20 lg:pt-16 lg:pb-32 xl:pb-40 overflow-hidden"
            customPaddings
        >
            <div className="container relative z-2">
                <Splide
                    className="splide-custom splide-visible"
                    options={{
                        type: "fade",
                        rewind: true,
                        pagination: false,
                    }}
                    hasTrack={false}
                    ref={ref}
                >
                    <SplideTrack>
                        {whyYeiFinance.map((item) => (
                            <SplideSlide key={item.id}>
                                <div className="lg:flex mb-20" key={item.id}>
                                    <div className="lg:flex lg:flex-col lg:items-start lg:max-w-[18.75rem] lg:mr-auto">
                                        <h2 className="h2 mb-6">
                                            {item.title}
                                        </h2>
                                        <p className="body-2 mb-10 text-n-3">
                                            {item.text}
                                        </p>
                                    </div>
                                    <Arrows
                                        className="my-10 lg:hidden"
                                        prevClassName="mr-3"
                                        onPrev={() => ref.current?.go("<")}
                                        onNext={() => ref.current?.go(">")}
                                    />
                                    <div className="relative h-[27.5rem] border border-n-1/20 rounded-3xl md:rounded-[2.5rem] lg:flex-1 lg:max-w-[34.625rem] lg:h-[34.5rem] lg:ml-24 xl:h-[36rem]">
                                        <div className="absolute top-[8.5rem] -left-[2rem] w-[21rem] md:w-[25.25rem] md:top-[6.4rem] md:-left-[4.5rem] lg:top-[12rem] lg:-left-[3rem] xl:top-[7.625rem] xl:-left-[4.5rem] xl:w-[32.75rem]">
                                            <Image
                                                className="w-full"
                                                src={item.imageUrl}
                                                width={512}
                                                height={512}
                                                alt="Figure"
                                            />
                                        </div>
                                        <div className="hidden absolute top-0 left-full ml-5 w-full h-full bg-n-8/50 border border-n-1/10 rounded-[2.5rem] md:block"></div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                    <Arrows
                        className="hidden -mt-12 lg:flex"
                        prevClassName="mr-3"
                        onPrev={() => ref.current?.go("<")}
                        onNext={() => ref.current?.go(">")}
                    />
                </Splide>
            </div>
        </Section>
    );
};

export default WhyYeiFinance;
