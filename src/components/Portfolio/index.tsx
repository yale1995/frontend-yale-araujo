import styles from "./portfolio.module.scss";

import Image from "next/image";

import {MyProjects} from '../MyProjects'

export function Portfolio() {
  return (
    <section className={styles.portfolioContainer}>
      <h1>who trust my work</h1>
      <p>these brands carry a little bit of me on their products</p>
      <div className={styles.companiesContainer}>
        <Image
          width={180}
          height={180}
          alt="Logo from companies where I worked at"
          src="/protecao247.png"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <Image
          width={180}
          height={180}
          alt="Logo from companies where I worked at"
          src="/leadmark.png"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <Image
          width={180}
          height={180}
          alt="Logo from companies where I worked at"
          src="/worldtrip.png"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <Image
          width={180}
          height={180}
          alt="Logo from companies where I worked at"
          src="/rumoadefensoria.png"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <MyProjects/>
    </section>
  );
}
