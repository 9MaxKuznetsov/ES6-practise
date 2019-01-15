const greet = (greeting, name) => {
    console.log(`${greeting} ${name}`);
};

greet('Hi');


const newGreet = (greeting = 'Hello', name = 'friend') => {
    console.log(`${greeting} ${name}`);
}

newGreet('Hi');

const sum = (...values) => {
    console.log(values.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
    }));
};

sum(5, 7, 2);