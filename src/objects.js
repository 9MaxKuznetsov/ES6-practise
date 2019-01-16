let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi! My name is ${firstName} ${lastName}`);
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

console.log(person);
person.sayHello();

let property = 'firstName';
person = {
    [property]: 'Bill'
};

const createCar = (property, value) => {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property];
        }
    };
};

console.log(createCar('vin', 1));