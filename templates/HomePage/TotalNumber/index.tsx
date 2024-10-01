import Link from "next/link";
import Section from "@/components/Section";
import Image from "@/components/Image";
import Heading from "@/components/Heading";
import TotalNumberList from "@/components/TotalNumberList";

type TotalNumberProps = {};

const TotalNumber = ({}: TotalNumberProps) => {
    return (
        <Section className="overflow-hidden">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <div className="absolute top-1/2 left-1/2 w-[59.5rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <Image
                            className="w-full"
                            src="/images/total/stars.svg"
                            width={952}
                            height={396}
                            alt="Stars"
                        />
                    </div>
                </div>
                <Heading
                    tag=""
                    title="Total Number"
                />
                <div className="relative">
                    <TotalNumberList />
                    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                        <Image
                            className="w-full"
                            src="/images/total/lines.svg"
                            width={1480}
                            height={177}
                            alt="Lines"
                        />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                        <Image
                            className="w-full"
                            src="/images/total/lines.svg"
                            width={1480}
                            height={177}
                            alt="Lines"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TotalNumber;
