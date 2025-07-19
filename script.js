const nomeRestaurante = "Pizzaria do Luan";
const avaliacoes = [5, 10, 15, 17, 19];
const horarioAtual = 14;
const horarioAbertura = 12;
const horarioFechamento = 22;

function calcularMedia(notas){
    let soma = 0;
    for (let i = 0; i < notas.length; i++){
        soma += notas[i];
    }
    const media = soma / notas.length

    return Math.round(media * 10) / 10;
}

function obterClassificacao(media){
    if (media >= 4.5) {
        return 'excelente';
    } else if (media >= 3.5) {
        return 'Bom'
    } else if (media >= 2.5) {
        return 'Regular'
    } else {
        return ''
    }
}

function verificarStatus(horario, abertura, fechamento){
    const estaAberto = horario >= abertura && horario < fechamento;
    return estaAberto ? 'Aberto' : 'Fechado'
}

function criarRelatorio(nome, notas, horario, abertura, fechamento){
    const media = calcularMedia(notas);
    const classificacao = obterClassificacao(media);
    const status = verificarStatus(horario, abertura, fechamento);

    const relatorio = '${nome} - Média: ${media} - Classificação: ${classificacao} - Status: ${status}';

    return relatorio;
}

const resultado = 