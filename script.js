// función para galería de imágenes

function openImage(imageUrl) {
    window.open(imageUrl, '_blank');
  }

  
  
  // pregunta

  alert("Bienvenido a la Interzona!");
  var pregunta = prompt('Te gusta William Burroughs?');
if (pregunta.toLowerCase()=== "si") {
    alert ("GENIAL");
} else if (pregunta.toLowerCase() === "no") {
    alert ("QUE LASTIMA");
} else {
    alert("Responde si o no");
}

// Obtener referencia al formulario y a la lista de comentarios
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

// Manejador de eventos para enviar el formulario
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    // Crear un nuevo comentario
    const newComment = document.createElement('div');
    newComment.innerHTML = `
        <h3>${name}</h3>
        <p>${comment}</p>
    `;

    // Agregar el nuevo comentario a la lista de comentarios
    commentList.appendChild(newComment);

    // Restablecer los valores del formulario
    commentForm.reset();
});