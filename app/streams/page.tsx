import { Suspense } from "react";
import Link from "next/link";

import { getTimestamp } from "../utils";
import Item, { ItemLoading } from "./Item";

const fetchList = (): Promise<number[]> =>
  new Promise((r) => setTimeout(() => r([0, 1, 2, 3, 4]), 1000));

// CAUTION
// You cannot see the streaming working feature because of codesandbox issue(or limitation)
// Please run it your local environment if you'd like to confirm full behavior
// You can see a video in https://twitter.com/t6adev/status/1632968577132417029

export default async function Streams() {
  const list = await fetchList();
  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        This is Streams page. (RSC: {getTimestamp()})
      </div>
      {list.map((id) => (
        <Suspense key={id} fallback={<ItemLoading />}>
          {/* @ts-expect-error Async Server Component */}
          <Item id={id} />
        </Suspense>
      ))}
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
