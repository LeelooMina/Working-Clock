let date = new Date();
let hoursPage = document.getElementById("hours");
let minutesPage = document.getElementById("mins");
let secondsPage = document.getElementById("seconds");
let amPmPage = document.getElementById("amPm");

let amPm = "AM";

//Gets hours, minutes, seconds and updates clock.

function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    amPm = "AM";


 
    hours = testHours(hours);
    seconds = testSeconds(seconds);
    minutes = testMinutes(minutes);



    hoursPage.innerText = hours;
    minutesPage.innerText = minutes;
    secondsPage.innerText = seconds;
    amPmPage.innerText = amPm;
}



//Change 24 hours to 12 - does not check if time is in 24 hour format

function fixHours(num){
    num = num - 12;
    return num;
}

//Fixes hours formatting to 12 hour clock. 
//Adds 0 if hours is single digit number
// Changes amPm to PM if past noon

function testHours(hourTest){
    if(hourTest === 0){
        hourTest = 12
    }

    if(hourTest > 12) {
        hourTest = fixHours(hourTest)
        amPm = "PM";
    }
    
    if(hourTest < 10){
        hourTest = "0" + hourTest
    }

    return hourTest;

}

//Adds 0 if minutes is single digit number

function testMinutes(minTest){
    if(minTest < 10){
        minTest = "0" + minTest
    }
return minTest;

}

///Adds 0 if minutes is single digit number

function testSeconds(secTest){
    if(secTest < 10){
        secTest = "0" + secTest
    }
return secTest;

}

//Updates time every second
setInterval(function () {
    showTime();
}, 1000);