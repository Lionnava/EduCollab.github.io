// Función para unirse a un proyecto
function joinProject(projectName) {
    alert(`Te has unido al proyecto: ${projectName}`);
}

// Función para comenzar un curso
function startCourse(courseName) {
    alert(`Has comenzado el curso: ${courseName}`);
}

// Función para enviar mensajes en el chat
function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();

    if (message) {
        const chatMessages = document.getElementById("chat-messages");
        const newMessage = document.createElement("div");
        newMessage.textContent = `Tú: ${message}`;
        chatMessages.appendChild(newMessage);
        input.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll automático
    } else {
        alert("Por favor, escribe un mensaje antes de enviar.");
    }
}
