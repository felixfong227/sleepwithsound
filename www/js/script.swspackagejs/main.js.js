"use strict";function chbg(e){document.querySelector(".app .bg").style.background="url("+e+") no-repeat center fixed",document.querySelector(".app .bg").style.backgroundSize="cover"}function uppercase(e){for(var t,o=e.split(" "),n=0;n<o.length;n++)t=o[n].charAt(0).toUpperCase(),o[n]=t+o[n].substr(1).toLowerCase();return o.join(" ")}function cloudPlay(e){document.querySelector(".audiosrc .pgAudio").setAttribute("src",url+"/audio/"+e+".mp3"),document.querySelector(".audiosrc .pgAudio").play(),document.querySelector(".app .menu-overLay").classList.remove("open"),document.querySelector(".app .swspackage").classList.remove("open"),chbg(url+"/image/"+e+".jpg")}var swsp=document.cookie.split(";"),url="http://swspackage.ml",varSwsp=[];!function(){var e=new XMLHttpRequest;e.open("GET","http://swspackage.ml/API/test.php"),e.send(),e.onreadystatechange=function(){4==e.readyState&&200==e.status?!function(){var t=e.response;t=JSON.parse(t),t=t.reverse();for(var o=(document.createElement("div"),document.createElement("p"),document.createElement("img"),document.createElement("a"),function(e){!function(){document.querySelector(".swspackage .notif").textContent="";var o=t[e],n=document.createElement("img"),c=document.createElement("a"),r=document.createElement("div");document.querySelector(".swspackage").appendChild(r),r.appendChild(n),r.appendChild(c),r.className=o,n.className="image",n.setAttribute("src",url+"/image/"+o+".jpg"),c.textContent="play",c.className=o+" add",c.setAttribute("onclick",'cloudPlay("'+o+'")')}()}),n=0;n<t.length;n++)o(n)}():document.querySelector(".swspackage .notif").textContent="Wait..."}}();
"use strict";var offlineNotifNode=document.querySelector(".offlineNotif p"),offlineNotif=document.querySelector(".offlineNotif");setInterval(function(){navigator.onLine?(document.querySelector(".icon.package").classList.remove("offline"),offlineNotif.classList.remove("show")):(document.querySelector(".icon.package").classList.add("offline"),offlineNotif.classList.add("show"),offlineNotifNode.textContent="You are offline now")},1e3);
