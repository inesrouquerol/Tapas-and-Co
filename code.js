function loadTapas() {fetch("data.json")
        .then(res => res.json())
        .then(tapasData => {
            let htmlAcumulado = "";
            tapasData.forEach(tapa => {
                htmlAcumulado += `<div class="col">`;
                htmlAcumulado += `<div class="card h-100">`;
                htmlAcumulado += `<img src="${tapa.image}" class="card-img-top" alt="${tapa.name}">`;
                htmlAcumulado += `<div class="card-body">`;
                htmlAcumulado += `<h3 class="card-title">${tapa.name}</h3>`;
                htmlAcumulado += `<p class="card-text"><strong>Region:</strong> ${tapa.region}</p>`;
                htmlAcumulado += `<p class="card-text">${tapa.description}</p>`;
                htmlAcumulado += `</div>`;
                htmlAcumulado += `</div>`;
                htmlAcumulado += `</div>`;});
            document.getElementById("tapas-container").innerHTML = htmlAcumulado;});}
loadTapas();
