const now = new Date();
const list = document.querySelector('p');
const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0); // последний день месяца
const h1 = document.querySelector('h1')
const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const kalendar = () => {
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        let day = document.createElement('span'); // создаем HTML-элемент "день"
        day.textContent = i; // в него вписываем дату дня
        list.appendChild(day) // добавляем в list (список) день
        day.style.margin = "5px" // устанавливаем отступы между днями 
        if (i == now.getDate()) {
            day.style.background = "grey"
        }
    }
    h1.textContent = months[now.getMonth()] + ' ' + now.getFullYear() // пишем месяц и год

    let count = 0
right.addEventListener('click', () => {
    count++
    h1.textContent = months[now.getMonth() + count] + ' ' + now.getFullYear()
})
left.addEventListener('click', () => {
    count--
    h1.textContent = months[now.getMonth() + count] + ' ' + now.getFullYear()
})
}

kalendar()


