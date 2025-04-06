import { series } from "./data.js";

const tableBody: HTMLElement = document.getElementById("series-table-body")!;
let totalSeasons: number = 0;

series.forEach((serie, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <th scope="row">${index + 1}</th>
    <td>${serie.title}</td>
    <td>${serie.network}</td>
    <td>${serie.seasons}</td>
  `;
  tableBody.appendChild(row);
  totalSeasons += serie.seasons;
});

const average = totalSeasons / series.length;
const averageContainer = document.getElementById("seasons-average")!;
averageContainer.textContent = `Seasons average: ${average.toFixed(0)}`;