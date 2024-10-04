const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Porque sim"
        },
        {
            texto: "Não",
            afirmação: "Porque não"
        }
        ]
    },
    {
        enunciado: "O que você acha das IAs?",
        alternativas: [{
            texto: "Boas",
            afirmação: "É top, usso para pesquisas"
        },
        {
            texto:"Ruins",
            afirmação:"É ruim mesmo"
        }
        ]
    },
    {
        enunciado: "Você usa as IAs com frequência?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Uso direto"
        },
        {
            texto: "Não",
            afirmação: "Quase nunca uso"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas= = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        mostraAlternativas();
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
        botaoAlternativas.addEventListener("click",  () => respostaSelecionadas(alterntiva));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afimacao;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Daqui a 10 anos...";
    textoResultado.textoContent = respostas;
    caixaAlternativa.textContent = ""
}
mostraPergunta();
