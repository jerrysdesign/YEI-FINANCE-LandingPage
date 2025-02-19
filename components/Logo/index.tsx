import Link from "next/link";
import Image from "next/image";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <Link className={`block w-[11.875rem] ${className || ""}`} href="/">
        <Image
            src="/images/yei.svg"
            width={225}
            height={49}
            priority={true}
            alt="Yei Finance"
        />
    </Link>
);

export default Logo;
