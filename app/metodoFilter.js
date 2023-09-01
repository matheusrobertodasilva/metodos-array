const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

btnFiltrarLivrosFront.addEventListener('click', filtrarLivros);

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    console.log(categoria)
    let livrosFiltrados = categoria == 'disponivel' ? 
    filtarPorDisponibilidade() : filtarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}
function filtarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

 function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
 }