let cookieCount = 0;
let autoClickerCount = 0;

const auraParticles = ["particle2.png","autistic.png"]
const cookieButton = document.getElementById('cookieButton');
const cookieCountDisplay = document.getElementById('cookieCount');
const autoClickerCountDisplay = document.getElementById('autoClickerCount');
const buyAutoClickerButton = document.getElementById('buyAutoClicker');

cookieButton.addEventListener('click', (event) => {
  createParticle(event.clientX,event.clientY)
  cookieCount++;
  cookieCountDisplay.textContent = cookieCount + " Jers";
});

function buyAutoClicker(num){
  if (cookieCount >= 100*num) {
    cookieCount -= 100*num;
    autoClickerCount += num;
    cookieCountDisplay.textContent = cookieCount + " Jers";
    autoClickerCountDisplay.textContent = autoClickerCount;
  } else {
    cookieButton.style.backgroundImage = "url(\"error.png\")"
    setTimeout(() => {
      cookieButton.style.backgroundImage = "url(\"Jer.png\")"
    }, 400)
  }
}

function buyAutoClickerMax(){
  var max = Math.floor(cookieCount/100)
  buyAutoClicker(max)
}

function createParticle(x,y) {
  const container = document.querySelector('.body');
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = x - 50 - container.getBoundingClientRect().left + 'px';
  particle.style.top = y - 50 - container.getBoundingClientRect().top + 'px';
  container.appendChild(particle);
  setTimeout(() => {
      container.removeChild(particle);
  }, 5000);
}

function getRandomImage(){
  index = Math.floor(Math.random()*1.9)
  return auraParticles[index]
}

function createRandomParticle() {
  const container = document.querySelector('.body');
  const particle = document.createElement('div');
  var x = Math.floor(Math.random() * container.getBoundingClientRect().right) 
  var y = Math.floor(Math.random() * container.getBoundingClientRect().bottom) 
  particle.className = 'particle';
  particle.style.left = x - container.getBoundingClientRect().left + 'px';
  particle.style.top = y - container.getBoundingClientRect().top + 'px';
  particle.style.zIndex = 0
  particle.style.backgroundImage = "url(\""+getRandomImage()+"\")"
  particle.style.opacity = 0
  container.insertBefore(particle,document.getElementsByClassName("container")[0]);
  setTimeout(() => {
      container.removeChild(particle);
  }, 5000);
}


setInterval(() => {
  cookieCount += autoClickerCount;
  cookieCountDisplay.textContent = cookieCount + " Jers";
  for (let i = 0; i < Math.min(autoClickerCount,80); i++) {
    createRandomParticle()
  }
}, 1000);

function getRandomSize() {
  return Math.floor(Math.random() * 10) + 2; // Random size between 2px and 12px
}