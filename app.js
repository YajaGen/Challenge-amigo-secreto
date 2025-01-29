let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Actualizamos el id aquí
    let nombre = input.value;

    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarAmigos();
    console.log(amigos);
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
