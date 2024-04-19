const palabras = ["pluma", "hojas", "mesas", "silla", "papel", "coche", "manos", "libro", "cable","lapiz", "arena", "vasos", 
    "rocas", "bajar", "campo",  "datos", "echar", "golpe", "hotel", "ideal", "jugar", "karma", "monte", "opera", "perro",  
    "radio", "salud", "tarde", "unido", "valor", "volar", "xenon",  "zorro", "clara", "dulce", "techo", "mosca", "flota",
    "vista", "fuego", "tango", "pasta", "pizza", "flora", "lagos","muslo",  "santo", "sapos", "drama", "guapo", "tapon", 
    "dosis", "ritos","barro", "curar", "dunas", "grano", "nuevo", "opera", "pista", "razon", "salsa", "talar", "vario", "zorro"];
  
const btn = document.getElementById("guess-button")
btn.addEventListener("click", intentar)

function intentar (){
    // Numero de intentos
    let intentos = document.getElementById("intentos-oculto").textContent;
    const spanIntentos = document.getElementById("intentos");
    const mensaje = document.getElementById("mensaje");
    if(intentos < 5){
        mensaje.textContent = "";
        intentos = parseInt(intentos) + 1;
        const palabra = document.getElementById("guess-input").value;
        if(palabra.length != 5){
            mensaje.textContent = "La palabra debe contener 5 letras";
        }else{
            const nuevoLi = document.createElement('li');
            nuevoLi.className = 'resultados';

            
            let indiceOculto = document.getElementById("indice-oculto").value;
            if(indiceOculto == ""){
                const indice = Math.floor(Math.random() * palabras.length);
                document.getElementById("indice-oculto").value = indice;
                indiceOculto = indice;
            }else{
                indiceOculto = parseInt(indiceOculto);
            }
            let palabraOculta = palabras[indiceOculto];


            if (palabraOculta == palabra){
                nuevoLi.appendChild(textoColor(palabra, 'verde'));
                document.getElementById("intentos-oculto").textContent = 5;
            }else{
                for (let i = 0; i < palabra.length; i++) {
                    if(palabra[i] == palabraOculta[i]){
                        nuevoLi.appendChild(textoColor(palabra[i], 'verde'));
                    } else if (palabraOculta.includes(palabra[i])){
                        nuevoLi.appendChild(textoColor(palabra[i], 'amarillo'));
                    } else {
                        nuevoLi.appendChild(textoColor(palabra[i], 'gris'));
                    }
                }
                document.getElementById("intentos-oculto").textContent = intentos;
            }
        
            // Cargar el resultado
            const listaIntentos = document.getElementById('lista-intentos');
            listaIntentos.appendChild(nuevoLi);
            // Actualizar el numero de intentos
            
            spanIntentos.textContent = intentos;
            // Verifica los intentos
            if(document.getElementById("intentos-oculto").textContent == 5){
                btn.textContent = "Volver a jugar";
            }else{
                btn.textContent = "Intentar";
            }
            document.getElementById("guess-input").value = ''
        }        
    }else{
        btn.textContent = "Intentar";
        spanIntentos.textContent = 0;
        const listaIntentos = document.getElementById('lista-intentos');
        listaIntentos.innerHTML = ''
        document.getElementById("intentos-oculto").textContent = 0;
        const indice = Math.floor(Math.random() * palabras.length);
        document.getElementById("indice-oculto").value = indice;
    }
}

function textoColor(texto, color){
    const span = document.createElement('span');
    span.className = color;
    span.textContent = texto;
    return span;
}


  


