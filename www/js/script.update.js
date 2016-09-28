let localVersion = [];
let removeVersion = [];
let success = [];

var xhttp = new XMLHttpRequest();


// Get localVersion
(function () {


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let back = xhttp.responseXML.querySelector("widget").getAttribute("version");
            localVersion.push(back);
            success.push(true);


            // When after geting the local versoin the fire up to check the remote version

            // Get removeVersion
            (function () {

                xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        let back = xhttp.responseXML.querySelector("widget").getAttribute("version");
                        removeVersion.push(back);
                        success.push(true);

                        let ok = success.length;
                        if(ok <= 2){

                            if(localVersion < removeVersion && localVersion != ""){

                                let div = document.createElement("div");
                                document.querySelector(".app").appendChild(div);
                                div.className = "updateNotif";
                                div.innerHTML = `
                                    New Update Available<br>
                                    Cirent Version: <b>${localVersion}</b><br>
                                    Latest Version: <b>${removeVersion}</b> 
                                `;
                                //When user click the link will send the users to update the app
                                div.addEventListener("click", () => {
                                    window.open("http://cpaana.rf.gd/swsupdate");
                                });

                            }

                        }

                    }
                };
                xhttp.open("GET", "https://rawgit.com/moongod101/sleepwithsound/master/config.xml", true);
                xhttp.send();

            })();


        }
    };
    xhttp.open("GET", "../../config.xml", true);
    xhttp.send();


})();




