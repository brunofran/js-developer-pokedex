function convertPokemonDetailToLi(pokemon) {
    return `
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
                <img src="${pokemon.photoDex}" alt="${pokemon.name}">
            </div>
    `;
}