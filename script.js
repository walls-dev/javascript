function alterar(titulo){
    document.getElementById("titulo").innerHTML = "titulo";
    document.getElementById("campo").value = "titulo";
}
function somar(x, y){
    let total = x + y;
    return total;
}

function clicou(){
    alert('Você clicou no buttom');
}
function mostrar(){
    document.getElementById('campo_oculto').style.display ='block';
}
function ocultar(){
    document.getElementById('campo_oculto').style.display ='none';
}

function digitou(e){//muitas das vezes utiliza-se apenas uma letra "e"
    if(e.keyCode == 13 && e.ctrlKey == true){//enter
        //depois armazezo numa variável o valor do campo - o que foi digitado
        let digitado = document.getElementById("campo_oculto").value;
        console.log(digitado);
    }

}
function azul(){
    
    //quando adicionamos uma class, precisamos remover as outras
    //limpo e adiciono outra cor
    limpar();
    document.getElementById("subtitulo").classList.add('azul');
}
function vermelho(){
    //quando adicionamos uma class, precisamos remover as outras
    limpar();
    document.getElementById("subtitulo").classList.add('vermelho');
}
function verde(){
    //quando adicionamos uma class, precisamos remover as outras
    limpar();
    document.getElementById("subtitulo").classList.add('verde');
}
function laranja(){
   //quando adicionamos uma class, precisamos remover as outras
   limpar();
    document.getElementById("subtitulo").classList.add('laranja');
}
function limpar(){
    document.getElementById("subtitulo").classList.remove('azul');
    document.getElementById("subtitulo").classList.remove('vermelho');
    document.getElementById("subtitulo").classList.remove('verde');
    document.getElementById("subtitulo").classList.remove('laranja');
}
function mostrarTelefone(element){
    element.style.display = 'none';
    document.getElementById("telefone").style.display = 'block';
    document.getElementById("ocultartelefone").style.display = 'block';
}
function ocultarTelefone(element){
    element.style.display = 'none';
    document.getElementById("telefone").style.display='none';
    document.getElementById("mostrartelefone").style.display = 'block';
}