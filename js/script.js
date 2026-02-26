const imagens = [
  "./imgs/img1.jpg",
  "./imgs/img2.jpg",
  "./imgs/img3.png"
];

document.getElementById("btn-galeria").addEventListener("click", () => {
    
    const galeria = document.getElementById("imagens-galeria");
    
    galeria.innerHTML = ""; // limpa antes de adicionar
    
    imagens.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Imagem da galeria";
        galeria.appendChild(img);
    });
});

//pesquisa de raças
//para ciar listas usamos um array
const listaRacas = [
  { nome: "Labrador", caracteristica: "protetor" },
  { nome: "Pastor Alemão", caracteristica: "corajoso" },
  { nome: "Yorkshire", caracteristica: "caçador" },
  { nome: "Poodle", caracteristica: "inteligente" },
  { nome: "Bulldog", caracteristica: "calmo" },
];

document.getElementById("campo-filtro").addEventListener("input", (e) => {
  console.log("digitando", e.target.value)
  const valor = e.target.value.toLowerCase();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

   listaRacas
     .filter((raca) => raca.nome.toLowerCase().includes(valor))
     .forEach((raca) => {
       const li = document.createElement("li");
       li.textContent = `${raca.nome} - ${raca.caracteristica}`;
       resultado.appendChild(li);
     });
});

// Captura o ano atual para o Copyright
const ano = new Date().getFullYear();
document.getElementById('ano-atual').textContent = ano;

// Captura e formata a data de hoje para a "Última atualização"
const hoje = new Date();
const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);

document.getElementById('data-completa').textContent = dataFormatada;