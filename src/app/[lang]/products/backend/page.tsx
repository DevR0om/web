import ProdutsKey from "@/components/ProductsKey";
import { getTranslation } from "../../../../../locales/utils/getTranslation";
interface backendProps{
    params: any
}

export default async function backend({params}: backendProps){
    const lang = await getTranslation(params.lang);
    
    const titleMain = lang.products.backend.title;
    const title = lang.products.backend.details.plan.title;
    const subTitle = lang.products.backend.details.plan.subTitle;
    const value  = lang.products.backend.details.plan.value;
    const coin = lang.products.coin;
    const select = lang.products.select;
    const utils = lang.products.backend.details.plan.utils
    const buttonLang = lang.products.mobile.descriptionSubTitle;
    const textDescription  = lang.products.backend.descriptionText;
    const descriptionTitle = lang.products.backend.descriptionTitle;
    const imgPath = "https://media.licdn.com/dms/image/D4D12AQEEOn3UUZChTQ/article-cover_image-shrink_600_2000/0/1683886974594?e=2147483647&v=beta&t=Rovt9GPTKuzjCqRQrtiKbNwB3axfkR3hN8IBRphjwE8";

    return(
        <div>
            <ProdutsKey 
                lang={lang}
                title={title} 
                titleMain={titleMain} 
                select={select} 
                subTitles={Object.values(subTitle)} 
                values={Object.values(value)} 
                coin={coin} 
                utils={Object.values(utils)} 
                buttonLang={buttonLang} 
                textDescription={textDescription} 
                descriptionTitle={descriptionTitle}    
                imgPath={imgPath}        
                />
        </div>
    )
}