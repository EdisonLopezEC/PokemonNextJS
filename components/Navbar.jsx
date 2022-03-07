import Link from "next/link"
import styles from "../styles/Navbar.module.css"
export default function Navbar() {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.container}>
            <a className={styles.link}>Home</a>
        </Link>
        <Link href="/search" className={styles.container}>
            <a className={styles.link}>Search</a>
        </Link>
        <Link href="/pokemon" className={styles.container}>
            <a className={styles.link}>Pokemones</a>
        </Link>
    </div>
  )
}
