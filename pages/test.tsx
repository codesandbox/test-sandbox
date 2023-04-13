import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const TestPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Test</h1>
      <Link href="/">GO home</Link>
    </div>
  );
};

export default TestPage;
