var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menu-icon")

menuicon.addEventListener("click", function(){
    sidenav.style.right= 0
})

var menux = document.getElementById("menux")

menux.addEventListener("click",function(){
    sidenav.style.right= "-50%"
})