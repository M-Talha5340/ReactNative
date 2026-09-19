let products = [{
    name:"Harpic",qty:12
},{
    name:"Tang",qty:0
},{
    name:"Harpic",qty:12
},{
    name:"Orange",qty:12
},
]
const show_prod=products => products.qty>0?"Available":"Out of Stock";
console.log(show_prod(products));

let prices = [{
    name:"Harpic",qty:12,price:120
},{
    name:"Tang",qty:0,price:120
},{
    name:"Harpic",qty:12,price:120
},{
    name:"Orange",qty:12,price:120
},
]
let calbill = prices =>{
    let sum = 0; 
    for (let i in prices){
         sum += prices[i].price * prices[i].qty;
     }
    return sum; 
}
console.log("\nTotal bill ="+calbill(prices));

let fullname = (firstname,lastname)=>{
     console.log("\n"+firstname + " "+ lastname);
}
fullname("Muhammad","Talha");

let rating = [{
    name:"Harpic",qty:2,rating:5.0
},{
    name:"Harpic",qty:0,rating:2.0
},{
    name:"Harpic",qty:12,rating:5.0
},{
    name:"Harpic",qty:12,rating:2.0
},
]
const avg_rating = reviews=>{
     let sum = 0.0;
     for(let i of reviews){
        sum += i.rating;
     }
     return sum / reviews.length;
}
console.log("\nAverage Rating:"+avg_rating(rating));

let emp = [
    {
        name:"Talha",
        id: 101,desgination:"Senior Software Engineer"
    },
    {
        name:"Nouman",
        id: 102,desgination:"Senior Instructor"
    },
    {
        name:"Talha",
        id: 103,desgination:"Junior Instructor"
    },
]
const search_emp = id =>{
    for(let person of emp){
        if(person.id == id){
            return person;
        }
    }
    return "Not Found";
}
let employee = search_emp(101);
console.log(`\n Name : ${employee.name} Designation : ${employee.desgination}`); 

let settings = ["email","sms","push"];
const change_settings = (userchoice1,userchoice2)=>{
    for(let item in settings){
      
        if(settings[item] == userchoice1){
           settings[item] = userchoice2;
           break;
        }                
    }
}
change_settings("email","watsapp")
change_settings("sms","facebook")
console.log("\n"+settings);
