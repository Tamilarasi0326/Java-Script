//selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")

//selecting popup box
var popupbox = document.querySelector(".popup-box")

//selecting add popup button
var addpopupbutton = document.getElementById("add-popup-button")

//creating event listener function for add button to show popup
addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelpopup  = document.getElementById("cancel-popup")

//creating event listener function for cancel button in popup
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container, addbook, booktitleinput, bookauthorinput, bookdescriptioninput
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

//creating event listener function for add book button in popup
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}<h2>
                    <h5>${bookauthorinput.value}</h5>
                    <p>${bookdescriptioninput.value}</p>
                    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}