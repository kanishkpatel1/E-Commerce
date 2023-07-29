const mongoose = require('mongoose');
const Product = require('./models/product');


mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    .then(()=>{console.log('DB connected!')})
    .catch(e => console.log(e));

const dummy_products = [
    {
        name: "Iphone 14 Pro",
        img: "https://images.unsplash.com/photo-1688780074342-7dddd9b5f582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTRwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 129999,
        desc: "This product is a rare beauty and its a premium product, GoodLuck !!!"
    },
    {
        name: "Macbook Pro M2",
        img: "https://images.unsplash.com/photo-1675868374249-da10b594b31d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMHBybyUyMG0yfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 187999,
        desc: "This product is a beast machine and highly performabe, Must buy it :)"
    },
    {
        name: "Ipad Mini",
        img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlwYWQlMjBtaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 56000,
        desc: "This product is a cutie and highly portable, slique XD"
        
    },
    {
        name: "Airpods Pro 2",
        img:"https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGklMjB3YXRjaCUyMHVsdHJhJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 24999,
        desc: "This product is highly usable , buy it right now :("
    },
    {
        name: "I watch Ultra",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3nhjIlUqnN5HYAnVGI9IJfWKhi7dW9HjFtw&usqp=CAU",
        price: 79000,
        desc: "This product is a delicate , buy at your own risk !"
        
    },
    {
        name: "Air tag",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWFzLxZRyTHKyaUDNYow9t3RQCQSV8pkVTw&usqp=CAU",
        price: 5000,
        desc: "This product is aaive marzee hai lena hai to (._.)"
    },
    {
    name:'Samsung galaxy',
    img:'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price:100,
    desc:'it is a galaxy m31 phone made in india and ram is 31 and rom is 264 '
},


    {
        name: 'Mackbook Pro',
        img:'https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2tib29rJTIwcHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price:1000,
        desc:'Macbook pro with enhanced new features ,'
    },

    {
        name:'Nike Shoes',
        img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price:200,
        desc:'Powerfull shoes with enhanced features like mountain climbing hill climbing etc'
    },

    {
        name:'OnePlus TWS',
        img:'https://images.unsplash.com/photo-1655560378428-7605bda51749?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price:80,
        desc:'awesome tws with awesome features'
    },

    {
        name:'Knife Set',
        img:'https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtuaWZlJTIwc2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price:50,
        desc:'The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022,'
    },

    {
        name:'Canon Camera',
        img:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price:800,
        desc:'The iPhone 14 was made available on September 16, 2022, and iPhone 14 Plus was made available on October 7, 2022,'
    },

    {
        name:'Drone',
        img:'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        price:1500,
        desc:'It is a high quality drone for takin high quality images with awesome build quality'
    }
];

async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(dummy_products);
    console.log('DB seeded!');
}

seedDB();