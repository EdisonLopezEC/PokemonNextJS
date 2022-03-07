

export default function especificPokemon({data}) {
  return (
    <div>
        <h1>{data.name}</h1>
        <img src={data.sprites.front_default} alt={data.name} />

    </div>
  )
}

export async function getStaticPaths(){
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=800')
        const data = await res.json()
        const paths = data.results.map(({name})=>({
            params:{
                name
            }
        }))
        return {
            paths,
            fallback:false
        }
    } catch (error) {
        
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    const data = await res.json()
    return {
        props: {
        data
        }
    }
}
