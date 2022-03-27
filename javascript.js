function swapStyleSheet(sheet) {
    document.getElementById("stylesheet").setAttribute("href", sheet);
}

function getStyle() {
    style = localStorage.getItem('style')

    if(style == null) {
        localStorage.setItem('style', "light")
    }
    
    if(style == "dark") {
        swapStyleSheet("foundation-dark.css")
    }
}

function swapToRealData() {
    var me = "danieldebassige"
    var place = "gmail.com"

    var location = "East Selkirk, Manitoba"
    var phone = "204-485-4216"

    document.getElementById("location").innerHTML = location
    document.getElementById("phoneNumber").innerHTML = phone
    document.getElementById("mailLink").innerHTML = `${me}@${place}`
    document.getElementById("mailLink").href = `mailto:${me}@${place}`
}

document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById("darkMode");
    if(localStorage.getItem('style') == "dark") {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', function() {
        if(checkbox.checked) {
            swapStyleSheet("foundation-dark.css")
            localStorage.setItem('style', "dark")
        }
        else {
            swapStyleSheet("foundation-light.css")
            localStorage.setItem('style', "light")
        }
    })
})