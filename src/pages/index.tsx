import type { NextPage } from "next";
import { Suspense } from "react";
import HomePageRoute from "./home-page.server";

const Home: NextPage = () => {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <HomePageRoute />
      </Suspense>
    </>
  );
};

export default Home;
