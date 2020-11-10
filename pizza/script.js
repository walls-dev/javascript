//PRIMEIRO VOU MAPEAR A LISTAGEM DE PIZZA(pizzaJson) e fazer uma cópia do Modelo e jogar na tela
// como vou usar bastante o document.querySelector criar uma funçao para diminuir o codigo
let cart = [];
let modalQt = 1;
let modalKey = 0;
const c = (el)=>document.querySelector(el); 
const cs = (el)=>document.querySelectorAll(el);// funçao que manda um elemento execula o doc.query e retorna pra mim ou seja c é o query selector
    


pizzaJson.map((item, index)=>{//map()=>criar uma funçao anonima ou usar funçao sem arrow function com dois parametros: o próprio item( posso chamar do que quiser) e o outro é o index do item
    let pizzaItem = c('.models .pizza-item').cloneNode(true);//clonando o modelo
    //preencher as informações em pizzaItem
    pizzaItem.setAttribute('data-key', index);//***Escolher o nome data para especificar um atributo
    pizzaItem.querySelector('.pizza-item--img img').src = item.img ;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;//item é o nome que escolhi e name está no json;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    //selecionar a tag a e colocar um evento de click nela
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{//recebe o evento em si
        e.preventDefault(); //previne a ação padrão que seria atualizar a tela ao clicar
        //console.log('Clicou na Pizza');AQUI VOU ABRIR O MODAL
        //PARA EXIBIR O MODAL TEMOS QUE COLOCAR UM DISPLAY FLEX NO pizzaWindowArea
        //colocar uma pequena animação com opacity de 0 a 1 antes de abrir o modal
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        c('.pizzaInfo--qt').innerHTML = modalQt;
        //c('.pizzaInfo--size span').innerHTML = pizzaJson[key].sizes;
        //console.log("PEGUEI A PIZZA: "+key);//teste
        //console.log(pizzaJson[key]);//teste
        /**begin animation */
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
        c('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });//end animation
    
    

    c('.pizza-area').append( pizzaItem );//o append é diferente do innerHTML QUE SUBSTITUI
});

//EVENTOS DO MODAL

function closeModal(){
    c('.pizzaWindowArea').style.opacity = 0;
        setTimeout(()=>{
            c('.pizzaWindowArea').style.display = 'none';
        }, 500);
}
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});
c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1){
        modalQt--;
    c('.pizzaInfo--qt').innerHTML = modalQt;
    }
});
c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;
});
cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=>{
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    })
});
c('.pizzaInfo--addButton').addEventListener('click', ()=>{
    // qual a pizza
    //console.log('Pizza: '+modalkey);
    // qual tamanho
    let size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'))    ;
    //console.log("Tamanho: "+size);
    //quantidade
    //console.log("Quantidade: "+modalQt);
    

    let identifier = pizzaJson[modalKey].id+'@'+size;

    let key = cart.findIndex((item)=>item.identifier == identifier);
        
    
    if(key > -1){
        cart[key].qt += modalQt;
    }else{
    cart.push({
        identifier,
        id:pizzaJson[modalKey].id,
        size,
        qt:modalQt
    });
    }
    updateCart();
    closeModal();
});

    c('.menu-openner').addEventListener('click', ()=>{
        if(cart.length > 0){
            c('aside').style.left = '0';
        }
    });
    c('.menu-closer').addEventListener('click', ()=>{
        c('aside').style.left = '100vw';
    });

    function updateCart(){
        c('.menu-openner span').innerHTML = cart.length;

        if(cart.length > 0){
            c('aside').classList.add('show');
            c('.cart').innerHTML = '';

            let subtotal = 0;
            let desconto = 0;
            let total = 0;


            for(let i in cart){
                let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);
                subtotal += pizzaItem.price * cart[i].qt;

                let cartItem = c('.models .cart--item').cloneNode(true);

                let pizzaSizeName;
                switch(cart[i].size){
                        case 0:
                        pizzaSizeName = 'P';
                        break;
                        case 1:
                            pizzaSizeName = 'M';
                            break;
                        case 2:
                            pizzaSizeName = 'G';
                        break;
                }
                let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;
                cartItem.querySelector('img').src = pizzaItem.img;
                cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
                cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
                cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
                    if(cart[i].qt > 1){
                        cart[i].qt--;
                    }else{
                        cart.splice(i, 1);
                    }
                    updateCart();
                });
                cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
                    cart[i].qt++;
                    updateCart();
                });

                c('.cart').append(cartItem);
            }

            desconto = subtotal * 0.1;
            total = subtotal - desconto;

            c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
            c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
            c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
        }else{
            c('aside').classList.remove('show');
            c('aside').style.left = '100vw';
        }
    }
