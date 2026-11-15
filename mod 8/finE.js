async function fetchDATA(osoite) {
    try {
    const response = await fetch(osoite);
    if (response.ok ) {
        const response_data = await response.json()
        return response_data
    } else {
        throw new Error(`HTTP-virhe! data ei ole haettu oikein: ${response.status}`)
    }
} catch (error) {
    console.log(`virhe dataa haettaessa: ${error}`)
}

}
async function handle_pokemon_click(event, osoite){
    let pokemonData = await fetchDATA(osoite)
    let pokemonDiv = event.target.parentElement;
    for (let type of pokemonData.types) {
        let typetext = document.createElement("p")
        typetext.textContent = type.type.name
        pokemonDiv.appendChild(typetext)
    }

}

async function createPokemonView(){
    let lupaus = await fetchDATA("https://pokeapi.co/api/v2/pokemon")
    const pokemonDIV = document.querySelector("#poke-content");
    for (let pokemon of lupaus.results) {
        let pokemonText = document.createElement("p");
        let onePokemonDiv = document.createElement("div")
        pokemonText.textContent = pokemon.name;
        pokemonText.addEventListener("click", (event) => handle_pokemon_click(event, pokemon.url))
        onePokemonDiv.appendChild(pokemonText)
        pokemonDIV.appendChild(onePokemonDiv);


    }
}
createPokemonView()
