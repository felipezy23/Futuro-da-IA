const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A Inteligência Artificial vai substituir os seres humanos no mercado de trabalho??",
        alternativas: [
            {
                texto: "A IA pode substituir algumas tarefas repetitivas, mas também poderá criar novas profissões e ajudar os trabalhadores a serem mais produtivos",
                afirmacao: "Muitas pessoas podem perder seus empregos se empresas substituírem trabalhadores por sistemas de IA, aumentando o desemprego e a desigualdade."
            },
            {
                texto: "A Inteligência Artificial vai transformar profundamente o mercado de trabalho, substituindo algumas funções e criando novas profissões.",
                afirmacao: "A automação pode aumentar a produtividade das empresas, mas também pode causar desemprego em determinadas áreas."
            }
        ]
    },
    {
        enunciado: "A Inteligência Artificial poderá melhorar a vida das pessoas no futuro??",
        alternativas: [
            {
                texto: "Sim. A IA tem potencial para transformar diversas áreas da sociedade. Na medicina, por exemplo, pode auxiliar médicos na identificação de doenças e na análise de exames.",
                afirmacao: "Na educação, pode ajudar estudantes a aprender de maneira mais personalizada, adaptando explicações ao nível de cada pessoa."
            },
            {
                texto: "Ler livros didáticos e de autores conhecidos.",
                afirmacao: "Para quem tem interessede começar na leitura não seria ideal começar diretamente pelos clássicos já que a leitura dos mesmos pode ser mais dificil dificultando assim a criação do habito da leitura."
            }
        ]
    },
    {
        enunciado: "Atualmente vemos um grande aumentos nos valores dos livros físicos, oque dificulta a aquisição dos mesmos, a leitura digital vem se popularizou entre os leitores nos ultimos anos em parte pelos preços mais acessiveis, então seria ela uma alternativa viavel aos livros físicos?",
        alternativas: [
            {
                texto: "Provavelmente, já que iria possibilitar uma maior aquisição por parte da população.",
                afirmacao: "Já para quem não  tem condições de adquirir livros físicos os livros online são uma otima opção, pois permite a aquisição dos mesmos por um preço muito menor ou até mesmo gratuitamente, o que sem duvidas pode abrir grandes portas para esses leitores."
            },
            {
                texto: "Não teria grande importância já que grande parte da população continuaria adquirindo livros físicos apesar dos preços.",
                afirmacao: "Apesar do consumo de livros físicos ainda ser maioria os livros oline permitem que pessoas que não podem adquirir livros físicos tenham acesso a leitura, podendo gerar grandes oportunidades para esses leitores."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
