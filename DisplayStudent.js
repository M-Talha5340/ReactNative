let std_array = [{
    name : "Talha",
    age : 21,
    cgpa : 3.88 
 },
   {
    name : "Ali",
    age : 21,
    cgpa : 3.85 
 },
 {
    name : "Usman",
    age : 21,
    cgpa : 3.81 
 },
 {
    name : "Kashir",
    age : 19,
    cgpa : 3.68 
 },
]
   
std_array.forEach(element => {
    console.log(element);
});
let high = std_array[0];
std_array.forEach(element => {
    if (element.cgpa > high.cgpa){
        high = element;
    }    
});
console.log("HIGH CGPA Student:",high);