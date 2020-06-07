const title = document.querySelector("#title");

const superEventHandler = {

    mouseenter: function () {
        title.innerHTML = "The mouse is here!";
        title.style.color = "red";
    },
    mouseleave: function () {
        title.innerHTML = "The mouse is gone!";
        title.style.color = "blue";
    },
    resize: function () {
        title.innerHTML = "You just resized!";
        title.style.color = "green";
    },
    contextmenu: function () {
        title.innerHTML = "That was a right click!";
        title.style.color = "yellow";
    }

};

title.addEventListener("mouseenter", superEventHandler.mouseenter);
title.addEventListener("mouseleave", superEventHandler.mouseleave);
window.addEventListener("resize", superEventHandler.resize);
title.addEventListener("contextmenu", superEventHandler.contextmenu);
