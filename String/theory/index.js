const name1 = 'Dima'
const name2 = 'Dimas'
const name3 = `Dimich`

console.log(name1, name2, name3)

// Конкатинация(объединение строк)
const name = 'Dima'
const profession = 'JavaScript-разработчик'

const allInfo = `${name} ${profession}`
console.log('allInfo', allInfo)

//length - длина строки

const programmingLanguage = 'JavaScript 123'
console.log(programmingLanguage.length) // 14

console.log(programmingLanguage[100]) // undefined

programmingLanguage[0] = 'j' // нельзя менять значение строки через индекс

console.log('programmingLanguage', programmingLanguage)
