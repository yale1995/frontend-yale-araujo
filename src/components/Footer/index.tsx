import styles from "./footer.module.scss";

import {} from "react";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <a>do you wanna hire me?</a>
      <a
        onClick={() =>
          window.alert(
            "Sorry about that. I don't have enough time and patience to create a super duper animated personal page. I built this in 5 mins or less."
          )
        }
      >
        why is my website so simple?
      </a>
    </footer>
  );
}
