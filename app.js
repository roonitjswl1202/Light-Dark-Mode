let Btn = document.querySelector(".button");
let body = document.querySelector("body");
let light = true;

Btn.addEventListener("click" , () => {
    if(light ==  true){
        light = false;
        body.classList.add("black");
        body.classList.remove("light");// Remove the black class
        Btn.innerText = "Dark";

    } else{
        light = true; 
        body.classList.add("light");
        body.classList.remove("black");// Remove the light class  
        Btn.innerText = "Light";
    }

    console.log(light);
});

