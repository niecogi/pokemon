export default function getPokemonByName(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response
    })

}