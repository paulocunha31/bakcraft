
// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a")

function menuAtivo(link) {
    const url = location.href
    const href = link.href

    if (url.includes(href)) {
        link.classList.add("ativo")
    }

}

links.forEach(menuAtivo)


// Ativar Itens do Orcamento

const paramentos = new URLSearchParams(location.search)

function ativaProduto(paramento) {
    const elemento = document.getElementById(paramento)

    if (elemento) {
        elemento.checked = true

    }
}
paramentos.forEach(ativaProduto)


// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
    const pergunta = event.target
    const controls = pergunta.getAttribute("aria-controls")
    const resposta = document.getElementById(controls)

    resposta.classList.toggle("ativa")
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded", ativa)

}

function eventosPeguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPeguntas)


// Galeria de Bicicletas
const galeriaContainer = document.querySelector(".bicicleta-imagem")
const galeria = document.querySelectorAll(".bicicleta-imagem img")

function trocarImagem (event) {
    const img = event.target
    const media = matchMedia("(min-width: 935px)").matches

    if(media) {
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img){
    img.addEventListener("click", trocarImagem)
}

galeria.forEach(eventosGaleria)

// Animação
if(window.SimpleAnime){
    new SimpleAnime()
}
