"use client";

import React, { useEffect, useState } from "react";
import { myInfo } from "@/public/my-info";
import { Header } from "./_components/Header";
import AboutMe from "./_components/AboutMe";
import Skills from "./_components/Skills";
import Experices from "./_components/Experices";
import { usePathname } from "next/navigation";
import Publications from "./_components/Publications";
import Education from "./_components/Education";

const MainPage = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const [data, setData] = useState<Record<string, any>>({});
  useEffect(() => {
    if (pathname === "/") {
      setData(myInfo.EN);
    } else {
      setData(myInfo.ZH);
    }
  }, [pathname]);
  if (!mounted) return null;

  return (
    <>
      <Header
        fullName={data.Name}
        title={data.Title}
      />
      <AboutMe
        about={data.About}
        location={data.Location}
        email={data.Email}
        interests={data.Interests}
      />
      <Education edus={data.Education} />
      <Skills skills={data.Skills} />
      <Experices exps={data.Experience} />
      <Publications pubs={data.Publications} />
    </>
  );
};

export default MainPage;
