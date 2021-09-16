const divContentElm = document.getElementById("content");

function setup() {
  const firstButton = document.createElement("button");
  const secondButton = document.createElement("button");
  const ulElm = document.createElement("ul");

  firstButton.textContent = "click me";
  secondButton.textContent = "click me too";
  ulElm.id = "list";

  divContentElm.appendChild(firstButton);
  divContentElm.appendChild(secondButton);
  divContentElm.appendChild(ulElm);

  firstButton.addEventListener("click", createGallery);
  secondButton.addEventListener("click", createGallery);
}

function createGallery() {
  const getUlElm = document.getElementById("list");
  const liElm = document.createElement("li");
  const imgEl = document.createElement("img");
  const h3El = document.createElement("h3");

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      imgEl.src = data.message;
      liElm.appendChild(imgEl);
      getUlElm.appendChild(liElm);
    })
    .catch((err) => {
      h3El.textContent = "Error loading the image";
      getUlElm.appendChild(h3El);
    });
}

window.onload = setup();
