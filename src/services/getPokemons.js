
export function getPokemons(){
  return fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((response) => {
      const { results } = response
      return results
    })
}