document.addEventListener('DOMContentLoaded', function(){

    let newDate = new Date();
    let date = newDate.toString("HH");
    check();
    setInterval(function(){
        check();
    },60000);

    function check(){
        console.log(date);
        if(date >= 22 || date == "00"){
            document.querySelector(".app .sleepNotif").textContent = "Time to sleep now";
        }
    }

},false);