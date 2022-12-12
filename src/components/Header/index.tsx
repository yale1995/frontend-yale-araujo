import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1>I am Yale Araújo</h1>
      <p>
        frontend developer{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="http://leadmark.com.br"
        >
          @leadmark
        </a>
      </p>
    </header>
  );
}
