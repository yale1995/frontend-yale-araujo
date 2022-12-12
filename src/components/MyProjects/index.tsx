import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

import styles from "./projects.module.scss";

export function MyProjects() {

  return (
    <section className={styles.carouselContainer}>
      <Carousel
        className={styles.imageContainer}
        autoPlay
        centerMode
        infiniteLoop
        showIndicators={false}
        centerSlidePercentage={60}
      >
        <div>
          <Image
            height={350}
            width={700}
            src="/dashboard-1.png"
            alt="screen yale's project"
          />
        </div>
        <div>
          <Image
            height={350}
            width={700}
            src="/dashboard-2.png"
            alt="screen yale's project"
          />
        </div>
        <div>
          <Image
            height={350}
            width={700}
            src="/leadmark-1.png"
            alt="screen yale's project"
          />
        </div>
        <div>
          <Image
            height={350}
            width={700}
            src="/worldtrip-3.png"
            alt="screen yale's project"
          />
        </div>
        <div>
          <Image
            height={350}
            width={700}
            src="/leadmark-2.png"
            alt="screen yale's project"
          />
        </div>
        <div>
          <Image
            height={350}
            width={700}
            src="/protecao-1.png"
            alt="screen yale's project"
          />
        </div>
        <div>
          <Image
            height={350}
            width={700}
            src="/protecao-2.png"
            alt="screen yale's project"
          />
        </div>
        <div>
          <Image
            height={350}
            width={700}
            src="/rdp-1.png"
            alt="screen yale's project"
          />
        </div>
        <div>
          <Image
            height={350}
            width={700}
            src="/worldtrip-1.png"
            alt="screen yale's project"
          />
        </div>
        <div>
          <Image
            height={350}
            width={700}
            src="/worldtrip-2.png"
            alt="screen yale's project"
          />
        </div>
      </Carousel>
    </section>
  );
}
