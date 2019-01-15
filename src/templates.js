const greet = (name) => console.log(`Hello  ${name}`.toUpperCase());

greet(`Bill`);

const createEmail = (to, from, subject, message) => {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
};

createEmail('john@gmail.com', 'max@gmail.com', 'Hello', 'How r u doing?');

const add = (x, y) => console.log(`${x} + ${y} = ${x + y}`);

add(5,2);

let name = 'Bill';

const upperName = (literals, ...values) => {
    return literals[0] + values[0].toUpperCase();
};

console.log(upperName`Hello ${name}`);