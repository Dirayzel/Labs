function calculateSquare(paragraphId) {
    var paragraph = document.getElementById(paragraphId);
    var number = parseInt(paragraph.innerHTML);
    var square = Math.pow(number, 2);
    paragraph.innerHTML = square;
}