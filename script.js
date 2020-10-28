function alterar(titulo){
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}
function somar(x, y){
    let total = x + y;
    return total;
}

function clicou(){
    document.getElementById("titulo").innerHTML = "Evento click";
    document.getElementById("campo").value = "You click";
}