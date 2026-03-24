interface PokemonPageProps {
  params: { id: string };
}

export default async function PokemonPage(props: PokemonPageProps) {
  const { id } = await props.params;

  return (
    <div>
      <h1>Pokemon: {id}</h1>
    </div>
  );
}
