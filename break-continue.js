const products = [
    {name: 'iphone 13', price: 90000 },
    {name: 'samsung galaxy 7', price: 50000 },
    {name: 'apple watch', price: 9000 },
    {name: 'smart watch samsung', price: 3000 },
    {name: 'Asus laptop', price: 50000 },
    {name: 'dell laptop', price: 40000 },
    {name: 'hp laptop', price: 45000 }
];

// for (const product of products){
//     if(product.price < 5000){
//         break;
//     }
//     console.log(product);
// }

for (const product of products){
    if(product.price < 10000){
        continue;
    }
    console.log(product);
}