import ProdutsKey from "@/components/ProductsKey";
import { getTranslation } from "../../../../../locales/utils/getTranslation";

interface mobileProps{
    params: any;
}

export default async function mobile({params}:mobileProps){
    const lang = await getTranslation(params.lang);
    const titleMain = lang.products.mobile.title;
    const title = lang.products.mobile.details.plan.title;
    const subTitle = lang.products.mobile.details.plan.subTitle;
    const value  = lang.products.mobile.details.plan.value;
    const coin = lang.products.coin;
    const select = lang.products.select;
    const utils = lang.products.mobile.details.plan.utils
    const buttonLang = lang.products.mobile.descriptionSubTitle;
    const textDescription  = lang.products.mobile.descriptionText;
    const descriptionTitle = lang.products.mobile.descriptionTitle;
    const imgPath = "https://cdn.sanity.io/images/s7xbv9bz/production/ca07a242e8ef6597980cef806c77a5abc1f96018-800x700.png?w=800&h=700&auto=format&fm=webp";
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