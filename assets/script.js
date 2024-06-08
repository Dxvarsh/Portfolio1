document.querySelector("#data-sidebar-btn").addEventListener('click', function(){
    document.querySelector(".sidebar-info_more").classList.toggle("active")
    document.querySelector(".sidebar").classList.toggle("active")
})

document.querySelector(".ri-moon-line").addEventListener('click', function(){
    document.querySelector(".ri-moon-line").classList.toggle("ri-moon-fill")
    document.querySelector("html").classList.toggle("dark-main")
    document.querySelector("body").classList.toggle("dark-main")
    document.querySelector(".main-content").classList.toggle("dark-avatar-box")
    document.querySelector(".sidebar").classList.toggle("dark")
    document.querySelector(".avatar-box").classList.toggle("dark-avatar-box")
    document.querySelector(".title").classList.toggle("dark-avatar-box")
    document.querySelectorAll(".icon-box").forEach((e)=> e.classList.toggle("dark-avatar-box"))
    document.querySelectorAll(".social-icon-item").forEach((e)=> e.classList.toggle("dark"))
    document.querySelectorAll(".contact-title").forEach((e)=> e.classList.toggle("dark"))
    document.querySelectorAll(".navbar-link").forEach((e)=> e.classList.toggle("dark"))
    document.querySelector(".navbar").classList.toggle("dark")
    document.querySelector(".info_more-btn").classList.toggle("dark-avatar-box")
    document.querySelectorAll(".service-item").forEach((e)=> e.classList.toggle("dark-avatar-box"))
})

let tab =document.querySelectorAll(".tab")
let content = document.querySelectorAll(".content")

content[0].style.display = "block";
tab[0].style.color = "#ffdb70";


tab.forEach(function(tabs, index){
    // console.log(tabs);
    // console.log(index);
    tabs.addEventListener("click", function(){
        // console.log(index);
        udaDo();
        content[index].style.display = "block";
        tab[index].style.color = "#ffdb70";
    })
});

function udaDo(){
    content.forEach(function(texts, index){
        // console.log(texts);
        texts.style.display = 'none';
        tab[index].style.color = '#d6d6d6';
    })
}