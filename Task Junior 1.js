
let products = [{
    name:"Harpic",qty:12,reorder:5
},{
    name:"Tang",qty:4,reorder:5
},{
    name:"Harpic",qty:2,reorder:3
},{
    name:"Orange",qty:10,reorder :10
},
]
const show_prod = prods =>{
    let reorder_list = [];
    for (let i of prods){
        if (i.qty <= i.reorder){
            reorder_list.push(i);
        }
    }
    return reorder_list;
}

console.log(show_prod(products));

 let emp = [
    {
        name:"Talha",
        id: 101,desgination:"Senior Software Engineer",years:2,rating:4.2
    },
    {
        name:"Nouman",
        id: 102,desgination:"Senior Instructor",years:6,rating:5.0
    },
    {
        name:"Talha",
        id: 103,desgination:"Junior Instructor",years:4,rating:5.0
    },
];

const show_bonus = emp =>{
    let high =[];
    let low = [];
    let no = [];
    for (let i of emp){
        if (i.years >=5 && i.rating >= 4.0){
            console.log(`Name : ${i.name} designation: ${i.desgination} Bonus: High Bonus`)
        }
        else if(i.years < 5 || i.rating < 4.0){
            console.log(`Name : ${i.name} designation: ${i.desgination} Bonus: Low Bonus`)
        }
        else{
    console.log(`Name : ${i.name} designation: ${i.desgination} Bonus: No Bonus`)
        }
    }
    
    
    
    
}

show_bonus(emp);