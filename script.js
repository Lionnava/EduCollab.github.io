function startCourse(courseName) {
    alert(`Has comenzado el curso: ${courseName}`);
}

function joinProject(projectName) {
    alert(`Te has unido al proyecto: ${projectName}`);
}

function saveCode() {
    const code = document.getElementById('code-editor').value;
    alert('Código guardado:\n' + code);
}
