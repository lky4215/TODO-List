const title = document.querySelector("#title");

const clicked_class = "clicked";

/*function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === base_color) {
        title.style.color = other_color;
    } else {
        title.style.color = base_color;
    }
}
*/

function handleClick() {
    title.classList.toggle(clicked_class);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();