'use strict';


// Пременные ES6
for (let i = 0; i <= 10; i++) {
  console.log(i)
}

// Стрелочные функции
const cleanPhoneNumber = phone => phone.replace(/-/g, '')
console.log(cleanPhoneNumber('8-962-915-55-86'))

const anythingToLowerCase = anything => {
  if (!anything) {
    anything = ''
  }
  return anything.toLowerCase()
}
console.log(anythingToLowerCase('MaKe Me LoWeR pLeAsE'))

// Шаблонные строки 
const Pi = `Число Pi равно ${Math.PI}`
console.log(Pi)

// Промисы
const sleep = time => {
  return new Promise(resolve => {
    const data = `I'm waking up`
    
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}

console.log(sleep(1000))