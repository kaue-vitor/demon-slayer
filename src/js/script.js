const botaoTrailer = document.querySelector('.botao-trailer')
const modal = document.querySelector('.modal')
const botaoFecharModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkDoVideo = video.src

function alterarModal () {
    modal.classList.toggle('aberto') //o toggle é a mesma coisa do add e do remove, só facilitaram pra uma palavra só, nome disso é refatoramento, mas funciona dos dois jeitos
}

botaoTrailer.addEventListener('click', () => {
    alterarModal()
    video.setAttribute("src", linkDoVideo)
})

botaoFecharModal.addEventListener('click', () => {
    alterarModal()
    video.setAttribute("src", " ")
})

