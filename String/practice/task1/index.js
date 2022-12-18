const myName = 'Dima'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилен Минин'
const reasonText = 'Иметь интересную работу и хорошо зарабатывать'
const numberOfMonth = '0'

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`

console.log(
  myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
)
console.log(myInfoText.length)
console.log(myInfoText[0] + myInfoText[myInfoText.length - 1])
