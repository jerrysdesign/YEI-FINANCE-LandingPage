import Image from "@/components/Image";

type LogosProps = {
    className?: string;
};

const Logos = ({ className }: LogosProps) => (
    <div className={className}>
        <h5 className="tagline mb-6 text-center text-n-1/50">
            Prtners
        </h5>
        <ul className="flex grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-1">
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/api3.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/betget-wallet.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/brahma.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/compass.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/debank.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/dragon-swap.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/jellyverse.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/pyth.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/redstone.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/seif.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/silo.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/stargate.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/yaka.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/woox.svg"
                    width={420}
                    height={150}
                    alt="Logo 3"
                />
            </li>
        </ul>
    </div>
);

export default Logos;
