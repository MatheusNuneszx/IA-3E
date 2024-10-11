const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Quem tem mais Bola de Ouro?",
        alternativas: [
            {texto: "Messi",
            afirmação:"correta resposta"}, 

            {texto: "CR7",
            afirmação:"errou foi quase"}]
    },
    { 
        enunciado: "Quem ganhou a última Copa do Mundo?",
        alternativas: [
            {texto: "Argentina",
            afirmação:"ótimo"}, 
                
            {texto: "França",
            afirmação:"tenho que treinar"}]
    },
    { 
        enunciado: "Brasil tem quantas Copas do Mundo?",
        alternativas: [
            {texto: "7",
            afirmação:"sou ruim"}, 
                
            {texto: "5",
            afirmação:"sou muito bom"}]
    },
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();