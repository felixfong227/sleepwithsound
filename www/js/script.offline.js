let offlineNotifNode = document.querySelector(".offlineNotif p");
let offlineNotif = document.querySelector(".offlineNotif");

setInterval(function () {


    if (navigator.onLine) {
        // Online
        document.querySelector(".icon.package").classList.remove("offline");
        offlineNotif.classList.remove("show");


    } else {
        // Offline
        document.querySelector(".icon.package").classList.add("offline");
        offlineNotif.classList.add("show");
        offlineNotifNode.textContent = "You are offline now";


    }

}, 1000);