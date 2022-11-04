
document.addEventListener('DOMContentLoaded', function () {
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
})


function carregar() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=3&offset=0")
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            var cont = document.querySelectorAll("div.gallery__item")

            console.log(cont.length)

            var item = document.createElement("div")
            item.classList.add("gallery__item")

            data.results.forEach(e => {

                var poke = document.querySelector(".pokemon")

                var pokemon = poke.cloneNode(true)

                pokemon.querySelector("#nome").innerHTML = e.name

                item.appendChild(pokemon)


                document.querySelector(".gallery__stream").appendChild(item)
            })
        })
}