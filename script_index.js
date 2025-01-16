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
        document.getElementById("mensagem_inicial").textContent = "Business Intelligence Analyst, turning data into strategic decisions!";
        document.getElementById("mensagem_inicial_paragrafo").textContent = "Hello! I'm Lucas Lobato, a developer with expertise in Python, Java, and C++, currently working with Business Intelligence (BI). I also have knowledge in HTML, CSS, SQL, JavaScript, Excel, Figma, and Linux. I'm seeking opportunities to showcase my skills and acquire new knowledge that can contribute to my team's development and my professional growth.";
        document.getElementById("convite_redes_sociais").textContent = "Access my social networks:";
    } else if (language === "es") {
        // Defina o conteúdo em espanhol
        document.getElementById("mensagem_inicial").textContent = "Analista de Business Intelligence, ¡transformando datos en decisiones estratégicas!";
        document.getElementById("mensagem_inicial_paragrafo").textContent = "¡Hola! Soy Lucas Lobato, un desarrollador con experiencia en Python, Java y C++, y actualmente trabajo con Business Intelligence (BI). También tengo conocimientos en HTML, CSS, SQL, JavaScript, Excel, Figma y Linux. Estoy buscando oportunidades para mostrar mis habilidades y adquirir nuevos conocimientos que puedan contribuir al desarrollo de mi equipo y a mi crecimiento profesional.";
        document.getElementById("convite_redes_sociais").textContent = "Accede a mis redes sociales:";
    } else if (language === "pt") {
        // Defina o conteúdo em português (já está em português no HTML)
        document.getElementById("mensagem_inicial").textContent = "Analista de Business Intelligence, transformando dados em decisões estratégicas!";
        document.getElementById("mensagem_inicial_paragrafo").textContent = "Olá! Sou Lucas Lobato, desenvolvedor com especialidade em Python, Java e C++, e atualmente trabalho com Business Intelligence (BI). Também possuo conhecimentos em HTML, CSS, SQL, JavaScript, Excel, Figma e Linux. Estou em busca de oportunidades para demonstrar minhas habilidades e adquirir novos conhecimentos que possam contribuir para o desenvolvimento da minha equipe e meu crescimento profissional.";
        document.getElementById("convite_redes_sociais").textContent = "Acesse minhas redes:";
    } else if (language === "ch") {
        // Defina o conteúdo mandarim
        document.getElementById("mensagem_inicial").textContent = "商业智能分析师，将数据转化为战略决策！";
        document.getElementById("mensagem_inicial_paragrafo").textContent = "你好！我是 Lucas Lobato,一名专注于 Python、Java 和 C++ 的开发人员，目前从事商业智能（BI）工作。我还具备 HTML、CSS、SQL、JavaScript、Excel、Figma 和 Linux 方面的知识。我正在寻找展示我的技能和获取新知识的机会，以便为我的团队发展和我的职业成长做出贡献。";
        document.getElementById("convite_redes_sociais").textContent = "访问我的社交网络：";
    }
}
