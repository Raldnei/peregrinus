function contador1(){
    let num = 0
    let num1 = num--
    return num1
}
function contador2(){
    let num = 0
    let num1 = num++
    return num1
}
console.log(num1)
document.getElementsByClassName('contador').innerHTML = 'quantidade: ' + num1
document.getElementsByClassName('contador').innerHTML = 'quantidade: ' + num1

let preco = 59.00
let quantidade = 1*num1
let total = (preco*quantidade) + frete
let frete = 9.90
let desconto = 0.00
console.log(total)
console.log(frete)
console.log(desconto)
document.getElementById('preco-total').innerHTML = 'Total de Produtos: R$' + total
document.getElementById('frete').innerHTML = 'Frete: R$' + frete
document.getElementById('Desconto').innerHTML = 'Desconto: ' + desconto
document.getElementById('pagamento').innerHTML = 'Total a pagar : R$' + total
