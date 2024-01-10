import React from "react";
import {getTranslation } from '../../../locales/utils/getTranslation'

interface pageProps {
  params: any;
}
async function Page({params}: pageProps) {
  const lang = await getTranslation(params.lang)
  return  <h1>{lang.hello}</h1>
}

export default Page;
