var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menu-icon")

menuicon.addEventListener("click", function(){
    sidenav.style.right= 0
})

var menux = document.getElementById("menux")

menux.addEventListener("click",function(){
    sidenav.style.right= "-50%"
})

// Product Search functionality

var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count = 0 ; count < productlist.length ; count++) {

        productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)< 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})