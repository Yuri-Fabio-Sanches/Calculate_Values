let firstNumber = Number(prompt('Digite o primeio número:'))
let secondNumber = Number(prompt('Digite o segundo número:'))

let isNotANumber = isNaN(firstNumber) || isNaN(secondNumber)

if(isNotANumber != true) {
    alert(`A soma dos dois números é: ${firstNumber + secondNumber}`)
    alert(`A subtração dos dois números é: ${firstNumber - secondNumber}`)
    alert(`A multiplicação dos dois números é: ${firstNumber * secondNumber}`)

    if(secondNumber == 0) {
        alert(`Impossível fazer divisão por ${secondNumber}`)
    }else {
        alert(`A divisão dos dois números é: ${(firstNumber / secondNumber).toFixed(2)}`)
        alert(`O resto da divisão dos dois números é: ${firstNumber % secondNumber}`)
    }
    
    if((firstNumber + secondNumber) % 2 == 0){
        alert(`A soma dos dois números é par: ${firstNumber + secondNumber}`)
    }else {
        alert(`A soma dos dois números é impar: ${firstNumber + secondNumber}`)
    }
    
    if(firstNumber === secondNumber){
        alert(`Os números inseridos são iguais`)
    }else {
        alert(`Os números inseridos são diferentes`)
    }
}else {
    if(isNaN(firstNumber) && isNaN(secondNumber)) {
        alert(`Valores inválidos`)
    }else if (isNaN(firstNumber)) {
        alert(`Primeiro valor inválido.`)
    }else if(isNaN(secondNumber)) {
        alert(`Segundo valor inválido`)
    }
}