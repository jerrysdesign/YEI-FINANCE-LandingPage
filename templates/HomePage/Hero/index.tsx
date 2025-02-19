import { useEffect, useRef, useState } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Generating from "@/components/Generating";
import PowerBy from "@/components/Power";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const parallaxRef = useRef<any>(null);

    return (
        <Section
            className="-mt-[4.75rem] pt-[8.25rem] pb-4 overflow-hidden md:pt-[9.75rem] md:pb-[4.8rem] lg:-mt-[5.25rem] lg:-mb-40 lg:pt-[12.25rem] lg:pb-[13.8rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
        >
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto mb-[3.875rem] text-center md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">
                        Custodial money market protocol on{" "}
                        <span className="inline-block relative">
                            Sei
                            <Image
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                src="/images/curve.png"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Optimize your investments across our platform.
                    </p>
                    <Button href="https://app.yei.finance" white>
                        Get started
                    </Button>
                </div>
                <div className="relative max-w-[23.25rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl">
                        <div className="relative">
                            <div className="aspect-[33/40] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <Image
                            className="w-full"
                            src="/images/hero/background.jpg"
                            width={1440}
                            height={1800}
                            quality={100}
                            alt="Hero"
                        />
                    </div>
                    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
                        <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <MouseParallax
                            strength={0.07}
                            parallaxContainerRef={parallaxRef}
                        >
                        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                            <div
                                className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                    mounted
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                }`}
                            ></div>
                        </div>
                        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                            <div
                                className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                    mounted
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                }`}
                            ></div>
                        </div>
                        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                            <div
                                className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
                                    mounted
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                }`}
                            ></div>
                        </div>
                        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                            <div
                                className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                    mounted
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                }`}
                            ></div>
                        </div>
                        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                            <div
                                className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                    mounted
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                }`}
                            ></div>
                        </div>
                        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                            <div
                                className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                    mounted
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                }`}
                            ></div>
                        </div>
                        </MouseParallax>
                    </div>
                </div>
                <PowerBy className="hidden relative z-10 mt-20 lg:block" />
            </div>
            <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block"></div>
            <svg
                className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block"
                width="11"
                height="11"
                fill="none"
            >
                <path
                    d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
                    fill="#ada8c4"
                />
            </svg>
            <svg
                className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block"
                width="11"
                height="11"
                fill="none"
            >
                <path
                    d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
                    fill="#ada8c4"
                />
            </svg>
        </Section>
    );
};

export default Hero;
