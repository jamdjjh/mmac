$(function() {
    $.getJSON("resources/menus.json", function( menus ) {
        var main = document.getElementById("main-container");

        for (i in menus) {
            if (i == 0) continue;
            var btn = document.createElement("button");
            btn.className = "w3-button w3-card w3-blue";

            btn.onclick = function(ev) { location.href = menus[i].link; };
            btn.appendChild(document.createTextNode(menus[i].menu_name));

            main.appendChild(btn);
        }
    });
});