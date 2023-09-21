//DOM   

const lampada = document.querySelector('#apagada')
const bligar = document.querySelector('#bligar')
const bdesligar = document.querySelector('#bdesligar')


//EVENT

bligar.addEventListener('click',ligar)
bdesligar.addEventListener('click',desligar)
lampada.addEventListener('dblclick',quebrar)

// FUNÇÃO

function ligar(){
    lampada.src = "img/acesa.gif"
}

function desligar(){
    lampada.src = "img/apagada.gif"
}

function quebrar(){
    lampada.src = "img/quebrada.jpg"
}

