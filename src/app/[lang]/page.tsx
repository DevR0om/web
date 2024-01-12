import React from "react";
import {getTranslation } from '../../../locales/utils/getTranslation'
import NavBar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";

interface pageProps {
  params: any;
}
async function Page({params}: pageProps) {
  const lang = await getTranslation(params.lang)
  return <div>
    <NavBar lang={lang}/>
    <Main  lang={lang}/>
    <About lang={lang}/>
    <Projects lang={lang}/>
  </div>
}

export default Page;
