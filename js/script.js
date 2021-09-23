window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop >= 50){
        document.getElementById("menu").style.backgroundColor="black"
    }else{
        document.getElementById("menu").style.backgroundColor=""
    }
})