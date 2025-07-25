
// an array of object is a collection where each element is an object with properties 
// this uesd to group related data together in a structured way
let details={
    name:"js",
    totalmark:100,
    subject: {
        dbms:100,
        java:100
    },
    //nested object
    sum: function(){
        let total = parseInt(this.subject.dbms + details.subject.java);
        return total;
    }
}
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.sum());
 
// object destructuring is a syntax in javascript that allows you to extract values from object and assign them to variables in a clean and readable way

let person={
    job:"software developer",
    salary:100000
}
const{job,salary}=person
console.log(job+" "+salary);

// arrays

let arr=new Array(1,2,"three");
console.log(arr[2]);

let arr2=["js",true,false];

// array destructuring
const[name,b1,b2]=arr2;
console.log(name)

//filter-returns a new array containing only the elements that match a condition

let student=[
    { Name:"kanikaa",Grade:"O"},
    {Name:"maha",Grade:"D+"},
    {Name:"jesli",Grade:"O+"},
    { Name:"madhu", Grade:"A+"},
]
//console.log(student[0])

let gradestudent = student.filter(student => student.Grade == "O")
console.log(gradestudent);

//splice

let names = [1,2,3,4,5];
names.splice(1,1,40);
console.log(names)
