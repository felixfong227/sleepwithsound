document.addEventListener('DOMContentLoaded', function(){

    let newDate = new Date();
    let date = newDate.toString("HH");

    if(date >= 22){
        document.querySelector(".app .sleepNotif").textContent = "Time to sleep now";
    }

},false);