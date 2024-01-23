import React from "react";
import {getTranslation } from '../../../locales/utils/getTranslation'
import NavBar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Projects from "@/components/Services";
import Footer from "../../components/Footer";

interface pageProps {
  params: any;
}
async function Page({params}: pageProps) {
  const lang = await getTranslation(params.lang)
  const backgroundColor = "var(--colors-neutral-50)"
  return (
  <div>
    <NavBar lang={lang} />
    <Main  lang={lang} id="main"/>
    <About lang={lang} id="about"/>
    <Projects lang={lang} id="services"/>
    <Footer lang={lang} background={backgroundColor} textColor="black" iconColor="black" id="contact"/>
  </div>
  )
}

export default Page;
