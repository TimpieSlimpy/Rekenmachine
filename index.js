let getal1 = document.getElementById("invoer1")
let getal2 = document.getElementById("invoer2")
let operator = document.getElementById("operator")
let berekenen = document.getElementById("berekenen")
let wissen = document.getElementById("wissen")

let antwoord = document.getElementById("antwoord")
let straal = document.getElementById("straal")
let bereken2 = document.getElementById("berekenen2")
let wissen2 = document.getElementById("wissen2")
let cirkelAntwoord = document.getElementById("cirkel-antwoord")
let berekenen3 = document.getElementById("berekenen3")

berekenen.addEventListener("click", () => {
  if(operator.value === "+"){
    antwoord.innerHTML = Number(getal1.value) + Number(getal2.value) 
  }
  else if(operator.value === "*" || operator.value === "x" || operator.value === "X"){
    antwoord.innerHTML = Number(getal1.value) * Number(getal2.value)
  }
  else if(operator.value === ":" || operator.value === "/"){
    antwoord.innerHTML = Number(getal1.value) / Number(getal2.value)
  }
  else if(operator.value === "-"){
       antwoord.innerHTML = Number(getal1.value) - Number(getal2.value)
     }
})

wissen.addEventListener("click", () => {
  getal1.value = "";
  getal2.value = "";
  operator.value = "";
  antwoord.innerHTML = "";
})

berekenen2.addEventListener("click", () => {
  cirkelAntwoord.innerHTML = (Number(straal.value) * Number(straal.value)) * 3.14
})
wissen2.addEventListener("click", () => {
  
  cirkelAntwoord.innerHTML = "";
  straal.value = "";
})

berekenen3.addEventListener("click", () => {
  cirkelAntwoord.innerHTML = (Number(straal.value) + Number(straal.value)) * 3.14
})


