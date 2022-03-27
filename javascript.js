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