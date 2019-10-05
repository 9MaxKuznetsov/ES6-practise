function applyForVisa(documents) {
    console.log(`Обработка заявлений...`);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve(documents) : reject(`В визе отказано: нехватка документов`);
        }, 1000);
    });

    return promise;
}

function getVisa(visa) {
    console.info(`Виза получена`);
    return new Promise((resolve, reject) => {
        resolve(visa);
    });
}

function bookHotel(visa) {
    console.log(`Бронируем отель`);
    return new Promise((resolve, reject) => {
        reject(`Нет мест`);
    });
}

function buyTickets() {
    console.log(`Покупаем билеты`);
}

applyForVisa({name: 'Max Kuznetsov'})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch((error) => console.error(error));