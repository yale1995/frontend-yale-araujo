import { MyProjects } from '../MyProjects'
import styles from './portfolio.module.scss'

export function Portfolio() {
    return (
        <section className={styles.portfolioContainer}>
            <h1>who trust my work</h1>
            <p>these brands carry a little bit of me on their products</p>
            <MyProjects/>
        </section>
    )
}