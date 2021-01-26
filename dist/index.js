let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let main = document.querySelector("body")
let text = document.getElementById("1") 

btn1.addEventListener("click", function(){
    console.log("бг 1");
    if (main.classList.contains("bg-2") || main.classList.contains("bg-3") ) {
        main.classList.remove("bg-2");
        main.classList.remove("bg-3");
    }
    main.classList.add("bg-1");
    text.innerHTML = "Крем-брюле и пломбир с малиновым джемом";

    
})
btn2.addEventListener("click", function(){
    console.log("бг 2");
    if (main.classList.contains("bg-1") || main.classList.contains("bg-3") ) {
        main.classList.remove("bg-1");
        main.classList.remove("bg-3");
    }
    main.classList.add("bg-2");
    text.innerHTML = "Шоколадный пломбир и лимонный сорбет ";
})
btn3.addEventListener("click", function(){
    console.log("бг 3");
    if (main.classList.contains("bg-2") || main.classList.contains("bg-1") ) {
        main.classList.remove("bg-2");
        main.classList.remove("bg-1");
    }
    main.classList.add("bg-3");
    text.innerHTML = "Пломбир с помадкой и клубничный щербет";
})
