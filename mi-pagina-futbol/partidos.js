const partidos = [
  {
    nombre: "Boca Juniors vs River Plate",
    hora: "16:00",
    canal: "ESPN",
    linkEmbed: "https://example.com/embed/boca-vs-river"
  },
  {
    nombre: "Real Madrid vs Barcelona",
    hora: "18:30",
    canal: "DirecTV Sports",
    linkEmbed: "https://example.com/embed/real-vs-barca"
  },
  {
    nombre: "Manchester City vs Arsenal",
    hora: "21:00",
    canal: "Star+",
    linkEmbed: "https://example.com/embed/city-vs-arsenal"
  }
];

const contenedor = document.getElementById("partidos");
const iframe = document.getElementById("iframe-reproductor");

partidos.forEach(partido => {
  const div = document.createElement("div");
  div.className = "partido";
  div.innerHTML = `
    <h3>${partido.nombre}</h3>
    <p>Hora: ${partido.hora}</p>
    <p>Canal: ${partido.canal}</p>
    <button onclick="cargarPartido('${partido.linkEmbed}')">Ver en vivo</button>
  `;
  contenedor.appendChild(div);
});

function cargarPartido(link) {
  iframe.src = link;
}
