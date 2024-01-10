import React from "react";
import { getTranslation } from "../../../locales/utils/getTranslation";
import NavBar from "@/components/Navbar";
import '../styles/global.scss';
interface pageProps {
  params: any;
}
async function Page({ params }: pageProps) {
  const lang = await getTranslation(params.lang);
  return (
    <div>
      <NavBar lang={lang}/>
    </div>
  );
}

export default Page;
