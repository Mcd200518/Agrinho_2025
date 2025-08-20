function setup() {
  createCanvas(800, 600);
}

function draw() {
  // Céu
  background(135, 206, 235);
  
  // Campo (parte inferior)
  fill(34, 139, 34); // Cor verde do campo
  noStroke();
  rect(0, height / 2, width, height / 2);

  // Cidade (parte superior)
  fill(200);
  rect(0, 0, width, height / 2);

  // Divisão entre o campo e a cidade
  stroke(0);
  strokeWeight(2);
  line(0, height / 2, width, height / 2);

  // Adicionando árvores no campo
  drawTree(100, height / 1.5);
  drawTree(300, height / 1.6);
  drawTree(500, height / 1.55);
  drawTree(700, height / 1.6);

  // Adicionando alguns animais no campo
  drawCow(150, height / 1.45);
  drawCow(400, height / 1.5);
  
  // Adicionando prédios na cidade
  drawBuilding(50, 100, 100, 300);
  drawBuilding(200, 50, 120, 350);
  drawBuilding(400, 80, 90, 280);
  drawBuilding(600, 60, 110, 320);
  
  // Adicionando janelas e portas nos prédios
  drawWindowsAndDoors(50, 100, 100, 300);
  drawWindowsAndDoors(200, 50, 120, 350);
  drawWindowsAndDoors(400, 80, 90, 280);
  drawWindowsAndDoors(600, 60, 110, 320);
}

function drawTree(x, y) {
  // Tronco da árvore
  fill(139, 69, 19); // Cor do tronco
  rect(x, y, 20, 50);

  // Folhas da árvore
  fill(0, 128, 0); // Cor das folhas
  ellipse(x + 10, y - 20, 60, 60);
}

function drawCow(x, y) {
  // Corpo da vaca
  fill(255);
  ellipse(x, y, 50, 30);
  
  // Cabeça da vaca
  ellipse(x + 30, y - 10, 30, 20);
  
  // Orelhas
  ellipse(x + 40, y - 15, 10, 15);
  ellipse(x + 20, y - 15, 10, 15);
  
  // Olhos
  fill(0);
  ellipse(x + 35, y - 12, 5, 5);
  ellipse(x + 25, y - 12, 5, 5);
  
  // Pernas
  line(x - 15, y + 15, x - 15, y + 30);
  line(x + 15, y + 15, x + 15, y + 30);
}

function drawBuilding(x, y, w, h) {
  fill(169, 169, 169); // Cor do prédio
  rect(x, y, w, h);
}

function drawWindowsAndDoors(x, y, w, h) {
  // Janelas do prédio
  fill(255, 255, 255);
  for (let i = 0; i < w; i += 30) {
    for (let j = 0; j < h; j += 40) {
      rect(x + i + 10, y + j + 10, 20, 20);
    }
  }
  // Porta do prédio
  fill(139, 69, 19); // Cor da porta
  rect(x + w / 2 - 20, y + h - 50, 40, 50);
}