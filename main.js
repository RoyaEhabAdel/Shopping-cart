
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    document.getElementById('card').style.display="block";
    
})
closeShopping.addEventListener('click', ()=>{
    document.getElementById('card').style.display="none";
})
document.getElementById('goToCheck').addEventListener('click', ()=>{
    document.getElementById('check').style.display="block";
})

let products = [
    {
        id:1,
        name: 'PRODUCT NAME 1',
        image: '1.jpg',
        price: 500
    },
    {
        id:2,
        name: 'PRODUCT NAME 2',
        image: '2.jpg',
        price: 800
    },
    {
        id:3,
        name: 'PRODUCT NAME 3',
        image: '3.jpg',
        price: 1300
    },
    {
        id:4,
        name: 'PRODUCT NAME 4',
        image: '4.jpg',
        price: 700
    },
    {
        id:5,
        name: 'PRODUCT NAME 5',
        image: '5.jpg',
        price: 590
    },
    {
        id:6,
        name: 'PRODUCT NAME 6',
        image: '6.jpg',
        price: 900
    },

    {
        id:7,
        name: 'PRODUCT NAME 7',
        image: '7.jpg',
        price: 500
    },
    {
        id:8,
        name: 'PRODUCT NAME 8',
        image: '8-.jpg',
        price: 300
    },
    {
        id:9,
        name: 'PRODUCT NAME 9',
        image: '9.jpg',
        price: 400
    },
    {
        id:10,
        name: 'PRODUCT NAME 10',
        image: '10.jpg',
        price: 660
    },
    {
        id:11,
        name: 'PRODUCT NAME 11',
        image: '11.jpg',
        price: 800
    },

    {
        id:12,
        name: 'PRODUCT NAME 12',
        image: '12.jpg',
        price: 750
    },
    {
        id:13,
        name: 'PRODUCT NAME 13',
        image: '13.jpg',
        price: 560
    },
    {
        id:14,
        name: 'PRODUCT NAME 14',
        image: '14.jpg',
        price: 600
    },

    {
        id:15,
        name: 'PRODUCT NAME 15',
        image: '15.jpg',
        price: 700
    },
];

let listCards = [];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `
        list.appendChild(newDiv);
    })
}
initApp();

function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCard.innerHTML='';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key},${value.quantity - 1})"> - </button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key},${value.quantity + 1})"> + </button>
                </div>
            `
            listCard.appendChild(newDiv);
        }
    })
    total.textContent = totalPrice.toLocaleString();
    quantity.innerHTML = count;
}

function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}



