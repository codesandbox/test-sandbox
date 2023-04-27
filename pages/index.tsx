import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Index</h1>
      <Link href="/test">GO test</Link>

      <div
        style={{
          background: "purple",
          height: "30px",
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
      />
    </div>
  );
};

export default Index;
