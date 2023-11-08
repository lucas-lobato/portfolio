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
        document.getElementById("apresentacao_projeto_cursos_HTML_CSS").textContent = "From scratch: HTML and CSS for web projects";
        document.getElementById("apresentacao_projeto_cursos_java_OO").textContent = "Java with Object Orientation";
        document.getElementById("apresentacao_projeto_cursos_python_OO").textContent = "Python with Object Orientation";
        document.getElementById("apresentacao_projeto_cursos_c++").textContent = "C++";
        document.getElementById("apresentacao_projeto_cursos_python").textContent = "Python";
        document.getElementById("apresentacao_projeto_cursos_python_datasci").textContent = "Python for Data Science";
        document.getElementById("apresentacao_projeto_cursos_postgre").textContent = "SQL with PostgreSQL";
    } else if (language === "es") {
        // Defina o conteúdo em espanhol
        document.getElementById("apresentacao_projeto_cursos_HTML_CSS").textContent = "Desde cero: HTML y CSS para proyectos web";
        document.getElementById("apresentacao_projeto_cursos_java_OO").textContent = "Java con orientación a objetos";
        document.getElementById("apresentacao_projeto_cursos_python_OO").textContent = "Python con orientación a objetos";
        document.getElementById("apresentacao_projeto_cursos_c++").textContent = "C++";
        document.getElementById("apresentacao_projeto_cursos_python").textContent = "Python";
        document.getElementById("apresentacao_projeto_cursos_python_datasci").textContent = "Python para Data Science";
        document.getElementById("apresentacao_projeto_cursos_postgre").textContent = "SQL con PostgreSQL";
    } else if (language === "pt") {
        // Defina o conteúdo em português (já está em português no HTML)
        document.getElementById("apresentacao_projeto_cursos_HTML_CSS").textContent = "A partir do zero: HTML e CSS para projetos web";
        document.getElementById("apresentacao_projeto_cursos_java_OO").textContent = "Java com Orientação a Objetos";
        document.getElementById("apresentacao_projeto_cursos_python_OO").textContent = "Python com Orientação a Objetos";
        document.getElementById("apresentacao_projeto_cursos_c++").textContent = "C++";
        document.getElementById("apresentacao_projeto_cursos_python").textContent = "Python";
        document.getElementById("apresentacao_projeto_cursos_python_datasci").textContent = "Python para Data Science";
        document.getElementById("apresentacao_projeto_cursos_postgre").textContent = "SQL com PostgreSQL";
    } else if (language === "ch") {
        // Defina o conteúdo em mandarim
        document.getElementById("apresentacao_projeto_cursos_HTML_CSS").textContent = "从头开始: Web 项目的 HTML 和 CSS";
        document.getElementById("apresentacao_projeto_cursos_java_OO").textContent = "Java 与面向对象";
        document.getElementById("apresentacao_projeto_cursos_python_OO").textContent = "面向对象的 Python";
        document.getElementById("apresentacao_projeto_cursos_c++").textContent = "C++";
        document.getElementById("apresentacao_projeto_cursos_python").textContent = "Python";
        document.getElementById("apresentacao_projeto_cursos_python_datasci").textContent = "Python 数据科学";
        document.getElementById("apresentacao_projeto_cursos_postgre").textContent = "SQL/PostgreSQL";
    }
}