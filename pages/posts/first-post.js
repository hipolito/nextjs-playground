import Head from "next/head"
import Layout, { siteTitle } from "../../components/layout"
import utilStyles from "../../styles/utils.module.css"

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    In the vast realm of technology, a software engineer emerges
                    as a beacon of innovation and exploration. Driven by an
                    insatiable curiosity, this visionary individual constantly
                    seeks fresh approaches to crafting software solutions. With
                    an unwavering commitment to quality and user experience,
                    they blend cutting-edge technologies, embrace unconventional
                    methodologies, and infuse their creations with a deep
                    passion for their craft. Their journey is one of perpetual
                    growth and relentless creativity, where the boundaries of
                    possibility are pushed, and the digital landscape is shaped
                    by their unwavering determination to try new ways of
                    creating software solutions.
                </p>
            </section>
        </Layout>
    )
}
