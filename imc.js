const form = document.getElementById("formulario")

form.addEventListener(`submit`,  function(e){
    e.preventDefault()

    const inputPeso = e.target.querySelector("#peso")
    const inputAltura = e.target.querySelector("#altura")

    const peso =Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso){
        setResultado("peso invalido",false)
        return
    }

    if(!altura){
        setResultado("altura invalida", false)
        return
    }

    const imc =getIMc(peso, altura)
    const nivelIMC = getNivelIMC(imc)

    const mensagem = `Seu IMC e ${imc} (${nivelIMC}.)`

    setResultado(mensagem, true)

    
})

function getIMc(peso, altura){
    const imc = peso/altura**2
    return imc.toFixed(2)
}

function getNivelIMC (imc){
    const nivel =  ["Abaixo do peso","Peso normal","Sobrepeso","Obesidade Grau 1", "Obesidade grau 2 ", "Obesidade grau 3"]

    if(imc >= 39.9){
        return nivel[5]
    } 

    if(imc >=34.9){
        return nivel[4]
    }

    if(imc >=29.9){
        return nivel[3]
    }

     if(imc >=24.9){
        return nivel[2]
        }

    if(imc >=18.5){
        return nivel[1]
    }

    if(imc < 18.5){
        return nivel[0]
    }

}

function criarP(){
    const p = document.createElement("p")
    return p
}

function setResultado(msg, isValid){
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = ""

    const p = criarP()

    if(isValid){
        p.classList.add("paragrafo-resultado")
    }else{p.classList.add("bad")}

    p.innerHTML = msg
    resultado.appendChild(p)
    
}

