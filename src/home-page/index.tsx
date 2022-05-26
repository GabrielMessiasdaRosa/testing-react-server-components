import React, { Suspense } from "react";
import { Column } from "../components/box";
import Button from "../components/button.client";
export type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <Column>
      <p>You clicked zero times</p>
      <Suspense fallback={"Loading..."}>
        <Button onClick={() => console.log("CLICK!")}>Click me</Button>
      </Suspense>
    </Column>
  );
};

export default HomePage;
