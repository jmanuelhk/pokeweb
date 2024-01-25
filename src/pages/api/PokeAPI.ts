
export default class PokeAPI {

  async getPokemon(name: string | number){
    const BASE_URL= "https://pokeapi.co/api/v2/pokemon/";
    console.log("🚀 ~ PokeAPI ~ getPokemon ~ BASE_URL + name:", BASE_URL + name)
  
    await fetch(BASE_URL + name)
      .then(res => res.json())
      .then(data => {
        console.log("🚀 ~ PokeAPI ~ getPokemon ~ data:", data)
        return data;
      })
      .catch(error => {
        console.log("🚀 ~ PokeAPI ~ getPokemon ~ error:", error)
        return error
      })
  }
}