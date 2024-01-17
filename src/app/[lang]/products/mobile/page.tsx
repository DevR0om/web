import ProdutsKey from "@/components/ProductsKey";
import { getTranslation } from "../../../../../locales/utils/getTranslation";

interface mobileProps{
    params: any;
}

export default async function mobile({params}:mobileProps){
    const lang = await getTranslation(params.lang)
    const title = lang.products.mobile.details.plan.title;
    return(
        <div>
            <ProdutsKey 
                params={lang}
                title={title}
            />
        </div>
    )
}