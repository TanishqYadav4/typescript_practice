// const userInput = prompt("Please enter multiple values separated by spaces:");
// if (userInput !== null) {
//     const values = userInput.split(" ");
//     console.log("You entered:", values);
// } else {
//     console.log("No input provided.");
// }
var Products = /** @class */ (function () {
    function Products(productName, productPrice, productQuantity, productID) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productID = productID;
    }
    return Products;
}());
var x = [];
var num = parseInt(prompt("Enter the number of products you wish to order =  "));
console.log("Please place your order here = ");
for (var i = 1; i <= num; i++) {
    var Name = prompt("Enter product name = ");
    var price = parseFloat(prompt("Enter product price = "));
    var quant = parseInt(prompt("Enter product quantity = "));
    var prod = new Products(Name, price, quant, i);
    x.push(prod);
}
console.log(x);
var flag = false;
var id = parseInt(prompt("Enter the productID to track your order =  "));
for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
    var order = x_1[_i];
    if (order['productID'] === id) {
        console.log("Product Found. On It's Way.");
        console.log("Product Id = " + order['productID'] + "\n " +
            "Product Name = " + order['productName'] + "\n " +
            "Product Price = " + order['productPrice'] + "\n  " +
            "Product Quantity = " + order['productQuantity']);
        flag = true;
        break;
    }
}
if (flag == false)
    console.log("Product Not Found");
