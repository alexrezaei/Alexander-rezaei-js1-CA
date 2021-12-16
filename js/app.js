const results = document.querySelector(".results");
const loader = document.querySelector(".loader");

const MaxPokemons = 50;

async function fetchPoke() {
  for (let i = 1; i <= MaxPokemons; i++) {
    await getPoke(i);
  }
}

fetchPoke();

async function getPoke(id) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const json = await response.json();
    const pokemon = json;
    loader.classList.remove("loader");
    results.innerHTML += `
    <div class="card">
      <div class="image">
        <img src="${json.sprites.front_shiny}">
      </div>
      <div class="text">
      <p class="id">#${id}</p>
      </div>
      <p class="name">${json.name}</p>
      <a href="details.html?id=${id}">Browse</a>
    </div>
    `;
  } catch (err) {
    results.innerHTML = `Error: ${err}`;
  }
}
