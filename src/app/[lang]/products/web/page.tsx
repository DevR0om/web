import ProdutsKey from "@/components/ProductsKey";
import { getTranslation } from "../../../../../locales/utils/getTranslation";

interface webProps {
  params: any;
}

export default async function Web({ params }: webProps) {
  const lang = await getTranslation(params.lang);
  const title = lang.products.web.details.plan.title;
  const subTitle = lang.products.web.details.plan.subTitle;
  const value  = lang.products.web.details.plan.value;
  const coin = lang.products.coin;
  const select = lang.products.select;
  const utils = lang.products.web.details.plan.utils

  return (
    <div>
      <ProdutsKey 
        select={select}
        title={title}
        subTitles={Object.values(subTitle)}
        values = {Object.values(value)}
        coin = {coin}
        utils = {Object.values(utils)}
      />
    </div>
  );
}
