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

// Captura o ano atual para o Copyright
const ano = new Date().getFullYear();
document.getElementById('ano-atual').textContent = ano;

// Captura e formata a data de hoje para a "Última atualização"
const hoje = new Date();
const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);

document.getElementById('data-completa').textContent = dataFormatada;