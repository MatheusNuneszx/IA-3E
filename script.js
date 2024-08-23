const caixaprincipal = document.querySelector('.caixa-principal');
const caixapergunta = document.querySelector('.caixa-pergunta');
const caixaalternativa = document.querySelector('.caixa-alternativa');
const caixaresultado = document.querySelector('.caixa-resultado');

const pergunta = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"pergunta 1",
        alternaiva: [ "alternativa 1","alternativa 2"]
    },
    {
        enunciado:"pergunta 2",
        alternaiva: [ "alternativa 1","alternativa 2"]
    },
    {
        enunciado:"pergunta 3",
        alternaiva: [ "alternativa 1","alternativa 2"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[posicao];
    caixapergunta.textContent = perguntaAtual.enunciado;
    
}