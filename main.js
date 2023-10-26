/* Declaração das variaveis */

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)

let xAttemps = 1
console.log(randomNumber)



// Eventos

/* evento click que executa a função handletruclick */
btnTry.addEventListener('click', handleTryClick)

/* funçao para retornar a pagina inicial com um novo numero randomico, novo contador de tentativas */
btnReset.addEventListener('click', resetNumberRandom)

/* função callback */
function handleTryClick(event) {
  /* para não recarregar a pagina quando clickar no button */
  event.preventDefault()

  /* guarda na variavel o documento onde tem o id inpunumber */
  const inputNumber = document.querySelector("#inputNumber")

  /*  condicional para comparar se o valor inserido é igual ao valor gerado pelo math.randon */
  if (Number(inputNumber.value) == randomNumber) {
    /* executa a função que troca as classes para alternar */
   handleResetClick()

    /* insere no html a msg*/
    screen2.querySelector("h2").innerText = `Acertou em ${xAttemps} tentativa(s)`
  }

  /* zera o valor inserido no input, cada vez que clica no button, por isso está fora da condicional */
  inputNumber.value = ""
  /* contador de tentativas */
  xAttemps++
}

function resetScreen(){
  handleResetClick()
  xAttemps = 1
}

function handleResetClick(){

  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")

}

function resetNumberRandom(){
  resetScreen()

  randomNumber = Math.round(Math.random() * 10)

  console.log(randomNumber)
}


