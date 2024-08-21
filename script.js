const textArea = document.querySelector(".ingreso-texto");
const respuesta = document.querySelector(".resp-final");
const munheco  = document.querySelector(".munheco");
const info2  = document.querySelector(".info-2");
const btncopiar = document.querySelector(".btn-copiar")

// Función que se ejecuta cuando se ha ingresado texto en el textarea
function filtrarVocalesConTilde(event) {
    // Lista de vocales con tilde
    const vocalesConTilde = /[áéíóúÁÉÍÓÚ]/g;

    // Reemplazamos todas las vocales con tilde por una cadena vacía (eliminándolas)
    event.target.value = event.target.value.replace(vocalesConTilde, '');
}
// Agregamos el evento 'input' para filtrar las vocales con tilde después de que se ingresen
textArea.addEventListener('input', filtrarVocalesConTilde);


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function limpiar(){
    munheco.classList.add("oculto");
    info2.style.display="none";
    btncopiar.style.display= "block";
    respuesta.classList.add("ajustar");
    textArea.value= "";
}

function reset(){
    respuesta.innerHTML="";
    munheco.classList.remove("oculto");
    info2.style.display="block";
    btncopiar.style.display= "none";
    respuesta.classList.remove("ajustar");
    textArea.focus();
}

function btnEncriptar(){
    if (textArea.value !=""){
        const textoEncriptado = encriptar(textArea.value);
        respuesta.innerHTML = textoEncriptado;
        limpiar();
    }else 
    {
        alert("Ingrese texto a encriptar");
        reset();
    }
}

function btnDesencriptar(){
    if (textArea.value !=""){
        const textoEncriptado = desencriptar(textArea.value);
        respuesta.innerHTML = textoEncriptado;
        limpiar();
    }else 
    {
        alert("Ingrese texto a encriptar");
        reset();
    }
}

function encriptar(cadenaEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaEncriptada = cadenaEncriptada.toLowerCase();
        for(let i = 0; i < matrizCodigo.length; i++){
        if(cadenaEncriptada.includes(matrizCodigo[i][0])){
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        }   
        return cadenaEncriptada;
}

function desencriptar(cadenaDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase();
          for(let i = 0; i < matrizCodigo.length; i++){
        if(cadenaDesencriptada.includes(matrizCodigo[i][1])){
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        }
        return cadenaDesencriptada;
}
    
function copiando(){
    let texto = respuesta;
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado satisfactoriamente");
    reset();
}