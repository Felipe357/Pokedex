function carregar() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=105&offset=0")
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            data.results.forEach((e, indice) => {

                var poke = document.querySelector(".pokemon")
                var pokemon = poke.cloneNode(true)
                pokemon.classList.remove("model")

                pokemon.querySelector("#name").innerHTML = e.name
                


                fetch(e.url)
                    .then(res => { return res.json() })
                    .then(y => {

                        pokemon.querySelector("#id").innerHTML = "#"+y.id

                        pokemon.querySelector("#pokeImg").style.backgroundImage = "url("+y.sprites.front_default+")"

                        y.types.forEach((z, indice) => {

                            var type = pokemon.querySelector(".type")
                            type.classList.remove("model")

                            if(indice == 0){
                                type.querySelector("span").innerHTML = z.type.name
                                pokemon.style.backgroundColor = corPoke(z.type.name);
                            }
                        })

                        document.querySelector("main").appendChild(pokemon)

                    })

            })
        })
}

const corPoke = (type) => {
    switch (type) {

        case 'fire':
            return('#FFA860')

        case 'water':
            return('#37A7F2')

        case 'grass':
            return('#8dc797')

        default:
            return("#efefef")
    }
}