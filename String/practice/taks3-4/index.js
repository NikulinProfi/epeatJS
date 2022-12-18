const userName = prompt('Как Вас зовут?').toLocaleLowerCase().trim()

const userAge = Number(prompt('Сколько Вам лет?').trim())
alert(`Вас зовут ${userName} и вам ${userAge} лет`)
