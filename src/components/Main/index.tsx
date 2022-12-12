import styles from "./main.module.scss";

import Image from "next/image";

export function Main() {
  return (
    <main className={styles.mainContainer}>
      <Image
        src="/yale.jpg"
        alt="yale photo into morumbi stadium"
        width={500}
        height={500}
      />

      <div className={styles.paragraphContainer}>
        <p>
          I am a Brazillian developer that loves solve problems using
          technology. 🤓
        </p>
        <p>
          I am specialized in e-commerces-related and mobile applications
          development. 🤑
        </p>
      </div>
    </main>
  );
}
