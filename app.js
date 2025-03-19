var amigos = [];

function agregarAmigo(){
    var amigo = document.getElementById("amigo");
    if (amigo.value != ""){
        if (!amigos.includes(amigo.value)){
            amigos.push(amigo.value);
            amigo.value = "";
            mostrarAmigos();
        }else{
            alert("El amigo "+amigo.value+" ya fue agregado");
            amigo.value = "";
        }
    }else{
        alert("Por favor, ingrese un nombre valido");
    }
}

function mostrarAmigos(){
    var lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (var i = 0; i < amigos.length; i++){
        lista.innerHTML += "<li>"+amigos[i]+"</li>";
    }
}

function sortearAmigo(){
    if (amigos.length > 1){
        var amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        var ganador = document.getElementById("resultado");
        ganador.innerHTML = amigoSorteado;
    }else{
        alert("No hay suficientes amigos para sortear");
    }
}
