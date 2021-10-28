//criar um aplicativo de frases motivacionais

//criando uma função
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciencia e persistencia')
    console.log('Revisão é mãe do aprendizado')
}

//executando a função
createPhrases()
createPhrases()
createPhrases()
createPhrases()


console.log('fim do programa')



//function expression 

//parêmetros (parameters)
const sum = function(number1,number2){
    console.log(number1 + number2)
}

sum(10,8)

//function return

const sum = function(number1,number2){
    let total = (number1 + number2)
    return total
}

let number1 = 50
let number2 = 13
console.log( `A soma dos números é: ${sum(number1,number2)}`)