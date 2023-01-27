export function getPokemon(url){
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response
    })
}