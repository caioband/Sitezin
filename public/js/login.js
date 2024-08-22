var lockerSvg = document.getElementById("lockerSVG")
var InputPass = document.querySelector(".password")
//

var Hidden = true

lockerSvg.onclick = function(){
    console.log(lockerSvg.getAttribute("style"))
    if (Hidden){
        Hidden = false
        lockerSvg.setAttribute("style", "fill: rgb(0, 0, 0)")
        InputPass.setAttribute("type", "text")
    }else{
        Hidden = true
        lockerSvg.setAttribute("style", "fill: rgb(255, 255, 255)")
        InputPass.setAttribute("type", "password") 
    }
}   
