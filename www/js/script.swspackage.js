let swsp = document.cookie.split(";");
let url = "http://swspackage.ml/";
let xhttp = new XMLHttpRequest();
let varSwsp = [];

//Change the background imahe
function chbg(url){
    document.querySelector(".app .bg").style.background = 'url('+url+') no-repeat center fixed';
    document.querySelector(".app .bg").style.backgroundSize = 'cover';
}

//String to uppercase
function uppercase(str) {
    var splittedEnter = str.split(" ");
    var capitalized;
    var capitalizedResult;
    for (var i = 0 ; i < splittedEnter.length ; i++){
        capitalized = splittedEnter[i].charAt(0).toUpperCase();
        splittedEnter[i] = capitalized + splittedEnter[i].substr(1).toLowerCase();
    }
    return splittedEnter.join(" ");
}

//Find the sws package reqire to pull in
for(let i=0; i<swsp.length; i++){
    let a = swsp[i];
    if(a.includes("swspackage")){
        let packagesList = a.split("=").pop();
        let packages = packagesList.split(",");
        varSwsp = packages;

        // Create assets

        (function(){

            for(let i = 0; i < varSwsp.length; i++){
                let pg = varSwsp[i];

                // Add optiosn to toolbar
                let opt = document.createElement("div");
                opt.className = `${pg} pull`;

                let pgName = uppercase(pg);

                opt.textContent = pgName;

                document.querySelector(".app .toolbarbox .toolbar").appendChild(opt);

            }

        })();
    }
}

//Show all the packages from the server
(function(){


    let xhttp = new XMLHttpRequest();

    xhttp.open("GET","http://swspackage.ml/API/api.php",false);
    xhttp.send();

    let back = xhttp.response;
    back = back.split(",").slice(0, -1);

    //Add all to packages

    let el = document.createElement("div");
    let title = document.createElement("p");
    let image = document.createElement("img");
    let add = document.createElement("a");

    for(let i=0;i<back.length;i++){
        let pgName = back[i];
        el.className = pgName;
        title.textContent = uppercase(pgName);
        add.textContent = "add";
        image.setAttribute("src",`http://swspackage.ml/image/${pgName}.jpg`);
        title.className = "title";
        image.className = "image";
        add.classList = `${pgName} add`;
        el.appendChild(title);
        el.appendChild(image);
        el.appendChild(add);
        document.querySelector(".app .swspackage").appendChild(el);
    }




})();

//If the user click the package
document.querySelector(".swspackage .add").addEventListener("click", () => {
    let el = event.target || event.srcElement;
    el = el.className;
    el = el.replace(" add" ,"");
    document.cookie = `swspackage=${el},; expires=Thu, 18 Dec 3000 12:00:00 UTC`



});