//@prepros-append script.offline.js
let swsp = document.cookie.split(";");
let url = "http://swspackage.rf.gd";
let varSwsp = [];

//Change the background imahe
function chbg(url) {
    document.querySelector(".app .bg").style.background = 'url(' + url + ') no-repeat center fixed';
    document.querySelector(".app .bg").style.backgroundSize = 'cover';
}

//String to uppercase
function uppercase(str) {
    var splittedEnter = str.split(" ");
    var capitalized;
    var capitalizedResult;
    for (var i = 0; i < splittedEnter.length; i++) {
        capitalized = splittedEnter[i].charAt(0).toUpperCase();
        splittedEnter[i] = capitalized + splittedEnter[i].substr(1).toLowerCase();
    }
    return splittedEnter.join(" ");
}

//Show all the packages from the server
(function () {

    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://swspackage.rf.gd/API/api2.php");
    xhttp.send();


    xhttp.onreadystatechange = function () {


        if (xhttp.readyState == 4 && xhttp.status == 200) {


            let back = xhttp.response;
            back = JSON.parse(back);
            back = back.reverse();
            //Add all to packages

            let el = document.createElement("div");
            let title = document.createElement("p");
            let image = document.createElement("img");
            let add = document.createElement("a");

            for (let i = 0; i < back.length; i++) {
                (function () {
                    document.querySelector(".swspackage .notif").textContent = "";
                    let pgName = back[i];
                    let image = document.createElement("img");
                    let play = document.createElement("a");
                    let box = document.createElement("div");
                    document.querySelector(".swspackage").appendChild(box);
                    box.appendChild(image);
                    box.appendChild(play);

                    //Set up box
                    box.className = pgName;

                    //Set up thumb image
                    image.className = "image";
                    image.setAttribute("src", `${url}/image/${pgName}.jpg`);

                    //Set up the play button
                    play.textContent = "play";
                    play.className = `${pgName} add`;
                    play.setAttribute("onclick", `cloudPlay("${pgName}")`);


                })();


            }


        } else {
            document.querySelector(".swspackage .notif").textContent = "Wait...";
        }


    };


})();
//If the user click the package
function cloudPlay(id) {

    document.querySelector(".audiosrc .pgAudio").setAttribute("src", `${url}/audio/${id}.mp3`);
    document.querySelector(".audiosrc .pgAudio").play();
    document.querySelector(".app .menu-overLay").classList.remove("open");
    document.querySelector(".app .swspackage").classList.remove("open");
    chbg(`${url}/image/${id}.jpg`);

}

