const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

let userClicks = 0;
let maxClicks = 25;

function Object(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
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

function renderObjects() {
  // get 2 rnadom indexes from our goat array
  let object1Index = getRandomIndex();
  let object2Index = getRandomIndex();
  let object3Index = getRandomIndex();

  // prevent the two images being the same goat
  while (
    object1Index === object2Index ||
    object1Index === object3Index ||
    object2Index === object3Index
  ) {
    object1Index = getRandomIndex();
    object2Index = getRandomIndex();
  }

  // change the src and alt of our 2 images
  img1.src = allObjects[object1Index].src;
  img2.src = allObjects[object2Index].src;
  img3.src = allObjects[object3Index].src;
  img1.alt = allObjects[object1Index].name;
  img2.alt = allObjects[object2Index].name;
  img3.alt = allObjects[object3Index].name;

  // increase the goats views
  allObjects[object1Index].views++;
  allObjects[object2Index].views++;
  allObjects[object3Index].views++;
}

function handleImgClick(event) {
  console.log("hello");

  if (userClicks === maxClicks) {
    alert("you have run out of votes");
    renderChart();
    return;
  }

  userClicks++;

  let clickedProduct = event.target.alt;

  for (let i = 0; i < allObjects.length; i++) {
    if (clickedProduct === allObjects[i].name) {
      allObjects[i].clicks++;
      break;
    }
  }
  renderObjects();
}

img1.addEventListener("click", handleImgClick);
img2.addEventListener("click", handleImgClick);
img3.addEventListener("click", handleImgClick);

function showResults() {
  const results = document.getElementById("results");

  for (let i = 0; i < allObjects.length; i++) {
    const li = document.createElement("li");
    const product = allObjects[i];
    li.textContent = `${product.name} was viewed ${product.views} times, and clicked ${product.clicks} times`;
    results.appendChild(li);
  }
}

const viewResults = document.getElementById("view-results");
viewResults.addEventListener("click", showResults);

renderObjects();

function renderChart() {
  const ctx = document.getElementById("myChart");

  const labels = [];
  const views = [];
  const clicks = [];

  for (let i = 0; i > allObjects.length; i++) {
    labels.push(allObjects[i].name);
    views.push(allObjects[i].views);
    clicks.push(allObjects[i].clicks);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 1,
        },
        {
          type: "line",
          label: "# of clicks",
          data: clicks,
          borderWidth: 1,
        },
      ],
    },
  });
}
