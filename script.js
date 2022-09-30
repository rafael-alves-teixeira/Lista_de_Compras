

function testar(){
    alert('Vamos fazer sua lista de compras!')

    frutas = []
    legumes = []
    congelados = []
    doces = []
    
    console.log(frutas)
    
    item = ""  
    operacao = 0
    continuar = true
    escolha = ""
    
    while (continuar == true) {
    
        operacao = prompt(`Veja a atual Lista de compras:\n"Frutas: ${frutas}\nLegumes: ${legumes}\nCongelados: ${congelados}\nDoces: ${doces}\nEscolha entre Adicionar[1], Remover [2] ou Manter [3]`)
    
        if (operacao == 1) {
            item = prompt('Qual item deseja adicionar?')
            categoria = prompt('Qual a categoria do alimento? [frutas/legumes/congelados/doces]')
    
            if (categoria.toLowerCase() == 'frutas') {

                frutas.push(item) 
                alert('Item adicionado com sucesso!')

            } else if (categoria.toLowerCase() == 'legumes') {

                legumes.push(item)
                alert('Item adicionado com sucesso!')

            } else if (categoria.toLowerCase() == 'congelados') {
                
                congelados.push(item)
                alert('Item adicionado com sucesso!')
    
            } else if (categoria.toLowerCase() == 'doces') {

                doces.push(item)
                alert('Item adicionado com sucesso!')
    
            } else {
                alert('Opção Inválida. Escolha uma das categorias indicadas e digite-a corretamente conforme ela foi apresentada')
            }

    
        } else if (operacao == 2) {
            item = prompt('Qual item da lista quer remover?')
    
            if (frutas.includes(item)) {
    
                frutas.splice(frutas.indexOf(item), 1)
    
                alert(`O item "${item}" foi removido da lista co sucesso!. `)
            } else {
                alert('Não foi possível encontrar o item dentro da lista. Verifique atentamente quais itens estão na sua lista')
            }
        } else if (operacao == 3) {
            continuar = false
        } else {
            alert('Opção Inválida. Responda corretamente, conforme as opções indicadas.')
        }
    
        escolha = "sim"
    
        while (escolha.toLowerCase() !== "s" || escolha.toLowerCase() !== "n") {
           
            escolha = prompt('Deseja continuar atualizando sua lista? Responda "S"(sim) ou "N"(não)')
    
            if(escolha.toLowerCase() == "s") {
                continuar = true
                break
            } else if (escolha.toLowerCase()== "n"){
                continuar = false
                break
            } else {
                alert('Opção Inválida. Responda apenas "S"(sim) ou "N"(não)')
            }   
        }
    }
    
    alert(`Veja como ficou a sua lista de compras:\n"Frutas: ${frutas}\nLegumes: ${legumes}\nCongelados: ${congelados}\nDoces: ${doces}`)
    
    alert('Fim do programa!')
}



