// let orders = [{customerName:"Ali",item : "Pizza",price: 20000,quantity:2,orderStatus:"pending"},
// {customerName:"Ali",item : "Pasta",price: 200,quantity:3,orderStatus:"delivered"},
// {customerName:"Kashir",item : "Burger",price: 200,quantity:5,orderStatus:"pending"},
// {customerName:"Ahmed",item : "Russian Salad",price: 12000,quantity:2,orderStatus:"delivered"},
// ];
// const show_order = order =>{
//      let price = [];     
//     order.map((element) => {    
//          price.push({customerName:element.customerName,totalBill:element.price*element.quantity})
//     }
//     );
//     return price;
// }
// console.log(show_order(orders));

// console.log("#############2############")
// const show_customer_order = (order,Cname) =>{
//     let total_orders = [];
//      order.map((element) => {    
//           if(element.customerName == Cname){
//           total_orders.push(element);
//           }
         
//     }
//     );
//     return total_orders;
// }
// console.log(show_customer_order(orders,"Ali"));

// console.log("########3######")
// const filter = (order,status) =>{
//        let total_orders = [];
//      order.map((element) => {    
//           if(element.orderStatus == status){
//           total_orders.push(element);
//           }
         
//     }
//     );
//     return total_orders;
// }
// console.log(filter(orders,"delivered"));


// console.log("##########5###########")
// const show_dis = price =>{
//        return price -= (price * 10)/100;
// }
// orders.forEach((element,i,arr) => {
//     if(element.price > 10000){
//         arr[i].price -= (element.price * 10 ) / 100;
//     }
// });
// console.log(orders);

// console.log("############4#########");
// const show_high_sale = orders =>{
//      let high = orders[0];   
//     orders.map(element =>{
//              if(element.quantity > high.quantity){
//                 high = element;
//              }
//        });
//        return high;
// }
// let highest = show_high_sale(orders);
// console.log(`Highest sale product: ${highest.item} , Quantity: ${highest.quantity}`);


let events = [{name : "Ali" ,reg:"123", department : "SE",type : "VIP",payment_status : "Paid",attendance : "Present"},
 {name : "Talha" ,reg:"125", department : "CS",type : "Reg",payment_status : "Pending",attendance : "Absent"},
    {name : "Kashan" ,reg:"126", department : "SE",type : "VIP",payment_status : "Paid",attendance : "Present"},
];

const display = arr =>{
      arr.forEach(element => {
           console.log(`Name : ${element.name}  Reg :${element.reg} Ticket Type : ${element.type} Payment_Status : ${element.payment_status}`)
      });
}

display(events);
console.log("2");
const show = (arr,regNo) => {
    return arr.find(element =>{
        if(element.reg == regNo){
            return  true;
        }
    });     
}

let element = show(events,"126");
 console.log(`Name : ${element.name}  Reg :${element.reg} Ticket Type : ${element.type} Payment_Status : ${element.payment_status}`)

 console.log("3");
const show_unpaid = (arr) => {     
   return arr.filter(element => {
        if(element.payment_status == "Paid"){
             return true;        
        }
    })     
    
}
console.log(show_unpaid(events));

 console.log("4");
 let flag = true;   
const mark = (arr,regNo) => {  
    arr.forEach((element,i,v) => {
        if(element.reg == regNo){
            events[i].attendance = "Present";
            flag = false;            
        }
        
    })     
    
}
mark(events,"125")
if (flag){
    console.log("Not Found");
}
else{
console.log(events);
}


console.log("5");
const summary = arr =>{
    let total = 0;
    let paid = [];
    let unpaid = [];
    let pres = [];
    let abs = [];
    arr.forEach(
        element =>{
            if(element.attendance == "Present"){
                pres.push(element);
            }
            if(element.attendance == "Absent"){
              abs.push(element);
            }
            if(element.payment_status == "Paid"){
               paid.push(element);
            }
            if(element.payment_status == "Pending"){
               unpaid.push(element);
            }
            total += 1;
            

        }

    )
    console.log("Toal : ",total);
    console.log("Toal Present : ",pres);
    console.log("Toal Absent : ",abs);
    console.log("Toal Paid : ",paid);
    console.log("Toal Unpaid : ",unpaid);
}
summary(events);