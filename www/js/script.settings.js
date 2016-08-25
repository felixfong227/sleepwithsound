// the following data is according to https://sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need

//Get data from the cookie
let age = document.cookie.split(";");
let sleeptime = document.cookie.split(";");

let varAge = [];
let varSleepTime = [];

// Find the age
for(let i=0;i<age.length;i++){
    let a = age[i];
    if(a.includes("age")){
        let _age = a.split("=").pop();
        varAge.push(_age);
        //Show the data
        document.querySelector(".app .settings .age").value = _age;
    }
}

// Find the sleeptime
for(let i=0;i<sleeptime.length;i++){
    let a = sleeptime[i];
    if(a.includes("sleeptime")){
        let _sleeptime = a.split("=").pop();
        varSleepTime.push(_sleeptime);
        //Show the data
        document.querySelector(".app .settings .sleeptime").value = _sleeptime;
    }
}

//Start using the data
varAge = varAge.pop();
varSleepTime = varSleepTime.pop().split(":");

if(varAge >= 1 && varAge <= 2){

    // 1 - 2 years old
    let hour = varSleepTime[0];
    let min = varSleepTime[1];
    if(min > 60 ){
        hour++;
    }

    hour -= 14;

    console.log(hour + min);




}
