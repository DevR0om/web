import ProdutsKey from "@/components/ProductsKey";
import { getTranslation } from "../../../../../locales/utils/getTranslation";

interface webProps {
  params: any;
}

export default async function Web({ params }: webProps) {
  const lang = await getTranslation(params.lang);
  const titleMain = lang.products.web.title;
  const title = lang.products.web.details.plan.title;
  const subTitle = lang.products.web.details.plan.subTitle;
  const value  = lang.products.web.details.plan.value;
  const coin = lang.products.coin;
  const select = lang.products.select;
  const utils = lang.products.web.details.plan.utils
  const buttonLang = lang.products.web.descriptionSubTitle;
  const textDescription  = lang.products.web.descriptionText;
  const descriptionTitle = lang.products.web.descriptionTitle;
  const imgPath = "https://freepngimg.com/thumb/web_development/3-2-web-development-png-hd.png";
  return (
    <div>
      <ProdutsKey 
        lang={lang}
        titleMain={titleMain}
        select={select}
        title={title}
        subTitles={Object.values(subTitle)}
        values = {Object.values(value)}
        coin = {coin}
        utils = {Object.values(utils)}
        buttonLang = {buttonLang}
        textDescription = { textDescription }
        descriptionTitle = { descriptionTitle }
        imgPath = {imgPath}
      />
    </div>
  );
}
