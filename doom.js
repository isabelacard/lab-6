function createPost (name, message, imageURL) {
    
    const div = document.createElement("div");
    div.classList.add("character");

    const elemento = document.createElement("img");
    elemento.setAttribute("src", imageURL);
    div.append(elemento);

    const titulo = document.createElement("h1")
    titulo.textContent = name
    div.append(titulo);

    const texto = document.createElement("p")
    texto.textContent = message
    div.append(texto);

    return div;

}