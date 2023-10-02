function Object(name, src, views) {
  this.name = name;
  this.src = src;
  this.views = 0;
}

function getRandomIndex() {
  return Math.floor(Math.random() * allObjects.length);
}

const allObjects = [
  new Object("Bag", "./img/bag.jpg"),
  new Object("Banana", "./img/banana.jpg"),
  new Object("Bathroom", "./img/bag.jpg"),
  new Object("Boots", "./img/boots.jpg"),
  new Object("Breakfast", "./img/breakfast.jpg"),
  new Object("Bubblegum", "./img/bubblegum.jpg"),
  new Object("Chair", "./img/chair.jpg"),
  new Object("Cthulhu", "./img/bag.jpg"),
  new Object("Dog Duck", "./img/dog-duck.jpg"),
  new Object("Dragon", "./img/dragon.jpg"),
  new Object("Pen", "./img/pen.jpg"),
  new Object("Pet Sweep", "./img/pet-sweep.jpg"),
  new Object("Scissors", "./img/scissors.jpg"),
  new Object("Shark", "./img/shark.jpg"),
  new Object("Sweep", "./img/sweep.jpg"),
  new Object("TaunTaun", "./img/tauntaun.jpg"),
  new Object("Unicorn", "./img/unicorn.jpg"),
  new Object("Water Can", "./img/water-can.jpg"),
  new Object("Wine Glass", "./img/wine-glass.jpg"),
];
