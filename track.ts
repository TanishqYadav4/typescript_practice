// const userInput = prompt("Please enter multiple values separated by spaces:");
// if (userInput !== null) {
//     const values = userInput.split(" ");
//     console.log("You entered:", values);
// } else {
//     console.log("No input provided.");
// }


class Products {
    productName: string;
    productPrice: number;
    productQuantity: number;
    productID: number;

    constructor(productName: string , productPrice: number , productQuantity: number , productID : number ) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productID = productID;
    }
}

let x : Products[] = [];
const num : number = parseInt(prompt("Enter the number of products you wish to order =  "));
console.log("Please place your order here = ");
for(let i=1;i<=num;i++){
const Name = prompt("Enter product name = ");
const price:number = parseFloat(prompt("Enter product price = "));
const quant:number = parseInt(prompt("Enter product quantity = "));
const prod = new Products(Name,price,quant,i);
x.push(prod);
}

console.log(x);

let flag: boolean = false;
const id:number = parseInt(prompt("Enter the productID to track your order =  "));

for(let order of x){
    if(order['productID']===id){
        console.log("Product Found. On It's Way.");
        console.log("Product Id = " + order['productID'] + "\n " +
                        "Product Name = " +  order['productName'] + "\n " + 
                        "Product Price = "  + order['productPrice'] + "\n  " + 
                        "Product Quantity = " + order['productQuantity']);
        flag = true;
        break;
    }
}

if(flag==false)
console.log("Product Not Found");


