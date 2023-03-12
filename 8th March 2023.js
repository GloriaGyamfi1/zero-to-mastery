display = document.getElementById ("display")
// display.innerHTML ="calcus"

for (button of document.getElementsByTagName ("button")) {
    button.addEventListener ("click", function(ev){
      text =  ev.target.innerText
        if (text==="clear") {
            display.innerHTML=""
        }
        else if (text==="=") { 
            display.innerHTML= eval(display.innerHTML)
        }
        else {
            display.innerHTML += text  
        }
       

    })
}
