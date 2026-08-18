const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A Inteligência Artificial vai substituir os seres humanos no mercado de trabalho?",
        alternativas: [
            {
                texto: "A IA pode substituir algumas tarefas repetitivas, mas também poderá criar novas profissões e ajudar os trabalhadores a serem mais produtivos.",
                afirmacao: "A Inteligência Artificial poderá transformar o mercado de trabalho, substituindo algumas funções, mas também criando novas profissões e aumentando a produtividade."
            },
            {
                texto: "A IA poderá causar um grande aumento do desemprego.",
                afirmacao: "A substituição de trabalhadores por sistemas de IA pode aumentar o desemprego e a desigualdade, principalmente entre pessoas que não possuem acesso à qualificação profissional."
            }
        ]
    },

    {
        enunciado: "A Inteligência Artificial poderá melhorar a vida das pessoas no futuro?",
        alternativas: [
            {
                texto: "Sim. A IA poderá melhorar áreas como medicina, educação e transporte.",
                afirmacao: "A IA poderá melhorar a qualidade de vida das pessoas ao auxiliar médicos no diagnóstico de doenças, personalizar o ensino e tornar diversos serviços mais rápidos e eficientes."
            },
            {
                texto: "Não necessariamente, pois a IA também pode trazer problemas para a sociedade.",
                afirmacao: "O uso irresponsável da IA pode aumentar problemas como desinformação, perda de privacidade, dependência tecnológica e desigualdade social."
            }
        ]
    },

    {
        enunciado: "A Inteligência Artificial poderá se tornar mais inteligente que os seres humanos?",
        alternativas: [
            {
                texto: "Sim. Uma IA mais avançada poderia ajudar a humanidade a resolver problemas complexos.",
                afirmacao: "Uma IA mais inteligente que os seres humanos poderia contribuir para descobertas científicas, avanços na medicina, combate às mudanças climáticas e exploração espacial."
            },
            {
                texto: "Isso também poderia representar um grande risco para a humanidade.",
                afirmacao: "Se uma IA extremamente avançada não possuir mecanismos de segurança e supervisão adequados, suas decisões podem ser difíceis de prever ou controlar, trazendo consequências negativas."
            }
        ]
    }
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Conclusão sobre o futuro da IA";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
