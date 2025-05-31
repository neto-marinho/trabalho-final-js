export function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

export function verificarSePodeSerAdotado(idade, porte) {
    return (idade == 1 && porte == "M")    
}

export function calcularConsumoDeRacao(nome, idade, peso) {
    return peso * 300
}

export function decidirTipoDeAtividadePorPorte(tamanhoPorte) {
    return (tamanhoPorte == "pequeno") ? "brincar dentro de casa" : "Não pode brincar dentro de casa"
}

export async function buscarDadoAsync() {
    return new Promise((retornaResultado) => {
        setTimeout(() => {
            retornaResultado("Pipoca")
        }, 100)
    })
}
