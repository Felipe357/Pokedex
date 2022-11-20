function carregar() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=720&offset=0")
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            data.results.forEach((e, indice) => {

                fetch(e.url)
                    .then(res => { return res.json() })
                    .then(y => {

                        var poke = document.querySelector(".pokemon")
                        var pokemon = poke.cloneNode(true)
                        pokemon.classList.remove("model")
                        pokemon.id = y.id

                        pokemon.querySelector("#name").innerHTML = e.name

                        pokemon.querySelector("#id").innerHTML = "#" + y.id

                        pokemon.querySelector("#pokeImg").style.backgroundImage = "url(" + y.sprites.front_default + ")"

                        y.types.forEach((z, indice) => {

                            var type = pokemon.querySelector(".type")
                            type.classList.remove("model")

                            if (indice == 0) {
                                type.querySelector("img").src = imgPoke(z.type.name)
                                type.querySelector("span").innerHTML = z.type.name
                                type.style.backgroundColor = corType(z.type.name)
                                pokemon.style.backgroundColor = corPoke(z.type.name)
                            } else if (indice == 1) {
                                var clone = type.cloneNode(true)
                                clone.querySelector("img").src = imgPoke(z.type.name)
                                clone.querySelector("span").innerHTML = z.type.name
                                clone.style.backgroundColor = corType(z.type.name)
                                pokemon.querySelector(".tipo").appendChild(clone)
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
            return ('#FFA860')
        case 'water':
            return ('#37A7F2')
        case 'grass':
            return ('#8dc797')
        case 'normal':
            return ('#babdc2')
        case 'fighting':
            return ('#CE416B')
        case 'flying':
            return ('#89AAE3')
        case 'poison':
            return ('#B567CE')
        case 'ground':
            return ('#D97845')
        case 'rock':
            return ('#c5b78c')
        case 'bug':
            return ('#91c12f')
        case 'ghost':
            return ('#5269ad')
        case 'steel':
            return ('#5A8EA2')
        case 'electric':
            return ('#f8d030')
        case 'psychic':
            return ('#fa7179')
        case 'ice':
            return ('#73cec0')
        case 'dragon':
            return ('#0b6dc3')
        case 'dark':
            return ('#5a5465')
        case 'fairy':
            return ('#ec8fe6')
        case 'shadow':
            return ('#978cae')
        default:
            return ("#efefef")
    }
}

const corType = (type) => {
    switch (type) {
        case 'fire':
            return ('#ff841f')
        case 'water':
            return ('#0080d6')
        case 'grass':
            return ('#23cc40')
        case 'normal':
            return ('#9d9d9e')
        case 'fighting':
            return ('#c42152')
        case 'flying':
            return ('#698cc7')
        case 'poison':
            return ('#9539b3')
        case 'ground':
            return ('#bf5015')
        case 'rock':
            return ('#bfaa67')
        case 'bug':
            return ('#79b009')
        case 'ghost':
            return ('#3351ab')
        case 'steel':
            return ('#3583a1')
        case 'electric':
            return ('#e8bd13')
        case 'psychic':
            return ('#f25059')
        case 'ice':
            return ('#47a697')
        case 'dragon':
            return ('#045194')
        case 'dark':
            return ('#433c4f')
        case 'fairy':
            return ('#c43dbc')
        case 'shadow':
            return ('#796a99')
        default:
            return ("#efefef")
    }
}

const imgPoke = (type) => {
    switch (type) {
        case 'fire':
            return ('./tiposPoke/fire.png')
        case 'water':
            return ('./tiposPoke/water.png')
        case 'grass':
            return ('./tiposPoke/grass.png')
        case 'normal':
            return ('./tiposPoke/normal.png')
        case 'fighting':
            return ('./tiposPoke/fighting.png')
        case 'flying':
            return ('./tiposPoke/flying.png')
        case 'poison':
            return ('./tiposPoke/poison.png')
        case 'ground':
            return ('./tiposPoke/ground.png')
        case 'rock':
            return ('./tiposPoke/rock.png')
        case 'bug':
            return ('./tiposPoke/bug.png')
        case 'ghost':
            return ('./tiposPoke/ghost.png')
        case 'steel':
            return ('./tiposPoke/steel.png')
        case 'electric':
            return ('./tiposPoke/electric.png')
        case 'psychic':
            return ('./tiposPoke/psychic.png')
        case 'ice':
            return ('./tiposPoke/ice.png')
        case 'dragon':
            return ('./tiposPoke/dragon.png')
        case 'dark':
            return ('./tiposPoke/dark.png')
        case 'fairy':
            return ('./tiposPoke/fairy.png')
        case 'shadow':
            return ('./tiposPoke/shadow.png')
        default:
            return ("./tiposPoke/pokebola.png")
    }
}


setTimeout(() => {
    listarOrdem()
}, 900)

async function listarOrdem() {
    var all = Array.from(document.querySelectorAll(".pokemon"))

    all.sort((a, b) => a.id - b.id);

    all.forEach((s) => {
        var poke = s
        document.querySelector("main").appendChild(poke)
    })
}

listarOrdem().then(
    mostrar()
)

function mostrar() {
    document.querySelector(".pokebola").classList.add("model")
}

function abrirModal() {
    document.querySelector(".modelao").classList.toggle("model")
}

function abrirPokemon(e) {
    abrirModal()
    fetch("https://pokeapi.co/api/v2/pokemon/" + e.id)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.types.forEach((z, indice) => {

                var type = document.querySelector(".infoPoke")

                if (indice == 0) {
                    type.style.backgroundColor = corType(z.type.name)
                    document.querySelector(".infoM").style.backgroundColor = corType(z.type.name)
                    document.querySelector(".infoE").style.backgroundColor = corType(z.type.name)
                    document.querySelector(".infoD").style.backgroundColor = corType(z.type.name)
                }
            })

            document.querySelector(".foto").style.backgroundImage = "url(" + data.sprites.front_default + ")"
            document.querySelector("#infoNome").innerHTML = data.name

            data.stats.forEach(s => {
                var status = document.querySelector(".status").cloneNode(true)
                status.classList.remove("model")

                status.querySelector("span").innerHTML = s.stat.name
                status.querySelector(".statusBarReading").style.width = s.base_stat + "%"

                document.querySelector(".infoE").appendChild(status)
            })

            data.moves.forEach(m => {
                var move = document.querySelector(".move").cloneNode(true)
                move.classList.remove("model")

                move.querySelector("span").innerHTML = m.move.name

                document.querySelector(".moves").appendChild(move)
            })

        })
}

function fecha() {
    window.location.reload()
}

function pesquisar() {
    var inp = document.querySelector("#inp").value.toLowerCase()

    fetch("https://pokeapi.co/api/v2/pokemon/" + inp)
        .then((response) => {
            return response.json();
        })
        .then((e) => {

            var poke = document.querySelector(".pokemon")
            var pokemon = poke.cloneNode(true)
            pokemon.classList.remove("model")
            pokemon.id = e.id

            pokemon.querySelector("#name").innerHTML = e.name

            pokemon.querySelector("#id").innerHTML = "#" + e.id

            pokemon.querySelector("#pokeImg").style.backgroundImage = "url(" + e.sprites.front_default + ")"

            e.types.forEach((z, indice) => {

                var type = pokemon.querySelector(".type")
                type.classList.remove("model")

                if (indice == 0) {
                    type.querySelector("img").src = imgPoke(z.type.name)
                    type.querySelector("span").innerHTML = z.type.name
                    type.style.backgroundColor = corType(z.type.name)
                    pokemon.style.backgroundColor = corPoke(z.type.name)
                } else if (indice == 1) {
                    var clone = type.cloneNode(true)
                    clone.querySelector("img").src = imgPoke(z.type.name)
                    clone.querySelector("span").innerHTML = z.type.name
                    clone.style.backgroundColor = corType(z.type.name)
                    pokemon.querySelector(".tipo").appendChild(clone)
                }
            })

            document.querySelectorAll(".pokemon").forEach(v => {
                if (v.id !== e.id) {
                    v.classList.add("model")
                }
            })

            document.querySelector("main").appendChild(pokemon)
        })
        .catch(
            document.querySelectorAll(".pokemon").forEach(v => {
                if (v.id === "") {
                    v.classList.add("model")
                } else {
                    v.classList.remove("model")
                }
            })
        )
}