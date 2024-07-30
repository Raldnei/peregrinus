

function contador(){
    let arraydiv = Array.from(document.getElementById('conteudo-divisao').children);
    arraydiv =arraydiv.slice(0,arraydiv.length-3);
    let precoTotal = 0
    let totalprodutos = 0

    for (let div of arraydiv) {

        let elementoClicado = event.target.parentNode;
        let elementoAtual = String(elementoClicado.parentNode.id)

        if(div.id == elementoAtual){
       
            let element = String(event.target.classList).split(' ')[String(event.target.classList).split(' ').length-1]

   
            if(element == 'botao-menos'){
                document.getElementById(div.id).getElementsByTagName('p')[1].textContent = Number(document.getElementById(div.id).getElementsByTagName('p')[1].textContent)-1

                if(Number(document.getElementById(div.id).getElementsByTagName('p')[1].textContent) < 0)
                    document.getElementById(div.id).getElementsByTagName('p')[1].textContent = 0
      

            }
            
            if(element == 'botao-mais'){
                document.getElementById(div.id).getElementsByTagName('p')[1].textContent = Number(document.getElementById(div.id).getElementsByTagName('p')[1].textContent)+1
                }

        }
        precoTotal+=Number(document.getElementById(div.id).getElementsByTagName('p')[0].textContent)*Number(document.getElementById(div.id).getElementsByTagName('p')[1].textContent)
        totalprodutos +=Number(document.getElementById(div.id).getElementsByTagName('p')[1].textContent)
    }

    if(totalprodutos > 10){
        document.getElementById('Desconto').textContent='Desconto: R$ 20,00'
    }
    else if(totalprodutos > 5){
        document.getElementById('Desconto').textContent='Desconto: R$ 10,00'
    }
    else{
        document.getElementById('Desconto').textContent='Desconto: R$ 5,00'
    }

    document.getElementById('preco-total').textContent = 'Total de Produtos: '+totalprodutos
    document.getElementById('pagamento').textContent = 'total a pagar: R$' + precoTotal


} 
