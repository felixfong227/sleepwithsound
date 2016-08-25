window.onload = () => {
    let app = document.querySelector(".app");
    let campfire = document.querySelector(".audiosrc .campfire");
    let sea = document.querySelector(".audiosrc .sea");
    let audio = document.getElementsByTagName("audio");
    let title = document.querySelector(".app .main .title");
    let bg = document.querySelector(".app .bg");
    let toolbar = document.querySelector(".toolbar");
    let toolbarbox = document.querySelector(".toolbarbox");
    let menuIcon = document.querySelector(".icon.menu");
    let timeIcon = document.querySelector(".icon.time");
    let settingIcon = document.querySelector(".icon.setting");
    let menuOverLay = document.querySelector(".menu-overLay");
    let showTime = document.querySelector(".showTime");
    let setTimePanel = document.querySelector(".app .setTime");
    let saveSetTime = document.querySelector(".app .setTime .ok");
    let settingsPanel = document.querySelector(".app .settings");
    let saveButton = document.querySelector(".app .settings .save");

    //Cur time

    function curTime() {
        let newDate = new Date();
        let date = newDate.toString("hh:mm tt");
        showTime.textContent = date;
    }
    //Init cut time
    curTime();

    setInterval( () => {
        curTime();
    },60000);

    //Stop the contextmenu menu
    app.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    //Pause the audio
    function pauseAudio(){
        var elements = document.getElementsByTagName('audio');
        for (var i=0; i<elements.length; i++) {
            let cn = elements[i];
            cn.pause();
        }
    }

    //Change the background imahe
    function chbg(url){
        bg.style.background = 'url('+url+') no-repeat center fixed';
        bg.style.backgroundSize = 'cover';

        //When after select the audio close the menu
        toolbarbox.classList.remove("open");
        menuOverLay.classList.remove("open");
    }

    //Play the right audio and change the background
    toolbar.addEventListener("click",()=>{
        let info = event.target || event.srcElement;
        let cn = info.className;
        pauseAudio();
        chbg("assets/img/"+cn+".jpg ")
        document.querySelector(".audiosrc ."+cn+"").play();
    });

    //When menu icon click when pop up the audio menu
    menuIcon.addEventListener("click", () => {
        toolbarbox.className += " open";
        menuOverLay.className += " open";
    });

    //Menu over lay click and close the menu
    menuOverLay.addEventListener("click", () => {
        toolbarbox.classList.remove("open");
        menuOverLay.classList.remove("open");
        setTimePanel.classList.remove("open");
        settingsPanel.classList.remove("open");
    });

    //When set time button click open set time panel
    timeIcon.addEventListener("click", () => {
        document.querySelector(".app .setTime .time").focus();
        setTimePanel.classList += " open";
        menuOverLay.classList += " open";
    });

    //When user click done with the time settings
    saveSetTime.addEventListener("click", () => {
        let time = Number(document.querySelector(".app .setTime .time").value) * 60000;
        console.log(time);
        let notif = document.querySelector(".app .setTime .notif");

        if(time==0){
            //Time is empty or less then 1
            notif.textContent = "Time must be bigger then 1 minutes";
            throw false;
        }else if(isNaN(time)){
            notif.textContent = "Time must be some numbers";
            throw false;
        }

        menuOverLay.classList.remove("open");
        setTimePanel.classList.remove("open");
        //Clear the error message
        notif.textContent = "";
        //Set the set tiem to set status
        timeIcon.classList.add("set");

        //Set time
        setTimeout(function(){
            pauseAudio();
            //Remove the set time status
            menuOverLay.classList.remove("open");
            setTimePanel.classList.remove("open");
            timeIcon.classList.remove("set");
            document.querySelector(".app .setTime .time").value = "";
        },time);
    });

    //When the setting click open the setting panel
    settingIcon.addEventListener("click", () => {
        menuOverLay.classList.add("open");
        settingsPanel.classList.add("open");
    });

    //When the user click the save button
    saveButton.addEventListener("click", () => {
        let age = document.querySelector(".app .settings .age").value;
        let sleeptime = document.querySelector(".app .settings .sleeptime").value;
        let data = document.querySelector(".app .settings .data");

        if(!age==''){

            if(!sleeptime==''){
                //All the data is been set all things is good to go

                //Save the age
                document.cookie = "age="+age+"; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/";
                //Save sleep time
                document.cookie = "sleeptime="+sleeptime+"; expires=Thu, 18 Dec 3000 12:00:00 UTC; path=/";
                menuOverLay.classList.remove("open");
                setTimePanel.classList.remove("open");
                settingsPanel.classList.remove("open");


            }else{
                data.textContent = "Please fill in the [Sleep Time] session";
            }


        }else{
            data.textContent = "Please fill in the [Age] session";
        }


    });



};