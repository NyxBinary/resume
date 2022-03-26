function swapStyleSheet(sheet) {
    document.getElementById("stylesheet").setAttribute("href", sheet);
}

document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById("darkMode");

    checkbox.addEventListener('change', function() {
        if(checkbox.checked) {
            swapStyleSheet("foundation-dark.css")
        }
        else {
            swapStyleSheet("foundation-light.css")
        }
    })
})