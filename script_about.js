// Adicione um ouvinte de evento para alterar o idioma quando uma opção for selecionada
document.getElementById("languages").addEventListener("change", function() {
    // Obtém o valor do idioma selecionado
    var selectedLanguage = this.value;
    
    // Define o idioma da página de acordo com a seleção
    changeLanguage(selectedLanguage);
});

// Função para alterar o idioma da página
function changeLanguage(language) {
    // Coloque aqui a lógica para atualizar o conteúdo da página de acordo com o idioma selecionado
    // Por exemplo, você pode atualizar o texto dentro de elementos HTML com base no idioma selecionado
    if (language === "en") {
        // Defina o conteúdo em inglês
        document.getElementById("apresentacao_formacao_titulo").textContent = "Academic Education.";
        document.getElementById("apresentacao_formacao_texto").textContent = "Bachelor's degree in Computer Science, UERJ. I started in 2018 and I'm still studying.";
        document.getElementById("apresentacao_cursos_titulo").textContent = "Courses";
        document.getElementById("apresentacao_cursos_texto").textContent = "I have certifications in the areas of Data Science, focusing on data analysis and manipulation of SQL databases, and Software Development, focusing on Back-End. As well as professional training from the Alura institution, in the areas of Java and Object Orientation, Python, Python for Data Science, SQL with PostgreSQL, and Excel.";
        document.getElementById("apresentacao_idiomas_titulo").textContent = "Languages";
        document.getElementById("apresentacao_idiomas_texto").textContent = "I graduated in English from English Culture, acquiring an advanced level in the language. I can carry out conversations and write texts without difficulties.";
    } else if (language === "es") {
        // Defina o conteúdo em espanhol
        document.getElementById("apresentacao_formacao_titulo").textContent = "Capacitación";
        document.getElementById("apresentacao_formacao_texto").textContent = "Licenciatura en Ciencias de la Computación, UERJ. Empecé en 2018 y todavía estoy estudiando.";
        document.getElementById("apresentacao_cursos_titulo").textContent = "Cursos";
        document.getElementById("apresentacao_cursos_texto").textContent = "Cuento con certificaciones en las áreas de Ciencia de Datos, con enfoque en análisis de datos y manipulación de bases de datos SQL, y Desarrollo de Software, con enfoque en Back-End. Así como formación profesional por parte de la institución Alura, en las áreas de Java y Orientación a Objetos, Python, Python para Ciencia de Datos, SQL con PostgreSQL y Excel.";
        document.getElementById("apresentacao_idiomas_titulo").textContent = "Idiomas";
        document.getElementById("apresentacao_idiomas_texto").textContent = "Me gradué en Inglés de Cultura Inglesa, adquiriendo un nivel avanzado en el idioma. Puedo mantener conversaciones y escribir textos sin dificultades.";
    } else if (language === "pt") {
        // Defina o conteúdo em português (já está em português no HTML)
        document.getElementById("apresentacao_formacao_titulo").textContent = "Formação";
        document.getElementById("apresentacao_formacao_texto").textContent = "Bacharelado em Ciência da Computação, UERJ. Comecei em 2018 e ainda estou cursando.";
        document.getElementById("apresentacao_cursos_titulo").textContent = "Cursos";
        document.getElementById("apresentacao_cursos_texto").textContent = "Possuo certificações nas áreas de Ciência de Dados, com foco em análise de dados e manipulação de bancos SQL, e Desenvolvimento de Software, com foco em Back-End. Assim como formações profissionalizantes pela instituição Alura, nas áreas de Java e Orientação a Objetos, Python, Python para Data Science, SQL com PostgreSQL, e Excel.";
        document.getElementById("apresentacao_idiomas_titulo").textContent = "Idiomas";
        document.getElementById("apresentacao_idiomas_texto").textContent = "Me formei em Inglês pela Cultura inglesa, adquirindo nível avançado na língua. Consigo realizar conversações e escrever textos sem dificuldades.";
    } else if (language === "ch") {
        // Defina o conteúdo mandarim
        document.getElementById("apresentacao_formacao_titulo").textContent = "学术教育";
        document.getElementById("apresentacao_formacao_texto").textContent = "UERJ 计算机科学学士学位。我是2018年开始的，目前还在学习中。";
        document.getElementById("apresentacao_cursos_titulo").textContent = "专业课程";
        document.getElementById("apresentacao_cursos_texto").textContent = "我拥有数据科学领域的认证，专注于 SQL 数据库的数据分析和操作，以及软件开发领域的认证，专注于后端。以及 Alura 机构提供的 Java 和面向对象、Python、Python 数据科学、SQL with PostgreSQL 和 Excel 领域的专业培训。";
        document.getElementById("apresentacao_idiomas_titulo").textContent = "语言";
        document.getElementById("apresentacao_idiomas_texto").textContent = "我毕业于英语文化专业，获得了高级语言水平。我可以毫无困难地进行对话和书写文字。";
    }
}