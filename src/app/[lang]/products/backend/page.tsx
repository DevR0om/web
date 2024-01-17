import ProdutsKey from "@/components/ProductsKey";
import { getTranslation } from "../../../../../locales/utils/getTranslation";
interface backendProps{
    params: any
}

export default async function backend({params}: backendProps){
    const lang = await getTranslation(params.lang)
    const title = lang.products.backend.details.plan.title;
    return(
        <div>
            <ProdutsKey 
                params={lang}
                title={title}
            />
        </div>
    )
}