import Image from "next/image";
const imagePath = 'https://i.ibb.co/Bc4KjTB/logo.webp';

interface logoProps{
    width:number;
    height: number;
    alt:string;
    priority: boolean;
}

export default function LogoUi({width, height, alt, priority}:logoProps) {
    return (
        <Image
            src={imagePath}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
        />
    )
}