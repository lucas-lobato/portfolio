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
        document.getElementById("mensagem_inicial").textContent = "Developer looking for an opportunity!";
        document.getElementById("mensagem_inicial_paragrafo").textContent = "Hello! I'm Lucas Lobato, a developer with expertise in Python, Java, and C++. I also have knowledge in HTML, CSS, SQL, JavaScript, Excel, Figma, and Linux. I'm seeking an opportunity to showcase my skills and acquire new knowledge to help my team.";
        document.getElementById("convite_redes_sociais").textContent = "Access my social networks:";
    } else if (language === "es") {
        // Defina o conteúdo em espanhol
        document.getElementById("mensagem_inicial").textContent = "Desarrollador en busca de una oportunidad!";
        document.getElementById("mensagem_inicial_paragrafo").textContent = "¡Hola! Soy Lucas Lobato, un desarrollador con experiencia en Python, Java y C++. También tengo conocimientos en HTML, CSS, SQL, JavaScript, Excel, Figma y Linux. Estoy buscando una oportunidad para mostrar mis habilidades y adquirir nuevos conocimientos para ayudar a mi equipo.";
        document.getElementById("convite_redes_sociais").textContent = "Accede a mis redes sociales:";
    } else if (language === "pt") {
        // Defina o conteúdo em português (já está em português no HTML)
        document.getElementById("mensagem_inicial").textContent = "Desenvolvedor a procura de uma oportunidade!";
        document.getElementById("mensagem_inicial_paragrafo").textContent = "Olá! Sou Lucas Lobato, desenvolvedor com especialidade em Python, Java e C++. Também possuo conhecimentos em HTML, CSS, SQL, JavaScript, Excel, Figma e Linux. Procuro uma oportunidade para demonstrar minhas habilidades, assim como adquirir novos conhecimentos para ajudar minha equipe.";
        document.getElementById("convite_redes_sociais").textContent = "Acesse minhas redes:";
    } else if (language === "ch") {
        // Defina o conteúdo em mandarim
        document.getElementById("mensagem_inicial").textContent = "开发商正在寻找机会！";
        document.getElementById("mensagem_inicial_paragrafo").textContent = "你好！我是 Lucas Lobato,一名专注于 Python、Java 和 C++ 的开发人员。我还具备 HTML、CSS、SQL、JavaScript、Excel、Figma 和 Linux 方面的知识。我正在寻找机会展示我的技能，并获取新知识来帮助我的团队。";
        document.getElementById("convite_redes_sociais").textContent = "访问我的社交网络：";
    }
}
