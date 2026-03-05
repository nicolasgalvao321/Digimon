const digimonInput = document.getElementById("digimonInput");
const buscarDigimon = document.getElementById("buscarDigimon");

const BuscarDig = async () => {
    const acao = digimonInput.value;

    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${acao}`);
    const data = await response.json();

    const imagem = data[0].img;
    const nome = data[0].name;
    const level = data[0].level;

    const card = document.getElementById("card");

    card.innerHTML = `
        <h2>${nome}</h2>
        <img src="${imagem}" alt="${nome}">
        <p>Nível: ${level}</p>
    `;

    card.style.display = "block";
};


buscarDigimon.addEventListener("click", BuscarDig);
