let n = document.getElementById('nota')
let r = document.getElementById('res')
let l = document.getElementById('lista')
let v = []

function adiciona() {
    if (n.value < 0 || n.value > 10 || n.value.length == 0) {   //testa nota entre 0 e 10
        window.alert("Nota inválida")
    } else {
        v.push(Number(n.value))                         //adiciona nota ao vetor
        let item = document.createElement('option')     //cria item na lista
        item.text = `${n.value}`                        //determina valor do item
        l.appendChild(item)                             //exibe item na lista
    }
    n.value = ''       //apaga o número após adicionado
    n.focus()          //retorna o cursor para o campo
}

function calcula() {
    if (v.length == 0) {                                //testa se há nota digitada
        window.alert("Insira pelo menos uma nota!")
    } else {
        let s = 0
        let t = v.length
        for (let c in v) {            //percorre o vetor
            s += v[c]                 //soma os valores do vetor                    
            m = s/t                   //calcula a média
        }
        r.innerHTML = ``                                  //zera a resposta
        r.innerHTML += `<p>A média das notas é: ${m}</p>` //exibe a respsota
    }
}

function limpa() {
    for (i=l.options.length-1; i>=0; i--) {    //percorre a lista
        l.options[i] = null                    //apaga os dados da lista   
    }
    v = []                                     //zera o vetor
    r.innerHTML = ``                           //apaga a resposta
}