import React from "react";
import {getTranslation } from '../../../locales/utils/getTranslation'
import NavBar from "@/components/Navbar";
import Main from "@/components/Main";

interface pageProps {
  params: any;
}
async function Page({params}: pageProps) {
  const lang = await getTranslation(params.lang)
  return <div>
    <NavBar lang={lang}/>
    <Main  lang={lang}/>
  </div>
}

export default Page;
