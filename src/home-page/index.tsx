import React, { Suspense, useState } from "react";
import { Column } from "../components/box";
import Button from "../components/button.client";
export type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  const [count, setCount] = useState(0);
  return (
    <Column>
      <p>You clicked {count} times</p>
      <Suspense fallback={"Loading..."}>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </Suspense>
    </Column>
  );
};

export default HomePage;
