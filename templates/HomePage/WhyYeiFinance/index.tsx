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
                                <div className="relative lg:flex" key={item.id}>
                                    <div className="z-1 lg:flex lg:flex-col lg:items-start lg:max-w-[18.75rem] lg:mr-auto">
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
                                    <div className="z-0 relative h-[27.5rem] lg:flex-1 lg:max-w-[34.625rem] lg:h-[34.5rem] lg:ml-24 xl:h-[36rem] md:overflow-hidden lg:overflow-visible">
                                        <div className="z-20 absolute top-[2.5rem] -left-[1rem] w-[21rem] md:w-[25.25rem] md:top-[1.4rem] md:left-[12rem] lg:top-[6rem] lg:-left-[3rem] xl:top-[1.625rem] xl:-left-[4.5rem] xl:w-[32.75rem]">
                                            <Image
                                                className="w-full"
                                                src={item.imageUrl}
                                                width={512}
                                                height={512}
                                                alt="Figure"
                                            />
                                        </div>
                                        <div className="z-10 relative h-[27.5rem] border border-n-1/20 rounded-3xl md:rounded-[2.5rem] lg:max-w-[34.625rem] lg:h-[34.5rem] lg:ml-24 xl:h-[36rem]"></div>
                                        <div className="z-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%]">
                                            <Image
                                                className="w-full"
                                                src="/images/why-yei/gradient.jpg"
                                                width={905}
                                                height={905}
                                                quality={100}
                                                alt="bg"
                                            />
                                        </div>
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
