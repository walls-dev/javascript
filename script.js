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
function menuToggle(){
    let menuArea = document.getElementById("menu-area");
    //verificar se contem a classe menu-opened com o contains
    //posso fazer direto com js somente com condiçao if para width (desafio)
    if(menuArea.classList.contains('menu-opened') == true){
        menuArea.classList.remove('menu-opened');
    }else{
        menuArea.classList.add('menu-opened');
    }
}
function fecharMenu(){
    document.getElementById("menu-area").classList.remove('menu-opened');
}
let dia = 7;
let diaNome = "";

switch(dia){
    case 1:
        diaNome = 'Segunda-feira';
        break;
    case 2:
        diaNome = 'Terça-feira';
        break;
    case 3:
        diaNome = 'Quarta-feira';
        break;
    case 4:
        diaNome = 'Quinta-feira';
        break;
    case 5:
        diaNome = 'Sexta-feira';
        break;
    case 6:
    case 7:
        diaNome = 'Final de Semana';
        break;
    default:
        diaNome = 'Dia de Semana';
        break;
}
document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;

//FOR LOOP
//FOR LOOP ARRAY
let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla', 'Uno'];
let html = '<ol>';

    for(let i in carros){
        html+='<li>'+ carros[i] +'</li>'+'</br>';
    }

html += '</ol>';
/*let texto = "";
for(let i = 0; i <= 10; i++){
    texto = texto + i + '</br>';
}*/
document.getElementById("demo").innerHTML = html;