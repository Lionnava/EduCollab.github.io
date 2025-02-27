// Función para obtener noticias tecnológicas usando NewsAPI
async function fetchTechNews() {
    const apiKey = "TU_CLAVE_DE_API_AQUI"; // Reemplaza con tu clave de API
    const url = `https://newsapi.org/v2/top-headlines?category=technology&language=es&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al cargar noticias: ${response.status}`);
        }

        const data = await response.json();
        const articles = data.articles;

        // Mostrar las noticias en el contenedor
        const newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = ""; // Limpiar contenido previo

        if (articles.length === 0) {
            newsContainer.innerHTML = "<p>No se encontraron noticias recientes.</p>";
            return;
        }

        articles.forEach((article, index) => {
            const articleHTML = `
                <article class="news-item">
                    <h3>${index + 1}. ${article.title}</h3>
                    <p>${article.description || "Sin descripción disponible."}</p>
                    <a href="${article.url}" target="_blank">Leer más</a>
                </article>
            `;
            newsContainer.innerHTML += articleHTML;
        });
    } catch (error) {
        console.error(error);
        document.getElementById("news-container").innerHTML = `<p>Error al cargar noticias: ${error.message}</p>`;
    }
}

// Cargar noticias cuando se cargue la página
document.addEventListener("DOMContentLoaded", fetchTechNews);
