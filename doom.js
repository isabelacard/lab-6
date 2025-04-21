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

const galeria = document.getElementById("galeria")

for (let i = 1 ;i <= 826; i++) {
    fetch ("https://rickandmortyapi.com/api/character/" + i)
    .then((response) => response.json ())
    .then ((character) => {
        const post = createPost(
            "Character " + i, 
            "Esta es mi publicación número " + i + ". Esto es una prueba de generación de relleno por medio de funciones y ciclos.", 
            character.image 
        );
        galeria.append(post); 
    });
}