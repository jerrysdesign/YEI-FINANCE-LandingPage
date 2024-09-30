import Image from "@/components/Image";

type LogosProps = {
    className?: string;
};

const Logos = ({ className }: LogosProps) => (
    <div className={className}>
        <h5 className="tagline mb-6 text-center text-n-1/50">
            POWER BY
        </h5>
        <ul className="flex">
            <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                <Image
                    src="/images/logos/sei-logo.svg"
                    width={134}
                    height={61}
                    alt="sei"
                />
            </li>
        </ul>
    </div>
);

export default Logos;
