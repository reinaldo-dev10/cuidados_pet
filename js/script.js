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