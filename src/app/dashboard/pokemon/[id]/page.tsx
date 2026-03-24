import { Pokemon } from "@/src/pokemons";
import { Metadata } from "next";

interface PokemonPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: PokemonPageProps): Promise<Metadata> {
  const { id: paramId } = await params;
  const { id, name } = await getPokemon(paramId);

  return {
    title: `${id} - ${name}`,
    description: `Página del pokemon ${name}`,
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache", // TODO: Cambiar a futuro
  }).then((resp) => resp.json());

  console.log("Se cargó: ", pokemon.name);

  return pokemon;
};

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { id } = await params;
  const pokemon = await getPokemon(id);

  return (
    <div>
      <h1>Pokemon: {id}</h1>
      {pokemon.name}
    </div>
  );
}
