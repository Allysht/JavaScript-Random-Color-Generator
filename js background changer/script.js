const btn = document.getElementById("btn");

function getNewColor() {
    var symbols, color;
    symbols = "0123456789ABCDEF";

    color = "#";

    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16 )];
    }

    document.body.style.background = color;

    document.getElementById("hex").innerHTML = color;
}

btn.addEventListener('click', () => {
    getNewColor();
})

