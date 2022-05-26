import type { NextPage } from "next";
import { Suspense } from "react";
import HomePage from "../home-page";

export type HomePageRouteProps = {};

const HomePageRoute: NextPage = ({}: HomePageRouteProps) => {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <HomePage />;
      </Suspense>
    </>
  );
};
export default HomePageRoute;
