const num = document.getElementById('userInput')
const btn = document.getElementById('restart')
const cuentaAtras = document.getElementById('countdown')
const resultado = document.getElementById('result')

const promesa = new Promise((resolve) => {
    let countdown = document.createElement('p')
    countdown.id = 'countdown'
    setTimeout(() => {
        
        countdown.innerHTML = 'Quedan 5 segundos'
        cuentaAtras.appendChild(countdown)
    }, 0)
    setTimeout(() => {
        cuentaAtras.innerHTML = ''
        
        countdown.innerHTML = 'Quedan 4 segundos'
        cuentaAtras.appendChild(countdown)
    }, 1000)
    setTimeout(() => {
        cuentaAtras.innerHTML = ''
        
        countdown.innerHTML = 'Quedan 3 segundos'
        cuentaAtras.appendChild(countdown)
    }, 2000)
    setTimeout(() => {
        cuentaAtras.innerHTML = ''
       
        countdown.innerHTML = 'Quedan 2 segundos'
        cuentaAtras.appendChild(countdown)
    }, 3000)
    setTimeout(() => {
        cuentaAtras.innerHTML = ''
      
        countdown.innerHTML = 'Quedan 1 segundos'
        cuentaAtras.appendChild(countdown)
    }, 4000)
    setTimeout(() => {
        cuentaAtras.innerHTML = ''
        
        countdown.innerHTML = 'Quedan 0 segundos'
        cuentaAtras.appendChild(countdown)
        resolve(numberRandom = Math.floor((Math.random() * 3) + 1))
    }, 5000)
    
})

promesa.then((numberRandom) => {
    let result = document.createElement('p')
        
    if (num.value == numberRandom){
        result.className = 'green'
        result.innerHTML = `Has salvado al mundo!! <br> Tu número ${num.value} es el mismo que el número ${numberRandom}`
    }else {
        result.className = 'red'
        result.innerHTML = `La bomba ha estallado. <br> El número escogido es ${num.value} y el numero correcto era ${numberRandom}`
    }
    resultado.appendChild(result)
})
btn.addEventListener('click', () => {
    location.reload()
})
