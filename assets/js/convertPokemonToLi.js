function convertPokemonToLi(pokemon) {
    return `
        <li >
            <a href="./poke-detail.html?id=${pokemon.number}" class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photoDex}"
                        alt="${pokemon.name}">
                </div>
            </a>   
        </li>
    `;
}