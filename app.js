const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromises = () => Array(150).fill().map((_, index) => fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generateHTML = pokemons => pokemons.reduce((accumulator, { name, id, types, stats }) => {

    const elementTypes = types.map(typeInfo => typeInfo.type.name)

    const status = stats.map(statsInfo => (statsInfo.stat.name))
    const barra = stats.map(statsInfo =>  (statsInfo.base_stat))
    accumulator += `
            <li class="card ${elementTypes[0]}">
                <img class="card-image" alt="${name}" src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"/>
                <h2 class="card-title">${id}. ${name}</h2>
                <p class="card-subtitle">${elementTypes.join(' | ')}</p>
                <p class="card-status">${status[0]}: <span class="barras" style='width=70%'> ${barra[0]} <span></p>
                <p class="card-status">${status[1]}: <span class="barras"> ${barra[1]} <span></p>
                <p class="card-status">${status[2]}: <span class="barras"> ${barra[2]} <span></p>
                <p class="card-status">${status[3]}: <span class="barras"> ${barra[3]} <span></p>
                <p class="card-status">${status[4]}: <span class="barras"> ${barra[4]} <span></p>
                <p class="card-status">${status[5]}: <span class="barras"> ${barra[5]} <span></p>
            </li>
        `
    return accumulator
}, '')

const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = pokemons
}

const pokemonPromises = generatePokemonPromises()

Promise.all(pokemonPromises).then(generateHTML).then(insertPokemonsIntoPage)