function createPost (name, message, imageURL) {
    
    const div = document.createElement("div");
    div.classList.add("character");

    const elemento = document.createElement("img");
    elemento.setAttribute("src", imageURL);
    div.append(elemento);

}