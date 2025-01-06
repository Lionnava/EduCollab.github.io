// Funcionalidad para cursos y proyectos
function startCourse(courseName) {
    alert(`Estamos adecuando el curso: ${courseName}`);
}

function joinProject(projectName) {
    alert(`Estamos adecuando el proyecto: ${projectName}`);
}

// Funcionalidad del Asistente Virtual
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    input.value = '';

    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML += `<div><strong>Tú:</strong> ${message}</div>`;

    // Simulación de respuesta del asistente virtual
    setTimeout(() => {
        chatMessages.innerHTML += `<div><strong>Asistente:</strong> Hola, ¿en qué puedo ayudarte?</div>`;
    }, 1000);
}