let topUp = document.querySelector(".top")
let serv = document.querySelector(".our-service")


window.onscroll = function(){
    window.scrollY >= serv.offsetTop ? topUp.classList.remove("hide"): topUp.classList.add("hide")

}
console.log(serv.offsetTop)