import React from "react";
import {getTranslation } from '../../../locales/utils/getTranslation'
import  Home from '../../components/Home';

interface pageProps {
  params: any;
}
async function Page({params}: pageProps) {
  const lang = await getTranslation(params.lang)
  return  <Home />
}

export default Page;
