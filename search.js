const products = [
    {name: 'iphone 13', price: 90000 },
    {name: 'samsung galaxy 7', price: 50000 },
    {name: 'apple watch', price: 20000 },
    {name: 'smart watch samsung', price: 7000 },
    {name: 'Asus laptop', price: 50000 },
    {name: 'dell laptop', price: 40000 },
    {name: 'hp laptop', price: 45000 }
];

function searchProducts (products,searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }
    }
    return result;
}
const matched = searchProducts(products,'phone');
console.log(matched);