let btn = document.getElementById("btn");
let elems = document.getElementsByClassName("r");
let index = 0;
let params = [["12", "Хочу видеть крупный"], ["20", "Хочу видеть мелкий"]];
changeSize();
btn.onclick = changeSize;

function changeSize() {
    for (let e of elems)
        e.style.fontSize = params[index][0] + "pt";

    btn.value = params[index][1] + " шрифт";
    index = +!index;
}