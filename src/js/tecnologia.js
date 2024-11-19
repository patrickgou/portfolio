const technologies = ["HTML", "JavaScript", "CSS", "Tailwind", "Next.js", "React.js", "Python", "Postgres Sql"];
let techIndex = 0;
const rotationSpeed = 1500; // Tempo de rotação em milissegundos

function rotateText() {
  const element = document.getElementById("rotating-text");
  element.innerHTML = technologies[techIndex];
  
  // Incrementa o índice para mostrar a próxima tecnologia
  techIndex = (techIndex + 1) % technologies.length;
  
  // Chama a função novamente após o tempo definido
  setTimeout(rotateText, rotationSpeed);
}

// Inicia o efeito ao carregar a página
window.onload = rotateText;
