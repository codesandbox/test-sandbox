import type { NextPage } from "next";
import styles from "../st yles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hello CodeSandbox!</h1>
      <h2>This is Next.js</h2>
    </div>
  );
};

export default Home;
