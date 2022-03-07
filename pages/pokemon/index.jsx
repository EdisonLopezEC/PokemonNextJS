import Layout from "../../components/Layout"
import Link from "next/link"
export default function index({data}) {
  return (
    <Layout
        title="Pokemones | PokeApp"
        description="Pokemones de la App PokeApp"
    >
        {
            data.results.map(({name})=>(
                <div>
                <Link href={`/pokemon/${name}`}>
                    <a>{name}</a>
                </Link>
                </div>

            ))
        }
    </Layout>
  )
}


export async function getStaticProps() {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        const data = await res.json()
        return {
            props: {
                data
            }
        }

    } catch (error) {
        console.log(error);
    }
}

