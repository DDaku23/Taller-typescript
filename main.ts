import { series } from "./data.js";

const tableBody: HTMLElement = document.getElementById("series-table-body")!;
const detailContainer: HTMLElement = document.getElementById("series-detail")!;
const averageContainer: HTMLElement = document.getElementById("seasons-average")!;
let totalSeasons: number = 0;

series.forEach((serie, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <th scope="row">${index + 1}</th>
    <td class="serie-title text-primary" style="cursor:pointer">${serie.title}</td>
    <td>${serie.network}</td>
    <td>${serie.seasons}</td>
  `;

  // boton serie
  row.querySelector(".serie-title")?.addEventListener("click", () => {
    renderSerieDetail(serie);
  });

  tableBody.appendChild(row);
  totalSeasons += serie.seasons;
});

//  promedio
const average = totalSeasons / series.length;
averageContainer.textContent = `Seasons average: ${average.toFixed(0)}`;

// Cad
function renderSerieDetail(serie: any): void {
  detailContainer.innerHTML = `
    <div class="card" style="width: 30rem;">
      <img src="${serie.imageUrl}" class="card-img-top" alt="${serie.title}">
      <div class="card-body">
        <h5 class="card-title">${serie.title}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.url}" target="_blank" class="btn btn-primary">Mirar ahora</a>
      </div>
    </div>
  `;
}


