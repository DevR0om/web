import Image from "next/image"

interface imageUiProps{
    alt: string;
    path: string;
    width: number;
    height: number;
}
export default function ImageUi({alt, height, path, width}: imageUiProps){
    return(
        <Image 
        alt={alt}
        src={path}
        width={width}
        height={height}
        />
    )
}