const text1 = "Eu sou Patrick Goulart!"; // Primeiro texto
const text2 = "Desenvolvedor Web Front-end."; // Segundo texto
const typingSpeed = 100; // Velocidade de digitação em milissegundos

let index1 = 0; // Índice do primeiro texto
let index2 = 0; // Índice do segundo texto

function typeText1() {
  const element = document.getElementById("typed-text");
  if (index1 < text1.length) {
    element.innerHTML += text1.charAt(index1);
    index1++;
    setTimeout(typeText1, typingSpeed);
  } else {
    // Inicia a segunda função de digitação após a primeira completar
    setTimeout(typeText2, typingSpeed);
  }
}

function typeText2() {
  const element = document.getElementById("typed-text2");
  if (index2 < text2.length) {
    element.innerHTML += text2.charAt(index2);
    index2++;
    setTimeout(typeText2, typingSpeed);
  }
}

// Inicia o efeito ao carregar a página
window.onload = typeText1;
