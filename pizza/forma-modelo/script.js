let modalKey = 0;
bonecoJson.map((i, index)=>{
    let bonecoItem = document.querySelector('.forma .boneco-item').cloneNode(true);
    bonecoItem.setAttribute('data-key', index);
    bonecoItem.querySelector('.boneco-item--name').innerHTML = i.name;
    bonecoItem.querySelector('.boneco-item--price').innerHTML = `RS ${i.price.toFixed(2)}`;
    bonecoItem.querySelector('.boneco-item--desc').innerHTML = i.description;
    bonecoItem.querySelector('.boneco-item--img img').src = i.img;
    

//ADICIONAR O EVENTO DE CLICK EM a addEventListener
// para exibir o modal tem que dar um display no window area do html
    bonecoItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.closest('.boneco-item').getAttribute('data-key');
        modalKey = key;

        document.querySelector('.bonecoWindowArea').style.opacity = 0;
        document.querySelector('.bonecoWindowArea').style.display = 'flex';
        setTimeout(()=>{
        document.querySelector('.bonecoWindowArea').style.opacity = 1;
        }, 200);
});

    document.querySelector('.boneco-area').append(bonecoItem);
});
//TARGET = ALVO OU OBJETO ALVO
//CLOSEST = MAIS PRÓXIMO
//PREVENT DEFAULT = EVITA PADRÃO















//1. MAPEAR A LISTA DE BONECOS
//bonecoJson.map((i, index)=>{
//2. CLONANDO O MODELO (FORMA HTML)
////////let bonecoItem = document.querySelector('.forma .boneco-item').cloneNode(true);
//4. AINDA NÃO EXIBI NADA
//5. OS ITENS JÁ FORAM MAPEADOS(ENCONTRADOS). CHAMAR ELES PRA TELA (no html COM NOME JSON)
// O .forma deve estar com display:none e o .boneco-item a com display:flex;
    ////////bonecoItem.querySelector('.boneco-item--name').innerHTML = i.name;
    ////////bonecoItem.querySelector('.boneco-item--price').innerHTML = `R$ ${i.price.toFixed(2)}`;
    ////////bonecoItem.querySelector('.boneco-item--desc').innerHTML = i.description;
    ////////bonecoItem.querySelector('.boneco-item--img img').src = i.img;
    //3.LUGAR ONDE IRA EXIBIR OS CLONES
      //document.querySelector('.boneco-area').append( bonecoItem );//o append é diferente do innerHTML QUE SUBSTITUI. 
//});


/*
MAPEAR
CLONAR
ONDE IRÁ EXIBIR
EXIBIR*/





