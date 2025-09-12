let contacts = [
    {
        name : "Ravi",
        phone : 8842379217,
        email : "ravi@gmail.com",

        displayInfo(){
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    },
    {
        name : "Rahul",
        phone : 9087654432,
        email : "rahul@gmail.com",

        displayInfo(){
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    }
];

const {name, phone, email} = contacts[0];
console.log(`(Destructured) ${name} , ${phone} , ${email}`);


console.log(contacts[0].name);
console.log(contacts[0]["phone"]);


contacts.forEach(contact => contact.displayInfo());

function addContacts(...newContacts) {
    contacts.push(...newContacts);
}


addContacts(
    {
        name: "Diya",
        phone: 9092345617,
        email: "diya@gmail.com",
        displayInfo() {
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    },
    {
        name: "Riya",
        phone: 8935171782,
        email: "riya@gmail.com",
        displayInfo() {
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    }
);


contacts.forEach(contact => contact.displayInfo());


let moreContacts1 = [
    {
        name: "Charu",
        phone: 7654321098,
        email: "charu@gmail.com",
        displayInfo() {
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    }
];

let moreContacts2 = [
    {
        name: "Delna",
        phone: 6543210987,
        email: "delnagmail.com", 
        displayInfo() {
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }
    }
];


contacts = [...contacts, ...moreContacts1, ...moreContacts2];

console.log("\nAll Contacts:");
contacts.forEach(contact => contact.displayInfo());

function showContactInfo(city, country) {
    console.log(`Name: ${this.name}, Phone: ${this.phone}, Email: ${this.email}, Location: ${city}, ${country}`);
}


console.log("\nUsing call():");
showContactInfo.call(contacts[0], "chennai", "coimbatore");


console.log("\nUsing apply():");
showContactInfo.apply(contacts[1], ["losangles", "USA"]);


console.log("\nUsing bind():");
let boundShow = showContactInfo.bind(contacts[2], "cannada", "USA");
boundShow();
