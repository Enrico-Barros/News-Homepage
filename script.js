const show_btn = document.getElementById ("show")
const close_btn = document.getElementById ("close")
const side_menu = document.querySelector (".side_menu")
const shade = document.querySelector (".shade")
const body = document.querySelector ("body")

show_btn.addEventListener("click", () => {
    side_menu.classList.add("open_side_bar")
    shade.classList.add("open_shade")
    body.classList.add("lock")
})

close_btn.addEventListener("click", () => {
    side_menu.classList.remove("open_side_bar")
    shade.classList.remove("open_shade")
    body.classList.remove("lock")
})

