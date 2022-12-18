// toUpperCase, toLowerCase

const animal = 'Lion'
console.log('upper', animal.toUpperCase())
console.log('lower', animal.toLowerCase())

console.log('animal', animal)

// Найти символы - indexOf(находит индекс, если не находит, то -1), includes(булевое значение)
const text = 'Я учусь каждый день'
console.log('indexOf', text.indexOf('учусь')) // 2
console.log('includes', text.includes('каждый')) // true

// Обрезка строки - slice(2 значение, с какого индекса по какой обрезка), substring(работает, как slice)
const nameCat = 'Мурзик'
console.log('slice', nameCat.slice(2, 5)) // рзи
console.log('slice', nameCat.substring(2, 5)) // рзи

// Замена символов в строке - replace(2 значение: 1- строчка, которую заменить, 2- строчка, которую вставить), replaceAll

const language = 'Englishn'
console.log('replace', language.replace('sh', 'ch'))
console.log('replaceAll', language.replaceAll('n', '4'))

// repeat
const donate = 'ya@ti@'
console.log(donate.repeat(3))

// trim - убирает в начале и в конце пробелы
const nameOfUser = prompt('Как тебя зовут?')
console.log(nameOfUser.trim())
