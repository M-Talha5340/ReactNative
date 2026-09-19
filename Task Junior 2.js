let orders = [{customerName:"Ali",item : "Pizza",price: 20000,quantity:2,orderStatus:"pending"},
{customerName:"Ali",item : "Pasta",price: 200,quantity:3,orderStatus:"delivered"},
{customerName:"Kashir",item : "Burger",price: 200,quantity:5,orderStatus:"pending"},
{customerName:"Ahmed",item : "Russian Salad",price: 12000,quantity:2,orderStatus:"delivered"},
];
const show_order = order =>{
     let price = [];     
    order.map((element) => {    
         price.push({customerName:element.customerName,totalBill:element.price*element.quantity})
    }
    );
    return price;
}
console.log(show_order(orders));

console.log("#############2############")
const show_customer_order = (order,Cname) =>{
    let total_orders = [];
     order.map((element) => {    
          if(element.customerName == Cname){
          total_orders.push(element);
          }
         
    }
    );
    return total_orders;
}
console.log(show_customer_order(orders,"Ali"));

console.log("########3######")
const filter = (order,status) =>{
       let total_orders = [];
     order.map((element) => {    
          if(element.orderStatus == status){
          total_orders.push(element);
          }
         
    }
    );
    return total_orders;
}
console.log(filter(orders,"delivered"));


console.log("##########5###########")
const show_dis = price =>{
       return price -= (price * 10)/100;
}
orders.forEach((element,i,arr) => {
    if(element.price > 10000){
        arr[i].price -= (element.price * 10 ) / 100;
    }
});
console.log(orders);

console.log("############4#########");
const show_high_sale = orders =>{
     let high = orders[0];   
    orders.map(element =>{
             if(element.quantity > high.quantity){
                high = element;
             }
       });
       return high;
}
let highest = show_high_sale(orders);
console.log(`Highest sale product: ${highest.item} , Quantity: ${highest.quantity}`);