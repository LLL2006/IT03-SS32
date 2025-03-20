function changeSize(amount) {
    let textElement = document.getElementById("text");
    let currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
    let newSize = currentSize + amount;

    if (newSize >= 10 && newSize <= 50) { 
        textElement.style.fontSize = newSize + "px";
    }
}