import { getTimestamp } from "../utils";

const fetchContent = (id: number): Promise<string> => {
  const randomTick = Math.random() * 5 * 1000 + 1000;
  return new Promise((r) =>
    setTimeout(
      () => r(`id: ${id}, request time: ${(randomTick / 1000).toFixed(2)} sec`),
      randomTick
    )
  );
};

export function ItemLoading() {
  return <div>item loading...</div>;
}

export default async function Item({ id }: { id: number }) {
  const content = await fetchContent(id);
  return (
    <div style={{ padding: 8 }}>
      <div>
        Item / {content} (RSC: {getTimestamp()})
      </div>
    </div>
  );
}
