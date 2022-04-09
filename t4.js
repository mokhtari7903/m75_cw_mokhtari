 function weekday(date){
    let test = date.getDay();
    return test === 5 || test === 4;
 }
 let date = new Date(2022, 4, 9,16,8)
 console.log(weekday(date));
 console.log(date.getDay());
 console.log(date);

 let date1 = new Date(2022,1,9,15,0);

let date2 = new Date(2022,1,9,15,49);



function difDate(date1, date2){
    let d1 = date1.getTime();
    let d2 = date2.getTime();
    let difDay = (d2 - d1) / (24*3600*1000);

    return difDay;
}
console.log(difDate(date1, date2));

function dateYDay(dateO){
    const date = new Date(dateO);
    let d = date.getDate();
    date.setDate(d - 1)
    let m = date.getMonth();
    date.setMonth(m - 1);
    let pMonth = date.getMonth() + 1;
    date.setMonth(m + 1);
    let nMonth = date.getMonth() + 1


    return {
        yesterday: date.getDate(),
        previousMonth: pMonth ,
        nextMonth: nMonth,
    }
}
console.log(dateYDay(date));

function dayDate(date){
    let num = date.getDate();
    let num1 = num / 10;
    let num2 = Math.floor(num1)

    let result = `${num2}${num - num2 * 10} `;
    return result; 
}
console.log(dayDate(date));
function hourAMPM(date){
    let hour = date.getHours();
    let minut = date.getMinutes();
    if(minut < 10){
        minut = `0${minut}`
    }
    
    let m ='AM';
    let hourN = hour
    if(hour > 12 ){
        hourN = (hour - 12);
         m = 'PM';
    } 
    return `${hourN}:${minut}${m}`;
     

}

console.log(hourAMPM(date));
function difDateMin(date1, date2){
    let d1 = date1.getTime();
    let d2 = date2.getTime();
    let dif = d2 -d1;
    return dif / (60 * 1000)
}
console.log(difDateMin(date1, date2));
