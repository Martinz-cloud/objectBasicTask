const book = {
	title : "The Great Gatsby",
	author : "F. Scott Fitzgerald",
	yearPublished : 1925
	};

console.log(book.title +"  by  " + book.author +"  ");


const car = {
	brand : "Toyota",
	model : "Camry",
	year : 2021
	};

const getCarAttributes = (data) =>{
	for (let key in data){

console.log(key + ":"+data[key]);
}

};
getCarAttributes(car);


const counter = {
	count : 0 ,
	step : 20
};

function getIncrement(number){
for(let number = 1; number <= counter.step; number++){
	if (number == counter.step){
	console.log("count :" +number)	
	}

	}
};
getIncrement(counter);

const person = {
	firstName : "Martinz",
	lastName :" Asanka"
};

function  getfullName(firstName, lastName){
const name = {dataOne: " ", dataTwo : " "}
console.log(person.firstName +""+ person.lastName);

};
getfullName(person)


const persons = {
	firstNames: "Martinz",
	lastName: "Asanka",
	age : 27
	};
function getperson(persons){

return `first name: ${persons.firstNames},  last name: ${persons.lastName}, age : ${persons.age}`
};
console.log(getperson(persons))