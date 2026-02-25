const imagens = [
  "./imgs/img1.jpg", //string representando o caminho da imagem
  "./imgs/img2.jpg",
  "./imgs/img3.png"
];

//addEventListener é um método que adiciona um ouvinte de evento a um elemento HTML. 
// Ele permite que você execute uma função específica quando um evento ocorre, como um clique, uma mudança de valor, etc. 
// O primeiro argumento é o tipo de evento (por exemplo, "click"), e o segundo argumento é a função que será executada quando o evento ocorrer.

document.getElementById("btn-galeria").addEventListener("click", () => {
    const galeria = document.getElementById("imagens-galeria"); 
    galeria.innerHTML = ""; // Limpa a galeria antes de adicionar novas imagens
});

    imagens.forEach((src) => {
        const img = document.createElement("img");// Cria um elemento de imagem
        img.src = src; // Define o atributo src da imagem para o caminho fornecido
        img.alt = "Imagem da galeria"; // Define o atributo alt para acessibilidade
        galeria.appendChild(img); // Adiciona a imagem à galeria  
});
// () => {} é uma função anônima, ou seja, uma função sem nome.
// Ela é frequentemente usada como um argumento para métodos como addEventListener, 
// onde você deseja executar uma função específica quando um evento ocorre, 
// mas não precisa reutilizar essa função em outro lugar do código.
