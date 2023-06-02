// Array de objetos con información de las imágenes de diseño de personajes
var disenoPersonajes = [
  {
    src: "maxresdefault.jpg",
    title: "Diseño de Personajes 1",
    description: "Descripción del diseño de personajes 1",
  },
  {
    src: "images/dibujos/diseno_personajes_2.jpg",
    title: "Diseño de Personajes 2",
    description: "Descripción del diseño de personajes 2",
  },
  // Agrega más objetos de imágenes de diseño de personajes según sea necesario
];

// Array de objetos con información de las imágenes de sketches
var sketches = [
  {
    src: "dibujo-pato-sentado.jpg",
    title: "Sketch 1",
    description: "Descripción del sketch 1",
  },
  {
    src: "images/dibujos/sketches_2.jpg",
    title: "Sketch 2",
    description: "Descripción del sketch 2",
  },
  // Agrega más objetos de imágenes de sketches según sea necesario
];

// Array de objetos con información de las imágenes de concept art
var conceptArt = [
  {
    src: "images/dibujos/concept_art_1.jpg",
    title: "Concept Art 1",
    description: "Descripción del concept art 1",
  },
  {
    src: "images/dibujos/concept_art_2.jpg",
    title: "Concept Art 2",
    description: "Descripción del concept art 2",
  },
  // Agrega más objetos de imágenes de concept art según sea necesario
];

// Array de objetos con información de las imágenes de animación
var animacion = [
  {
    src: "DentalYellowishFreshwatereel-max-1mb.gif",
    title: "Animación 1",
    description: "Descripción de la animación 1",
  },
  {
    src: "images/blender/animacion_2.gif",
    title: "Animación 2",
    description: "Descripción de la animación 2",
  },
  // Agrega más objetos de imágenes de animación según sea necesario
];

// Array de objetos con información de las imágenes de render
var render = [
  {
    src: "images/blender/render_1.jpg",
    title: "Render 1",
    description: "Descripción del render 1",
  },
  {
    src: "images/blender/render_2.jpg",
    title: "Render 2",
    description: "Descripción del render 2",
  },
  // Agrega más objetos de imágenes de render según sea necesario
];

// Función para agregar las imágenes al contenedor
function addImagesToContainer(containerId, imageArray) {
  var container = document.getElementById(containerId);
  imageArray.forEach(function (image) {
    var imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = image.title;
    imgElement.title = image.description;
    imgElement.classList.add("portfolio-image");
    container.appendChild(imgElement);
  });
}

// Función para crear la vista ampliada de la imagen
function createEnlargedImageView(imageSrc) {
  var enlargedContainer = document.createElement("div");
  enlargedContainer.classList.add("enlarged-image-container");

  var enlargedImage = document.createElement("img");
  enlargedImage.src = imageSrc;
  enlargedImage.classList.add("enlarged-image");
  enlargedContainer.appendChild(enlargedImage);

  enlargedContainer.addEventListener("click", function () {
    enlargedContainer.remove();
  });

  return enlargedContainer;
}

// Llama a la función para agregar las imágenes de diseño de personajes, sketches, concept art, animación y render al cargar la página
window.onload = function () {
  addImagesToContainer("image-container-diseno-personajes", disenoPersonajes);
  addImagesToContainer("image-container-sketches", sketches);
  addImagesToContainer("image-container-concept-art", conceptArt);
  addImagesToContainer("image-container-animacion", animacion);
  addImagesToContainer("image-container-render", render);

  var portfolioImages = document.getElementsByClassName("portfolio-image");
  Array.from(portfolioImages).forEach(function (image) {
    image.addEventListener("click", function () {
      var enlargedView = createEnlargedImageView(image.src);
      document.body.appendChild(enlargedView);
    });
  });
};
