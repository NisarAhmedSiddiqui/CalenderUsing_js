
const monthEle = document.querySelector(".date h1")

const fullDateEle = document.querySelector(".date p")

const daysEle = document.querySelector(".days")

const monthIndex = new Date().getMonth();

const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex,).getDay() -1;
console.log(firstDay);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

//console.log(months[monthIndex])

monthEle.innerText = months[monthIndex];

fullDateEle.innerText = new Date().toDateString();

let days = "";
for (let i = firstDay; i > 0; i--){
    days += `<div class="empty"></div>`
}

for (let i = 1; i<= lastDay; i++){
    if( i = new Date().getDate()){
        days += `<div class="today">${i}</div>`

    }else{
        days += `<div>${i}</div>`
    }
}

daysEle.innerHTML = days;


