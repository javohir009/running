const elForm =document.querySelector(".form")
const elGradus =document.querySelector(".havo")
const elInput =document.querySelector(".input-one")
const elInputtwo =document.querySelector(".input-two")
const elSubmit =document.querySelector(".submit")
const elResult =document.querySelector(".result")


elForm.addEventListener(`submit`, function check(evt){
    evt.preventDefault()

    const valueGradus = elGradus.value

    if(elGradus > 5 || elInputtwo.checked && elInput.checked){
        elResult.textContent = "Ha"
    }else if(valueGradus > 30 || elInput.checked || elInputtwo.checked || valueGradus <= 5){
        elResult.textContent = "Yo'q"
    }
})
