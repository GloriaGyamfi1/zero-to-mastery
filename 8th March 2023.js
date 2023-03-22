display = document.getElementById ("display")
// display.innerHTML ="calcus"
digits= "1234567890"
operands= "+/-*"
for (button of document.getElementsByTagName ("button")) {
    button.addEventListener ("click", function(ev){
      text =  ev.target.innerText
      if (operands.includes(text) && !digits.includes(display.innerHTML.at(-1))) {
        return
      }
        if (text==="clear") {
            display.innerHTML=""
        }
        else if (text==="=") { 
            display.innerHTML= eval(display.innerHTML) || ""
        }
        else {
            display.innerHTML += text  
        }
       

    })
}
