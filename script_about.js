// Mapeamento de traduções
const translations = {
    en: {
        apresentacao_formacao_titulo: "Academic Education",
        apresentacao_formacao_texto: "Bachelor's degree in Computer Science, UERJ. I started in 2018 and I'm still studying.",
        apresentacao_cursos_titulo: "Courses",
        apresentacao_cursos_texto: "I have certifications in the areas of Data Science, focusing on data analysis and manipulation of SQL databases, and Software Development, focusing on Back-End. As well as professional training from the Alura institution, in the areas of Java and Object Orientation, Python, Python for Data Science, SQL with PostgreSQL, and Excel.",
        apresentacao_idiomas_titulo: "Languages",
        apresentacao_idiomas_texto: "I graduated in English from English Culture, acquiring an advanced level in the language. I can carry out conversations and write texts without difficulties."
    },
    es: {
        apresentacao_formacao_titulo: "Capacitación",
        apresentacao_formacao_texto: "Licenciatura en Ciencias de la Computación, UERJ. Empecé en 2018 y todavía estoy estudiando.",
        apresentacao_cursos_titulo: "Cursos",
        apresentacao_cursos_texto: "Cuento con certificaciones en las áreas de Ciencia de Datos, con enfoque en análisis de datos y manipulación de bases de datos SQL, y Desarrollo de Software, con enfoque en Back-End. Así como formación profesional por parte de la institución Alura, en las áreas de Java y Orientación a Objetos, Python, Python para Ciencia de Datos, SQL con PostgreSQL y Excel.",
        apresentacao_idiomas_titulo: "Idiomas",
        apresentacao_idiomas_texto: "Me gradué en Inglés de Cultura Inglesa, adquiriendo un nivel avanzado en el idioma. Puedo mantener conversaciones y escribir textos sin dificultades."
    },
    pt: {
        apresentacao_formacao_titulo: "Formação",
        apresentacao_formacao_texto: "Bacharelado em Ciência da Computação, UERJ. Comecei em 2018 e ainda estou cursando.",
        apresentacao_cursos_titulo: "Cursos",
        apresentacao_cursos_texto: "Possuo certificações nas áreas de Ciência de Dados, com foco em análise de dados e manipulação de bancos SQL, e Desenvolvimento de Software, com foco em Back-End. Assim como formações profissionalizantes pela instituição Alura, nas áreas de Java e Orientação a Objetos, Python, Python para Data Science, SQL com PostgreSQL, e Excel.",
        apresentacao_idiomas_titulo: "Idiomas",
        apresentacao_idiomas_texto: "Me formei em Inglês pela Cultura inglesa, adquirindo nível avançado na língua. Consigo realizar conversações e escrever textos sem dificuldades."
    }
};

// Função para mudar o idioma
document.getElementById('changeLanguage').addEventListener('click', function () {
    const selectedLanguage = document.getElementById('languages').value;
    const translatedText = translations[selectedLanguage];

    // Aplicar as traduções aos elementos da página
    document.getElementById('apresentacao_formacao_titulo').textContent = translatedText.apresentacao_formacao_titulo;
    document.getElementById('apresentacao_formacao_texto').textContent = translatedText.apresentacao_formacao_texto;
    document.getElementById('apresentacao_cursos_titulo').textContent = translatedText.apresentacao_cursos_titulo;
    document.getElementById('apresentacao_cursos_texto').textContent = translatedText.apresentacao_cursos_texto;
    document.getElementById('apresentacao_idiomas_titulo').textContent = translatedText.apresentacao_idiomas_titulo;
    document.getElementById('apresentacao_idiomas_texto').textContent = translatedText.apresentacao_idiomas_texto;

    // Adicione mais elementos e traduções conforme necessário
});