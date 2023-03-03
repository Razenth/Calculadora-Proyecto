
mostrar=document.getElementById('mostrar')
document.onkeydown=teclas

let NumPantalla='0'
let InicioNum=1
let numeroEspera=0
let opeCurso='ño'

function numero(n){
    if(NumPantalla=='0' || InicioNum==1){
        mostrar.innerHTML=n
        NumPantalla=n
    }
    else{
        mostrar.innerHTML+=n
        NumPantalla+=n
    }
    InicioNum=0
}

function operador(opera){
    igual()
    numeroEspera=NumPantalla
    opeCurso=opera
    InicioNum=1
}

function igual(){
    if(opeCurso=='ño'){
        mostrar.innerHTML=NumPantalla
    }
    else{
        solucion=numeroEspera+opeCurso+NumPantalla
        solucion=eval(solucion)
        mostrar.innerHTML=solucion
        NumPantalla=solucion
        opeCurso='ño'
        InicioNum
    }
}

function borrar(){
    numeros=NumPantalla.length
    NumPantalla=NumPantalla.substring(0,numeros-1)

    if(NumPantalla==''){
        NumPantalla='0'
    }
    mostrar.innerHTML=NumPantalla
}

function borrarTodo(){
    mostrar.innerHTML='0'
    NumPantalla='0'
    numeroEspera=0
    opeCurso='ño'
}

function teclas (enEvento) { 
    evento = enEvento
    tecla=evento.keyCode
    if (tecla>47 && tecla<58) { 
       buscarNum=tecla-48
       buscarNum=String(buscarNum)
       numero(buscarNum)
       }
    if (tecla>95 && tecla<106) {
       buscarNum=tecla-96
       buscarNum=String(buscarNum)
       numero(buscarNum)
       }
    if (tecla==106){
        operador('*')
    }

    if (tecla==107){
        operador('+')
    }

    if (tecla==109){
        operador('-')
    } 

    if (tecla==111){
        operador('/')
    }
    
    if (tecla==31 || tecla==13){
        igual()
    }
    if (tecla==46 || tecla==27){
        borrarTodo()
    }
    if (tecla==8){
        borrar()
    }
    }
