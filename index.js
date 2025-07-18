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