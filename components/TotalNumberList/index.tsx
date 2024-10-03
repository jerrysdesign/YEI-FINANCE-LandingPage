import { useRef, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Button from "@/components/Button";
import Image from "@/components/Image";

import { totalNumber } from "@/mocks/total-number";

type TotalNumberListProps = {};

const TotalNumberList = ({}: TotalNumberListProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const ref = useRef<any>(null);

    const handleClick = (index: number) => {
        setActiveIndex(index);
        ref.current?.go(index);
    };

    return (
        <Splide
            className="splide-pricing splide-visible"
            options={{
                mediaQuery: "min",
                autoWidth: true,
                pagination: false,
                arrows: false,
                gap: "1rem",
                breakpoints: {
                    1024: {
                        destroy: true,
                    },
                },
            }}
            onMoved={(e, newIndex) => setActiveIndex(newIndex)}
            hasTrack={false}
            ref={ref}
        >
            <SplideTrack>
                {totalNumber.map((item, index) => (
                    <SplideSlide
                        className="y-3"
                        key={item.id}
                    >
                        <div
                            className={`w-[19rem] h-full px-6 py-8 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto`}
                            key={item.id}
                        >
                            <h4
                                className={`h4 mb-4 ${
                                    index === 0 ? "text-color-2" : ""} ${
                                    index === 1 ? "text-color-1" : ""} ${
                                    index === 2 ? "text-color-3" : ""
                                }`}
                            >
                                {item.title}
                            </h4>
                            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                                {item.description}
                            </p>
                            <div className="flex items-center h-[5.5rem] mb-2">
                                {item.data && (
                                    <>
                                        <div className="h3">$</div>
                                        <div className="text-[5.5rem] leading-none font-bold">
                                            {item.data}
                                        </div>
                                        <div className="h2 ml-2 text-n-5">
                                            {item.unit}
                                        </div>
                                    </>
                                )}
                            </div>
                            
                        </div>
                    </SplideSlide>
                ))}
            </SplideTrack>
            <div className="flex justify-center mt-8 -mx-2 md:mt-15 lg:hidden">
                {totalNumber.map((item, index) => (
                    <button
                        className="relative w-6 h-6 mx-2"
                        onClick={() => handleClick(index)}
                        key={item.id}
                    >
                        <span
                            className={`absolute inset-0 bg-conic-gradient rounded-full transition-opacity ${
                                index === activeIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        ></span>
                        <span className="absolute inset-0.25 bg-n-8 rounded-full">
                            <span className="absolute inset-2 bg-n-1 rounded-full"></span>
                        </span>
                    </button>
                ))}
            </div>
        </Splide>
    );
};

export default TotalNumberList;
