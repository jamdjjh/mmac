// Open and close the sidebar on medium and small screens
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Change style of top container on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTop").classList.add("w3-card-4", "w3-animate-opacity");
        document.getElementById("myIntro").classList.add("w3-show-inline-block");
    } else {
        document.getElementById("myIntro").classList.remove("w3-show-inline-block");
        document.getElementById("myTop").classList.remove("w3-card-4", "w3-animate-opacity");
    }
}

// Accordions
function myAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme";
    } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-theme", "");
    }
}

$(function() {
    $.getJSON("menus.json", function(menus) {
        var sidebar = document.getElementById("mySidebar");
        for (i in menus) {
            var bar_item = document.createElement("a");
            bar_item.className = "w3-bar-item w3-button";
            bar_item.href = menus[i].link;
            if (window.location.pathname.endsWith(menus[i].link)) {
                var intro = document.getElementById("myIntro");
                intro.innerText += menus[i].menu_name;
                bar_item.className += " w3-theme";
            }
            bar_item.appendChild(document.createTextNode(menus[i].menu_name))
            sidebar.appendChild(bar_item);
        }
    })
});