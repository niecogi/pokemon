export function getPokemons(limit=25, offset=0){
  const url= `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response
    })
}