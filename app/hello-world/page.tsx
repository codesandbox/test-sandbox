"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();

  return (
    <div>
      <Link href="/">Back</Link>

      <h1>Cat fact</h1>
      <button
        onClick={() => {
          fetch("https://catfact.ninja/fact").then(async (data) => {
            const foo = await data.json();
            console.log(foo);
            setData(foo.fact);
          });
        }}
      >
        Load
      </button>

      <p>{data}</p>
    </div>
  );
};

export default App;
