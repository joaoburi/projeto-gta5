/*
Objetivo 1 - quando o usuário clicar no botão de seleção de plataforma deve abrir uma caixa com os botões de seleção de plataforma

    Passo 1 - pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

    Passo 3 - pegar o clique do usuário no js

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão para que o conteúdo apareça

Objetivo 2 - caso a lista de botões de plataforma já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já esta aberto, se sim, deveremos remover a classe ativo para que ele esconda o conteúdo novamente

*/

// Objetivo 1 - quando o usuário clicar no botão de seleção de plataforma deve abrir uma caixa com os botões de seleção de plataforma

// Passo 1 - pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima dele

const botao = document.querySelector('.btn-plataforma')
const elementoPlataformas = document.querySelector('.btn-plataforma .plataformas')

botao.addEventListener('click', () => {
    
    elementoPlataformas.classList.toggle('ativo')
    
    // const botaoEstaAberto = elementoPlataformas.classList.contains('ativo')
    // if(botaoEstaAberto) {
    //     elementoPlataformas.classList.remove('ativo')
    // } else {
    //     elementoPlataformas.classList.add('ativo')
    // }
});

