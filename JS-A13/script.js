let saldo = 1000;

function realizarOperacao() {
    const operacao = document.getElementById('operacao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(valor) || valor <= 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        return;
    }

    switch (operacao) {
        case 'consultar':
            resultado.innerText = `Seu saldo é R$ ${saldo.toFixed(2)}`;
            break;
        case 'sacar':
            if (valor > saldo) {
                resultado.innerText = "Saldo insuficiente para essa operação.";
            } else {
                saldo -= valor;
                resultado.innerText = `Saque de R$ ${valor.toFixed(2)} realizado. Seu novo saldo é R$ ${saldo.toFixed(2)}`;
            }
            break;
        case 'depositar':
            saldo += valor;
            resultado.innerText = `Depósito de R$ ${valor.toFixed(2)} realizado. Seu novo saldo é R$ ${saldo.toFixed(2)}`;
            break;
        default:
            resultado.innerText = "Operação invalida.";
    }
}