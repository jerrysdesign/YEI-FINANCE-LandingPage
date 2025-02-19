import Image from "../Image";

type GeneratingProps = {
    className?: string;
};

const Generating = ({ className }: GeneratingProps) => (
    <div
        className={`flex items-center h-[3.375rem] px-6 bg-n-8/80 rounded-[1.6875rem] ${
            className || ""
        } text-base`}
    >
        <Image
            className="w-5 h-5 mr-4 animate-spin"
            src="/images/loading.png"
            width={20}
            height={20}
            alt="Loading"
        />
        I am Yeida, I will illuminate every soul lost in the DeFi universe|
    </div>
);

export default Generating;
