import Head from "next/head"
import styles from "../styles/Layout.module.css"
import Navbar from "../components/Navbar"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import Image from "next/image"

const name="PokeApp"

export default function Layout({children, title, description, home}) {
  return (
    <div >
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/poke.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/poke.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
        <Navbar />
        <main>
          <div className="page-wrap">
            {children}

          </div>
        </main>
        <footer className={styles.pie}>
            Pokemon App
        </footer>
    </div>
  )
}
