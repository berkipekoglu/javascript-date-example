
const isimFunc = function(){
    const kAdi = prompt('Kullanıcı Adı','adınızı giriniz..');
    document.getElementById('name').innerHTML = "<strong>" + kAdi + "</strong>";
}

function loaded(){
    const dateNow = new Date();
    const getMonth = dateNow.getMonth();
    const getDate = dateNow.getDate();
    const getHours = dateNow.getHours();
    const getMinutes = dateNow.getMinutes();
    const getSeconds = dateNow.getSeconds();
    const getDay = dateNow.getDay();
    


    function edited(day){

        let dateDetail = document.getElementById('dateDetail').innerHTML = `
        <strong class="h1">${getHours<10?"0"+getHours:getHours}:${getMinutes<10?"0"+getMinutes:getMinutes}:${getSeconds<10?"0"+getSeconds:getSeconds} ${day}</strong>
        
        `;
    }

    switch (getDay){
        case 1:
            edited("Pazartesi");
            break;
        
        case 2:
            edited("Salı");
            break;

        case 3:
            edited("Çarşamba");
            break;

        case 4:
            edited("Perşembe");
            break;

        case 5:
            edited("Cuma");
            break;

        case 6: 
            edited("Cumartesi");
            break;

        case 7:
            edited("Pazar");
            break;
    }

    
}

window.setInterval(loaded, 1000);


/*

getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()

*/