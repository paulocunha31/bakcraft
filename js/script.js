
// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a")

function menuAtivo(link){
const url = location.href
const href = link.href

if(url.includes(href)){
   link.classList.add("ativo") 
}

}

links.forEach(menuAtivo)

// Ativar Itens do Orcamento

const paramentos = new URLSearchParams(location.search)

function ativaProduto(paramento){
    const elemento = document.getElementById(paramento)

    if(elemento) {
        elemento.checked = true

    }

}

paramentos.forEach(ativaProduto)
