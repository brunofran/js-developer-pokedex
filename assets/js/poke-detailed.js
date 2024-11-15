// Função para receber o parâmetro passado quando clicado em algum pokemon
function getId() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    return id;
}
const pokeId = getId()
console.log(pokeId)

const pokemonDetail = document.getElementById('pokeDetailContainer');

function convertPokemonDetailToLi(pokemon) {
    return `

        <div class="pokemon ${pokemon.type}">
            <div>
                <div>
                    <div class="detail">
                        <h1 class="name">${pokemon.name}</h1>
                        <p class="number">#${pokemon.number}</p>
                    </div>
    
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
    
                </div>
    
            </div>
            <img src="${pokemon.photo}"
                alt="Official Artwork ${pokemon.name}" class="poke__img">
    
        </div>
        <div class="poke__details">
            <div class="poke__stats">
                <h2>
                    Base stats
                </h2>
                <p><span class="stat__name">HP:</span> ${pokemon.stats[0]}</p>
                <p><span class="stat__name">Attack:</span> ${pokemon.stats[1]}</p>
                <p><span class="stat__name">Defense:</span> ${pokemon.stats[2]}</p>
                <p><span class="stat__name">Sp. Attack:</span> ${pokemon.stats[3]}</p>
                <p><span class="stat__name">Sp. Defense:</span>: ${pokemon.stats[4]}</p>
                <p><span class="stat__name">Speed:</span> ${pokemon.stats[5]}</p>
            </div>
            <div class="poke__moves">
                <h2>Moves</h2>
                <ol class="moves__list">
                    ${pokemon.moves.map((move) => `<li class="move">${move}</li>`).join('')}
                </ol>
            </div>
        </div>
    

    `;
}



function loadPokemon(){
    pokeApi.getPokemonDetailbyId(pokeId).then((pokemon) => {
        const newHtml = convertPokemonDetailToLi(pokemon);
        pokemonDetail.innerHTML += newHtml;

        
            const movesList = document.querySelectorAll('.move');
            movesList.forEach(function(item) {
                item.textContent = item.textContent.replace('-', ' ');
            });
    }) 
}



loadPokemon()

