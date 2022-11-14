
var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0
var indexId = 0

var menorPreco = 0
var supPreco = []
var suporteNome = []
var supID = []
var supAva = []
var indexSup = 0

function Cadastrar() {
    ids[index] = indexId + 1
    nomes[index] = prompt("Insira o nome do produto ")
    precos[index] =parseInt(prompt("Insira o preço do produto "))
    avaliacoes[index] = prompt("Insira uma avaliaçâo para o produto ")
    console.log("ID: ", ids[index], " Nome: ", nomes[index], " Preço: ", precos[index], " Avaliação: ", avaliacoes[index])
    index++
    indexId++
}

function ProcurarID(id) {
    for (var i = 0; i < ids.length; i++) {
        if(nome == nomes[i]){
            console.log("O produto com o nome ", nomes[i], " tem ID: ", ids[i], " preço ", " R$ ", " e avaliação: ", avaliacoes[i])
        }
    }   
}

function ProcurarNome(nome) {
    for (var i = 0; i < nomes.length; i++) {
        if(infoNome == nomes[i]){
            console.log("O produto com o nome ", nomes[i], " tem ID: ", ids[i], " preço ", " R$ ", " e avaliação: ", avaliacoes[i])
        }
    }   
}
var maiorId = 0

function OrdernarIds() {
    
    suporteNome = []
    supID = []
    supPreco = []
    supAva = []

    for (var index = 0; index < ids.length; index++) {
        maiorId = 0
        for (var index1 = 0; index1 < ids.length; index1++) {
            if (ids[index1] > maiorId) {
                maiorId = ids[index1]
            }
        }
        for (var index2 = 0; index2 < ids.length; index2++) {
            if (maiorId == ids[index2]) {
                supID[indexSup] = ids[index2]
                suporteNome[indexSup] = nomes[index2]
                supPreco[indexSup] = precos[index2]
                supAva[indexSup] = avaliacoes[index2]
                ids[index2] = 0
                indexSup++
            }
        }
    }
    precos = supPreco
    ids = supID
    nomes = supID
    avaliacoes = supAva
    indexSup = 0

    for (var index = 0; index < ids.length; index++) {
        console.log(ids[index], nomes[index], precos[index], avaliacoes[index])
    }
}

function OrdernarPreço() {
    
    suporteNome = []
    supID = []
    supPreco = []
    supAva = []

    for (var index = 0; index < precos.length; index++) {
        menorPreco = precos[index]
        for (var index1 = 0; index1 < precos.length; index1++) {
            if (precos[index1] < menorPreco) {
                menorPreco = precos[index1]
            }
        }
        for (var index2 = 0; index2 < precos.length; index2++) {
            if (menorPreco == precos[index2]) {
                supPreco[index] = precos[index2]
                supID[index] = ids[index2]
                suporteNome[index] = nomes[index2]
                supAva[index] = avaliacoes[index2]
                precos[index2] = 99999999
            }
        }
    }
    console.log(suporteNome, supID, supAva, supPreco)
    precos = supPreco
    ids = supID
    nomes = supID
    avaliacoes = supAva

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
        
    }
}

var menorAVA = 0

function OrdernarAvaliacao() {
    
    suporteNome = []
    supID = []
    supPreco = []
    supAva = []

    for (var contador = 0; contador < avaliacoes.length; contador++) {
        menorAVA = 99999999
        for (var contador2 = 0; contador2 < avaliacoes.length; contador2++) {
            if (avaliacoes[contador2] < menorAVA) {
                menorAVA = avaliacoes[contador2]
            }
        }
        var contador4 = 0
        for (var contador3 = 0; contador3 < avaliacoes.length; contador3++) {
            if (menorAVA == avaliacoes[contador3] && contador4 == 0) {
                supAva[contador] = avaliacoes[contador3]
                supID[contador] = ids[contador3]
                suporteNome[contador] = nomes[contador3]
                supPreco[contador] = precos[contador3]
                avaliacoes[contador3] = 99999999
                contador4++
            }
        }
    }
    avaliacoes = supAva
    precos = supPreco
    ids = supID
    nomes = suporteNome

    for (var index = 0; index < ids.length; index++) {
        console.log(ids[index], nomes[index], precos[index], avaliacoes[index])
    }
}

function AtualizarPreco(id, novoValor) {
    for (var index = 0; index < ids.length; index++) {
        if(id == ids[index]){
            precos[index] = novoValor
        }
    }
}

function ExcluirProduto() {
    
    suporteNome = []
    supID = []
    supPreco = []
    supAva = []

    var deletar = parseInt(prompt("Insira um Id para deletar o produto."))

    for (var index = 0; index < ids.length; index++) {
        if (deletar == ids[index]) {
           ids[index] = 0
        }
    }
    for (var index1 = 0; index1 < ids.length; index1++) {
        if (ids[index1] != 0) {
            supID[indexSup] = ids[index1]
            suporteNome[indexSup] = nomes[index1]
            supPreco[indexSup] = precos[index1]
            supAva[indexSup] = avaliacoes[index1]
            indexSup++
        }
    }
    avaliacoes = supAva
    precos = supPreco
    ids = supID
    nomes = suporteNome
    indexSup = 0
    index = index - 1
}

var continuar = true
while (continuar) {
    var opcao = prompt("Insira a opção que deseja executar 1 - Cadastro, 2 - Buscar por ID, 3 - Buscar por nome, 4 - Ordernar por ID, 5 - Ordernar por preço, 6 - Ordernar por Avaliação, 7 - Atualizar Preço e 8 Excluir Produto.")

    if (opcao == "1") {
        Cadastrar()
        console.log("Produto cadastrado com sucesso")        
    }else if (opcao == "2"){
        var id = parseInt(prompt("Insira um id para pesquisar."))
        ProcurarID()
    }else if(opcao == "3"){
        var nome = prompt("Insira o nome para pesquisar")
        ProcurarNome(nome)
    }else if(opcao == "4"){
        OrdernarIds()
    }else if (opcao == "5"){
        OrdernarPreço()
    }else if (opcao == "6"){
        OrdernarAvaliacao()
    }else if (opcao == "7"){
        var id = parseInt(prompt("Insira o ID do produto que deseja atualizar."))
        var valor = parseInt(prompt("Insira o novo valor para o produto."))
        AtualizarPreco(id, valor)
        console.log("Preço atualizado com sucesso!")
    }else {
        ExcluirProduto()
        console.log("Produto excluido com sucesso")
    }
    var opcaoContinuar = prompt("Deseja continuar? s ou n")

    if (opcaoContinuar != "s") {
        continuar = false
    }
}

///////////////////////////////////////////////////////////////////////

var quantidadeCarrinho = []
var nomesCarrinho = []
var precosCarrinho = []
var indexCarrinho = 0

var nomesCarrinhoSup = []
var quantidadeCarrinhoSup = []
var precosCarrinhoSup = []
var indexCarrinhoSup = []

function AdicionarCarrinho(nomeP, quantidade) {
    for (var index = 0; index < indexCarrinho; index++) {
        if (nomeP == nomesCarrinho[index]) {
            quantidadeCarrinho = quantidadeCarrinho[index] + quantidade
        }else{
            nomesCarrinho[indexCarrinho] = nomeP
            quantidadeCarrinho[indexCarrinho] = quantidade
        }
    } 
}

function ExcluirProduto(nomeP, quantidade) {

    nomesCarrinhoSup = []
    quantidadeCarrinhoSup = []
    precosCarrinhoSup = []

    for (var index = 0; index < nomesCarrinho.length; index++) {
        if (nomeP == nomesCarrinho[index]) {
            if (quantidade == quantidadeCarrinho[index]) {
                nomesCarrinho[index] = 0
            }else{
                quantidadeCarrinho[index] = quantidadeCarrinho[index] - quantidade
            }
        }
    }
    for (var index1 = 0; index1 < nomesCarrinho.length; index1++) {
        if (nomesCarrinho[index1] != 0) {
            nomesCarrinhoSup[indexCarrinhoSup] = nomesCarrinho[index1]
            quantidadeCarrinhoSup[indexCarrinhoSup] = quantidadeCarrinho[index]
            precosCarrinhoSup[indexCarrinhoSup] = precosCarrinho[index]
            indexCarrinhoSup++
        }
    }
    nomesCarrinho = nomesCarrinhoSup
    quantidadeCarrinho = quantidadeCarrinhoSup
    precosCarrinho = precosCarrinhoSup
    indexCarrinho--
    indexCarrinhoSup = 0
    console.log(nomesCarrinho)
}

function RetornarValor() {
    var valorTotal = 0

    for(var i; i < nomesCarrinho.length; i++){
        valorTotal = valorTotal + precosCarrinho[i] + quantidadeCarrinho[i]
    }
    return valorTotal
}
