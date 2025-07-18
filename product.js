//selecting side nav,menu icon

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closeNav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closeNav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//product search functionality
var productcontainer=document.getElementById("product-container")
var search=document.getElementById("search")

var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enterValue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count++){
        var productName=productlist[count].textContent.toUpperCase()
        //if the product name does not match the search input, hide it
        if(productName.toUpperCase().indexOf(enterValue)<0){
            productlist[count].style.display="none"
        }else{
            productlist[count].style.display="block"
        }
    }
})