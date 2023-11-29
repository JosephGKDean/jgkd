var screen_width = window.screen.width;
var screen_height = window.screen.height;

var mright_bottom = document.getElementById("mright")
var mright_top = document.getElementById("moblie-mright")

    console.log(mright_bottom)

if (screen_width > 320 && screen_width < 480) {
    mright_bottom.remove()
} else {
    mright_top.remove()
}