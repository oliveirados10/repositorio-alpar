// Arquivo JavaScript

const pokemonListEl = document.getElementById("pokemons")
const loadingEl = document.querySelector(".loading")
let carregando = false;
let offset = 0;
let count = 0;

fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(response => response.json())
    .then(loadPokemons)
    .catch(erro => console.log(erro))


    async function loadPokemons(response){
        let pokemons = response.results
        count = response.count
        try{ 
        pokemons = await Promise.all(pokemons.map(async(pokemon)=>{  
            const pokeResponse = await fetch(pokemon.url)
            pokemon = await pokeResponse.json()
            const specieResponse = await fetch (pokemon.species.url)
            pokemon.species = await specieResponse.json()
            return pokemon
        }))
    }catch(error) {
        console.log(error)
    }

        for(let i in pokemons) {
            showPokemon(pokemons[i])

        }

        offset += response.results.length
        carregando = false;
        loadingEl.style.display = 'none';
        
    }


       function showPokemon(pokemon) {  
            const name = pokemon.name;
            const weight = pokemon.weight /10;
            const height = pokemon.height /10;
            const id = `${pokemon.id}`.padStart(4, '0') ;
            const tags = pokemon.types.map((item)=>{ 
                return item.type.name
            })

            const tag = tags[0]
            let image = pokemon.sprites.front_default;
            if (pokemon.sprites.other["official-artwork"]) {
                image = pokemon.sprites.other["official-artwork"].front_default
            }

            const flavorText = pokemon.species.flavor_text_entries.find(item => {
                if(item.language.name == 'en'){
                    return true
                }
                return false
            })

            const text = flavorText.flavor_text
            .replace("\n", '')
            .replace("\t", '')
            .replace("", '')

            pokemonListEl.innerHTML +=

            `
            <article class = "card ${tag}">
            <span class = "number">#${id}</span>
            <h2>${name}</h2>
            <img src="${image}" alt="${name}">
            <p><strong>Altura: </strong>${height}m</p>
            <p><strong>Peso: </strong>${weight}kg</p>
            <p>${text}</p>
            <div class = "tags">
            ${
                tags.map(tag =>
                `<span class = "tag ${tag}">${tag} </span>`
                ).join('')
            }
            </div>
        </article>  `
} 


window.addEventListener('scroll', ()=>{
    const max = document.body.scrollHeight - window.innerHeight
    const current = window.scrollY
    const percent = current / max
    if(offset >= count ) { 
        reurn
    }

    if (percent > 0.8 && carregando == false)  {
        carregando = true
        loadingEl.style.display = 'block';
        console.log("Passei de 80%")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + offset)
            .then(response => response.json())
            .then(loadPokemons)
            .catch(erro => console.log(erro))

    }
})


