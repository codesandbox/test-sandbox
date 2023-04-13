import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Index</h1>
      <Link href="/test">GO test</Link>
    </div>
  );
};

export default Index;
