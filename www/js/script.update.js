var xhttp = new XMLHttpRequest();
let localVersion = "2.2";
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        let back = xhttp.responseXML;
        let remoteVersion = back.querySelector("widget").getAttribute("version");

        if(localVersion < remoteVersion){
            //User need to update

            let div = document.createElement("div");
            document.querySelector(".app").appendChild(div);
            div.className = "updateNotif";
            div.textContent = "New Update Available";
            //When user click the link will send the users to update the app
            div.addEventListener("click", () => {
                window.open("https://build.phonegap.com/apps/2227951/download/android/","_self");
        });
        }

    }
};
xhttp.open("GET", "https://rawgit.com/moongod101/sleepwithsound/master/config.xml", true);
xhttp.send();