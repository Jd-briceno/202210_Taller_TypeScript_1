"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
let seriesTbody = document.getElementById('series');
const btnfilterByName = document.getElementById("button-filterByName");
const inputSearchBox = document.getElementById("search-box");
const totalSeasonsElm = document.getElementById("total-seasons");
renderSeriesInTable(data_1.series);
totalSeasonsElm.innerHTML = `${getTotalSeasons(data_1.series)}`;
function renderSeriesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getTotalSeasons(series) {
    let totalSeasons = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons;
}
