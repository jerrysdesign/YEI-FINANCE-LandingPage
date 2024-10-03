import Image from "@/components/Image";

type PowerByProps = {
    className?: string;
};

const PowerBy = ({ className }: PowerByProps) => (
    <div className={className}>
        <h5 className="tagline mb-6 text-center text-n-1/50">POWER BY</h5>
        <ul className="flex">
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/prtners/sei-logo.svg"
                    width={134}
                    height={61}
                    alt="sei"
                />
            </li>
        </ul>
    </div>
);

export default PowerBy;
