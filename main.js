// for (let i=0; i<=9; i++){
//     document.getElementById('btn_'+ i).addEventListener('click',(evento)=>mostrar(evento.target));

// }

// function mostrar(tecla){
//     document.getElementById('mostrar').innerHTML=
//         document.getElementById('mostrar').innerHTML+tecla.value
// }

// function mostrar2(tecla){
//     document.getElementById('mostrar').innerHTML=
//         document.getElementById('mostrar').innerHTML+tecla
// }

// addEventListener('keypress', evento=>{
//     if(!isNaN(evento.key)){
//         mostrar2(evento.key)
//     }
// })


mostrar=document.getElementById('mostrar')

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
































































// let result= document.getElementById('mostrar')
// let n1=document.getElementById('n1')
// let simbolo=document.getElementById('simbolo')
// let n2=document.getElementById('n2')
// let uno=document.getElementById('btn_uno')
// let dos=document.getElementById('btn_dos')
// let tres=document.getElementById('btn_tres')
// let cuatro=document.getElementById('btn_cuatro')
// let cinco=document.getElementById('btn_cinco')
// let seis=document.getElementById('btn_seis')
// let siete=document.getElementById('btn_siete')
// let ocho=document.getElementById('btn_ocho')
// let nueve=document.getElementById('btn_nueve')
// let cero=document.getElementById('btn_cero')
// let mas=document.getElementById('btn_mas')
// let menos=document.getElementById('btn_menos')
// let por=document.getElementById('btn_por')
// let divir=document.getElementById('btn_divir')
// let off=document.getElementById('btn_apagar')
// let igual=document.getElementById('btn_igual')
// let resultado=''
// let valor1=0

// function mostrar(){
//     if(simbolo.innerHTML=='+'){
//         resultado=parseInt(valor1) + parseInt(n1.value)
//         result.innerText=resultado
//         n1.value=''
//         simbolo.innerText=''
//     }

//     else if(simbolo.innerHTML=='-'){
//         resultado=parseInt(valor1) - parseInt(n1.value)
//         result.innerText=resultado
//         n1.value=''
//         simbolo.innerText=''
//     }

//     else if(simbolo.innerHTML=='*'){
//         resultado=parseInt(valor1) * parseInt(n1.value)
//         result.innerText=resultado
//         n1.value=''
//         simbolo.innerText=''
//     }

//     else if(simbolo.innerHTML=='/'){
//         resultado=parseInt(valor1) / parseInt(n1.value)
//         result.innerText=resultado
//         n1.value=''
//         simbolo.innerText=''
//     }

//     else{
//         n1.value=''
//         simbolo.innerText=''
//         result.innerHTML=''
//     }

// }

// function operador(operando){
//     switch(operando){

//         case '+':
//             valor1=0
//             valor1+=n1.value
//             simbolo.innerText='+'
//             n1.value=''
//             break;

//         case '-':
//             valor1=0
//             valor1+=n1.value
//             simbolo.innerText='-'
//             n1.value=''
//             break;

//         case '*':
//             valor1=0
//             valor1+=n1.value
//             simbolo.innerText='*'
//             n1.value=''
//             break;

//         case '/':
//             valor1=0
//             valor1+=n1.value
//             simbolo.innerText='/'
//             n1.value=''
//             break;

//         case 'AC':
//             resultado=''
//             simbolo.innerHTML=''
//             n1.value=''
//             valor1=''
//             mostrar()
// }
// }