interface TitleProps {
    colorText: string;
    fontSize: string;
    family: string;
    text:string;
}

export default function TitleText({ colorText, fontSize, family, text }: TitleProps) {

    return (
        <h1 style={{ color: colorText, fontSize, fontFamily: family }}>
            {text}
        </h1>
    );
}
