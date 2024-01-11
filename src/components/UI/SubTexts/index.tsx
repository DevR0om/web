
interface SubTextsProps{
    colorText: string;
    fontSize: string;
    family: string;
    text:string;
}
export default function SubTexts({colorText, family, fontSize, text}: SubTextsProps){
    return(
        <h2  style={{ color: colorText, fontSize, fontFamily: family }}>
            {text}
        </h2>
    )
}