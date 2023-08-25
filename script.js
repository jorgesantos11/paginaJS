const jorgeElement = document.getElementById('jorge');
const stephanieElement = document.getElementById('stephanie');

let jorgeXSpeed = 2;
let jorgeYSpeed = 2;
let stephanieXSpeed = 1.5;
let stephanieYSpeed = 1.5;

let collisionOccurred = false; // Variable para rastrear si ocurrió una colisión

function checkCollision() {
  const jorgeRect = jorgeElement.getBoundingClientRect();
  const stephanieRect = stephanieElement.getBoundingClientRect();

  if (
    jorgeRect.left < stephanieRect.right &&
    jorgeRect.right > stephanieRect.left &&
    jorgeRect.top < stephanieRect.bottom &&
    jorgeRect.bottom > stephanieRect.top
  ) {
    if (!collisionOccurred) {
      alert('Te amo');
      collisionOccurred = true;
    }
  } else {
    collisionOccurred = false; // Reiniciar la variable si no hay colisión
  }
}

function animateNames() {
  const maxX = window.innerWidth - jorgeElement.clientWidth;
  const maxY = window.innerHeight - jorgeElement.clientHeight;

  let jorgeX = parseInt(getComputedStyle(jorgeElement).left);
  let jorgeY = parseInt(getComputedStyle(jorgeElement).top);

  let stephanieX = parseInt(getComputedStyle(stephanieElement).left);
  let stephanieY = parseInt(getComputedStyle(stephanieElement).top);

  jorgeX += jorgeXSpeed;
  jorgeY += jorgeYSpeed;

  stephanieX += stephanieXSpeed;
  stephanieY += stephanieYSpeed;

  if (jorgeX <= 0 || jorgeX >= maxX) {
    jorgeXSpeed *= -1;
  }

  if (jorgeY <= 0 || jorgeY >= maxY) {
    jorgeYSpeed *= -1;
  }

  if (stephanieX <= 0 || stephanieX >= maxX) {
    stephanieXSpeed *= -1;
  }

  if (stephanieY <= 0 || stephanieY >= maxY) {
    stephanieYSpeed *= -1;
  }

  jorgeElement.style.left = jorgeX + 'px';
  jorgeElement.style.top = jorgeY + 'px';

  stephanieElement.style.left = stephanieX + 'px';
  stephanieElement.style.top = stephanieY + 'px';

  checkCollision();

  requestAnimationFrame(animateNames);
}

animateNames();
