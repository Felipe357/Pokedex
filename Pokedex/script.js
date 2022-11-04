
function biruleibe() {
    var stream = document.querySelector('.gallery__stream')
    var items = document.querySelectorAll('.gallery__item')

    var prev = document.querySelector('.gallery__prev')
    prev.addEventListener('click', function () {
        stream.insertBefore(items[items.length - 1], items[0])
        items = document.querySelectorAll('.gallery__item')
    })

    var next = document.querySelector('.gallery__next')
    next.addEventListener('click', function () {
        stream.appendChild(items[0])
        items = document.querySelectorAll('.gallery__item')
    })
}

var next


function carregar() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=90&offset=0")
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            var item = document.createElement("div")
            item.classList.add("gallery__item")

            data.results.forEach((e, indice) => {

                var poke = document.querySelector(".pokemon")

                var pokemon = poke.cloneNode(true)

                pokemon.querySelector("#nome").innerHTML = e.name

                item.appendChild(pokemon)

                if ((indice + 1) % 3 == 0) {
                    document.querySelector(".gallery__stream").appendChild(item)
                    item = document.createElement("div")
                    item.classList.add("gallery__item")
                }
            })
        })
}