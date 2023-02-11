
export function capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function onSearch(pokemon, navigateTo) {
  if (pokemon !== null && pokemon.length !== 0) {
    navigateTo(`pokemon/${pokemon}`)
  }
}