function pagar(){
let pg = document.getElementById("pg_txt").value;

let cpf = pg.substr(0, 11);
let recolhi = pg.substr(14, 5) ;
let dt_pg = pg.substr(19, 8);
let dt_ra = pg.substr(27, 8);
let no_ref = pg.substr(54, 7);
let ug_arr = pg.substr(61, 6);
let vp = pg.substr(80, 4);
let vt = pg.substr(-4, 4);

document.getElementById("pagamento").innerHTML = 
"<h2>Identificação de Pagamento</h2>"+"</br>"
+"<h2>Função substr</h2>"+"</br>"
+"CPF: "+cpf+"</br>"
+"COD RECOLHIMENTO: "+recolhi+"</br>"
+"DATA DE PAGAMENTO: "+dt_pg+"</br>"
+"DATA DE PROCESSAMENTO RA: "+dt_ra+"</br>"
+"NÚMERO DE REFERÊNCIA: "+no_ref+"</br>"
+"UG ARRECADADORA: "+ug_arr+"</br>"
+"VALOR PRINCIPAL: "+vp+"</br>"
+"VALOR TOTAL: "+vt+"</br>";
}
let nome = "WALLS PEREIRA DA SILVA";
let resultado = nome.split(" ");
document.getElementById("split").innerHTML = 
"<h2>Função Split</h2>"+"</br>"+
resultado[0]+"</br>"+
resultado[1]+"</br>"+
resultado[2]+"</br>"+
resultado[3]+"</br>";

let lista = [100, 25, 64, 4];
let lista2 = [];
lista2 = lista.every(function(item){
    if(item < 4){
        return true;
    }else{
        return false;
    }
});
/*return (item > 3)? true:false;*/

let res = lista2;
document.getElementById("arr").innerHTML =
"<h2>Função every/some</h2> "+res;

let list = [1, 5, 10, 20, 30];
let list2 = [];
list2 = list.map(function(i){
    return i * 2;
    
});
let res2 = list2;
document.getElementById("forth").innerHTML =
"<h2>Função map()</h2> "+res2;
/************************************* */
let list3 = [
    {id:1, nome:'Walls', sobrenome:'P Silva'},
    {id:2, nome:'Victor', sobrenome:'Gandra da Silva'},
    {id:3, nome:'Sandra', sobrenome:'da Silva Gandra'},
    {id:4, nome:'Aurineide', sobrenome:'P Rego da Silva'},
    {id:5, nome:'Ivanildo', sobrenome:'Mauricio da Silva'}
];
let user = list3.find(function(i){
    return (i.id == 2) ? true : false;
});
let res3 = user;
/*//let list4 = [];
    //list4 = list3.find(function(i){
        /*if(i == 33){
            return true;*/
            //return (i.sobrenome == 'P Silva') ? true : false;
        //o findIndex retornará a posição do item específico
        
    //});
//let res3 = list4;*/
document.getElementById("fifth").innerHTML =
"<h2>Function Find</h2> "+Object.values(res3);
// como o resultado é um objeto, para exibir usar o Object.values();

//let d = new Date();//objeto
//let d = new Date(2020, 0, 1, 12, 30, 12);//com parâmetros e padrão de data e hora
//let d = new Date('2020-01-01'); // parâmetro datestring bastante utilizado
let d = new Date();
let res4 = d;
document.getElementById("sixth").innerHTML =
"<h2>Objeto Data</h2> "
//+"<p>toDateString: "+(res4.toDateString())+"</p>";

//+"<p>toString: "+(res4.toString());+"</p>";
//+"<p>toUTCString: "+(res4.toUTCString());+"</p>";//GREENWICH -3
+"<p>Pegar o ano: "+(res4.getFullYear())+"</p>"
+"<p>Pegar o mês: "+(res4.getMonth()+1)+"</p>"
+"<p>Pegar o dia: "+(res4.getDate())+"</p>"//pega o dia atual
+"<p>Pegar a hora: "+(res4.getHours())+"</p>"
+"<p>Pegar os minutos: "+(res4.getMinutes())+"</p>"
+"<p>Pegar os segundos: "+(res4.getSeconds())+"</p>"
+"<p>Pegar os milisegundos: "+(res4.getMilliseconds())+"</p>"
+"<p>ms desde 1/01/1970 00:00 : "+(res4.getTime())+"</p>";
//obs: o JS conta o mês a partir do zero, como em objetos, ou seja, janeiro é mes zero
//o dia da semana começa no domingo e vai até o 6

/*MANIPULAR DATA */
let dt = new Date();
//dt.setFullYear(2022);
//dt.setMonth(11);
//dt.setDate(25);
dt.setDate(dt.getDate() + 15);

let novoValor = dt;
document.getElementById('seventh').innerHTML =
"<h2>MANIPULAR DATAS</h2>"
+"<p>função para utilizar no gerador de PA:</br>"
+"dt.setDate(dt.getDate() + 15):"+"</br>"
+novoValor+"</p>";

/**MATEMÁTICA */
//let novoNumero = Math.round(3.54); 
//let novoNumero = Math.max(100, 200, 258, 5, 1500);//usar o min também
let novoNumero = Math.floor(Math.random() * 100000);
let praBaixo = Math.floor(3.81);
let praCima = Math.ceil(3.81);

let n = novoNumero;
let b = praBaixo;
let c = praCima;
document.getElementById("oito").innerHTML =
"<p>Randômico:</p>"+9+n
+"<p>Arredondamento pra baixo:</p>"+b
+"<p>Arredondamento pra cima:</p>"+c;
/**template string */
let first = 'Sandra';
let age = 45;
let frase = `Meu nome é ${first}, eu tenho ${age+5} anos`;
document.getElementById('onze').innerHTML=
`<h2>Template String: </h2>${frase}`;
/**fim template string */

/**DESCONSTRUIR OBJETO */
let people ={
    name: 'Wilson',
    lastName: 'P Silva',
    old: 40,
    social:{
        facebook:'Wps',
        instagram:'WilPs'
    },
    nomeCompleto: function(){
        return `${this.name} ${this.lastName}`;
    }
};
let { name, lastName, old } = people;
let { facebook, instragram} = people.social;//pegando objeto dentro de objeto
let { social:instagram} = people;//pegando objeto dentro de objeto
document.getElementById('doze').innerHTML = `<h2>Desconstruindo Obj: </h2>${people.social.facebook}`;


/**FIM DESCONSTRUIR OBJETO */
let timer; 
function comecar(){
    timer = setInterval(showTime, 1000);//1s = 1000ms
}

function parar(){
    clearInterval(timer);
}
function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;
    document.querySelector(".relogio").innerHTML=txt;
}
/**SHOW RANDOMICO */
let temporizador;
function play(){
    temporizador = setInterval(showRandom, 1000);//1s = 1000ms
}
function pause(){
    clearInterval(termporizador);
}
function showRandom(){
    let nr = Math.floor(Math.random() * 900000);
    document.querySelector(".dez").innerHTML=
    "<div id=aleatorio>"+nr+"</div>";
}
/**fim randomico */

setTimeout(function(){
    comecar();
}, 5000); // o setTimeout estabelece um tempo para iniciar uma funçao

setTimeout(function(){
    play();
}, 4000);
function stop(){
    clearTimeout();// obs: o stop não deu certo, preciso setar o timer por fora e colocar Timeout numa variavel
}
/**FIM RELÓGIO */

/**ARROW FUNCTION */ //A FLEXA SUBSTITUI OS COLCHETES E O RETURN
//ARROW FUNCTION NÃO USA O THIS
let somar = (x, y) => x + y;
document.getElementById('treze').innerHTML = `ARROW: ${somar(10, 30)}`;

/**FIM ARROW FUNCTION */
let sequencia = [1, 2, 3 , 4 , 5];
let outros = [...sequencia, 6, 7, 8 ,9, 10];
document.getElementById('quatorze').innerHTML = 
`Função Spread: ${outros}`; 

/**function includes */
let palavra = 'Procure por uma letra nessa frase';
document.getElementById('quinze').innerHTML =
`INCLUDES: ${palavra.includes('a')}</br>
 REPEAT: ${'x'.repeat(10)}`;

 /**entries, values e key */
 let homens = ['Carlos', 'José', 'João', 'Pedro'];
 //console.log(Object.entries(homens)); // os dois ao mesmo tempo
 //console.log(Object.values(homens));//['Carlos', 'José', 'João', 'Pedro']
 //console.log(Object.keys(homens)); //["0", "1", "2", "3"]

/**OCULTAR NUMERO DE CARTÃO COM FUNÇAO PADSTART E PADEND */

 let cartao = "5447 3156 3803 6601";
 let lastDigits = cartao.substr(-4); // ou slice
 let cartaoMascara = lastDigits.padStart(16, '*'); //o cartão tem 16 caract e preenche com *
 //console.log(cartaoMascara);
 document.getElementById('dezesseis').innerHTML =
 `CARTÃO MÁSCARA: ${cartaoMascara}`;