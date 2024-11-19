const { index2, text2, typingSpeed } = require("./main");


export function typeText2() {
    const element = document.getElementById("typed-text2");
    if (index2 < text2.length) {
        element.innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(typeText2, typingSpeed);
    }
}
