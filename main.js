let result= document.getElementById('mostrar')
let n1=document.getElementById('n1')
let simbolo=document.getElementById('simbolo')
let n2=document.getElementById('n2')
let uno=document.getElementById('btn_uno')
let dos=document.getElementById('btn_dos')
let tres=document.getElementById('btn_tres')
let cuatro=document.getElementById('btn_cuatro')
let cinco=document.getElementById('btn_cinco')
let seis=document.getElementById('btn_seis')
let siete=document.getElementById('btn_siete')
let ocho=document.getElementById('btn_ocho')
let nueve=document.getElementById('btn_nueve')
let cero=document.getElementById('btn_cero')
let mas=document.getElementById('btn_mas')
let menos=document.getElementById('btn_menos')
let por=document.getElementById('btn_por')
let divir=document.getElementById('btn_divir')
let off=document.getElementById('btn_apagar')
let igual=document.getElementById('btn_igual')
let resultado=''
let valor1=0

function mostrar(){
    resultado=parseInt(valor1) * parseInt(n1.value)
    result.innerText=resultado
    n1.value=''
    simbolo.innerText=''
}

function operador(operando){
    switch(operando){
        case '+':
            valor1=0
            valor1=n1.value
            simbolo.innerText='+'
            console.log(resultado)
            n1.value=''
            break

        case '-':
            valor1=0
            valor1=n1.value
            resultado=parseInt(valor1) - parseInt(n1.value)
            simbolo.innerText='-'
            console.log(resultado)
            n1.value=''
            break

        case '*':
            valor1=0
            valor1+=n1.value
            resultado=parseInt(valor1) * parseInt(n1.value)
            simbolo.innerText='*'
            console.log(resultado)
            n1.value=''
            break

        case '/':
            valor1=0
            valor1=n1.value
            resultado=parseInt(valor1) / parseInt(n1.value)
            simbolo.innerText='/'
            console.log(resultado)
            n1.value=''
            break

        case 'AC':
            resultado=''
            simbolo.innerHTML=''
            n1.value=''
            n2.value=''
            mostrar()
}
}


