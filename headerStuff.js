var description = document.getElementById("script")

function changer(){
    if (description.textContent == "Test content 1"){
        description.textContent = "Test content 2"
    }
    else if (description.textContent == "Test content 2"){
        description.textContent = "Test content 1"
    }
    setTimeout(changer,500)
}

changer();