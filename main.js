const mahsulotlar = [
    {
        nom:"olma",
        narx:5000,
        rasim: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg"
    },
     {
        nom:"uzum",
        narx:7000,
        rasim: "https://i0.wp.com/medall.uz/wp-content/uploads/2023/01/IMG_20230111_102433_789.jpg?fit=600%2C400&ssl=1"
    },
     {
        nom:"banan",
        narx:8000,
        rasim: "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg"
    }
];

const mahsulotlarBox = document.getElementById("mahsulotlar");
const saotibOlinganlarBox = document.getElementById("saotibOlinganlar");

mahsulotlarBox.innerHTML = mahsulotlar.map(mahsulot => `
  <div class="card">
    <img src="${mahsulot.rasim}" alt="${mahsulot.nom}">
    <h3>${mahsulot.nom}</h3>
    <p>${mahsulot.narx} so'm</p>
    <button class="sotib-btn">Sotib olish</button>
  </div>
`).join("");


const tugmalar = document.querySelectorAll(".sotib-btn");

tugmalar.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const tanlangan = mahsulotlar[index];


        const li = document.createElement("li");
        li.textContent = `${tanlangan.nom} - ${tanlangan.narx} so'm`;


        saotibOlinganlarBox.appendChild(li);

        console.log(`${tanlangan.nom} sotib olindi!`);
    });
});

