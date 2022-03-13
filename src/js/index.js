/*
Quando clicar no pokemon da listagem, tem de esconder o cartão atual, e mostrar o cartão do pokemon clicado.
*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonscard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = (document.getElementById(idDoCartaoPokemonParaAbrir))
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonLista = document.querySelector('.ativo')
        pokemonLista.classList.remove('ativo')

        const listaPokemonParaAtivar = (document.getElementById(idPokemonSelecionado))
        listaPokemonParaAtivar.classList.add('ativo')
    })
})