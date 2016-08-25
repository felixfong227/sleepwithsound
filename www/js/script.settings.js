//Get data from the cookie
let age = document.cookie.split(";");
for(let i=0;i<age.length;i++){
    let a = age[i];
    if(a.includes("age")){
        let _age = a.split("=").pop();
        console.log(_age);
        //Show the data
        document.querySelector(".app .settings .data").textContent = "Your age: "+_age;

        // Start using the data to do something
        // the following data is according to https://sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need

        if(_age =< 0.3){
            //0-3 month baby

        }




    }else{
        document.querySelector(".app .settings .data").textContent = "Please set your age,so i can take action";
    }
}