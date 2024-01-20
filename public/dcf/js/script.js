function getContent(event, con) {
    var y = document.getElementsByClassName("content");
    for(let i = 0; i < y.length; i++) {
        y[i].style.display = "none";    
    }

    var z = document.getElementsByClassName("page");
    for(let i = 0; i < z.length; i++) {
        z[i].className = z[i].className.replace(" active", "");
    }

    document.getElementById(con).style.display = "block";
    event.currentTarget.className += " active";
}
window.addEventListener("load", getContent(event, "intro1"));
