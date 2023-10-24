let NumberOne = prompt ("insira o primeiro numero:")
let NumberTwo = prompt ("insira o segundo numero:")

console.log (NumberOne,NumberTwo)

numberOne = Number(NumberOne)
numberTwo = Number(NumberTwo)

let soma = numberOne + numberTwo
let restDivisao = numberOne % numberTwo

if (numberOne == numberTwo){
    alert (`Os numeros digitados foram: ${numberOne} e ${numberTwo} e são IGUAIS!`)
} else {
    alert (`Os numeros digitados foram: ${numberOne} e ${numberTwo} e são DIFERENTES!`)
}


if (restDivisao  == 0){
    alert (`A soma entre ${numberOne} e ${numberTwo} é : ${soma}. O numero é par!`)
} else { alert (`A soma entre ${numberOne} e ${numberTwo} é : ${soma}. O numero é Impar!`)}

alert (`A subtração entre ${numberOne} e ${numberTwo} é : ${numberOne - numberTwo}`)

alert (`A multiplicação entre ${numberOne} e ${numberTwo} é : ${numberOne *  numberTwo}`)

alert (`A divisão entre ${numberOne} e ${numberTwo} é : ${(numberOne / numberTwo).toFixed(0)}`)

alert (`O resto da divisão  entre ${numberOne} e ${numberTwo} é : ${numberOne % numberTwo}`)
