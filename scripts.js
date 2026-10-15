const Lista = document.querySelector('ul')
const buttonForEach = document.querySelector('.ForEach')
const buttonMap = document.querySelector('.Map')
const buttonReduce = document.querySelector('.Reduce')
const buttonFilter = document.querySelector('.Filter')


function mostrar(element){
    let li = ''
    element.forEach((item) => {
        li += 
        `
        <li>
            <img src=${item.src}>
            <p>${item.name}</p>
            <p class="number">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
        </li>
        `
        Lista.innerHTML = li
    })
}

function desconto(){
    const menuDesconto = menuOptions.map((item) => ({
        ...item,
        price: item.price * 0.9
    }))
    mostrar(menuDesconto)
}

function somar(){
    const total = menuOptions.reduce((sum, valorAtual) => sum + valorAtual.price , 0)
    Lista.innerHTML =  `
    <li>
        <p>Soma de todos os itens do menu é:</p>
        <p class="number">R$ ${total.toFixed(2).replace('.',',')}</p>
    </li>
    `
     
}

function filtrar(){
    const veganos = menuOptions.filter(item => item.vegan)
    mostrar(veganos)
}

buttonForEach.addEventListener('click', () => mostrar(menuOptions))
buttonMap.addEventListener("click", desconto)
buttonReduce.addEventListener("click", somar)
buttonFilter.addEventListener("click", filtrar)
