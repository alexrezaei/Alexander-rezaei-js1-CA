const result = document.querySelector(".result");
const loader = document.querySelector(".loader");
const title = document.querySelector("#title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const paramId = params.get("id");
async function fetchPoke() {
  await getPoke(paramId);
}

fetchPoke();

async function getPoke(id) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await fetch(url);
    const json = await response.json();
    const pokemon = json;
    loader.classList.remove("loader");
    title.innerHTML = `Detail page || ${json.name} `;
    result.innerHTML += `
    <div class="card">
    <div class="image">
      <img src="${json.sprites.front_shiny}">
    </div>
    <div class="text">
      <p class="id">#${id}</p>
    </div>
      <p class="name">${json.name}</p>
      <p class="hp">HP: ${json.stats[0].base_stat}<p>
    </div>
    <div>
    <div>
    `;
  } catch (err) {
    result.innerHTML = `Error: ${err}`;
  }
}
