function getData(url) {
  const divContentEl = document.getElementById("content");
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data);
      const imgEl = document.createElement("img");
      imgEl.src = data.img;
      imgEl.alt = data.alt;
      divContentEl.appendChild(imgEl);
    })
    .catch((err) => {
      //   console.log(err);
      const h3El = document.createElement("h3");
      h3El.textContent = err;
      divContentEl.appendChild(h3El);
    });
}

window.onload = getData("https://xkcd.now.sh/?comic=latest");
