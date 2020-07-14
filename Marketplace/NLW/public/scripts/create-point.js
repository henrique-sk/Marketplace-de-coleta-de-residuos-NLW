

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    // a maneira alongada do comando abaixo seria -> .then( (res) => { return res.json() }) //
    .then( res => res.json() )
    .then( states => {

        for( const state of states ) {
            // o "+=" soma o valor a ele mesmo
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    
    })
}


populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disable = true

    fetch(url)
    // a maneira alongada do comando abaixo seria -> .then( (res) => { return res.json() }) //
    .then( res => res.json() )
    .then( cities => {
        for( const city of cities ) {
            // o "+=" soma o valor a ele mesmo
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    
    })

}




// --------para procurar o select que tenha o nome uf //
document
    .querySelector("select[name=uf]")
    // ------adicionar um evento, no caso, de mudança //
    .addEventListener("change", getCities)


// Itens de coleta
// pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

//const é uma constante, let é uma variável
let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    
    // adicionar ou remover uma classe com javascript
    // add, para adicionar. remove, para remover.
    // toggle, para adicionar ou remover. possibilita marcar várias de uma vez
    // e desmarcar clicando novamente
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id

    // console.log('ITEM ID: ', itemId)
    
    // verificar se existem itens selecionatos, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId //isso será true or false
        return itemFound
    })
    // um "=" é para atribuir valor, dois "==" é para comparar valor


    // se já estiver selecionado, tirar da seleção
    if(alreadySelected >= 0 ) {
        //tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // se não estiver selecionado, adicionar à seleção
        // adicionar à seleção
        // push coloca um elemento dentro do array
        selectedItems.push(itemId)

    }

    // console.log('selectedItems: ', selectedItems)

    // atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
    
}