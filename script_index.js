document.getElementById("languages").addEventListener("change", function() {
    var selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

function changeLanguage(language) {
    const messages = {
        en: {
            title: "Business Intelligence Analyst, turning data into strategic decisions!",
            paragraph: "Hello! I'm Lucas Lobato, a developer with expertise in Python, Java, and C++, currently working with Business Intelligence (BI). I also have knowledge in HTML, CSS, SQL, JavaScript, Excel, Figma, and Linux. I'm seeking opportunities to showcase my skills and acquire new knowledge that can contribute to my team's development and my professional growth.",
            socialInvite: "Access my social networks:"
        },
        es: {
            title: "Analista de Business Intelligence, ¡transformando datos en decisiones estratégicas!",
            paragraph: "¡Hola! Soy Lucas Lobato, un desarrollador con experiencia en Python, Java y C++, y actualmente trabajo con Business Intelligence (BI). También tengo conocimientos en HTML, CSS, SQL, JavaScript, Excel, Figma y Linux. Estoy buscando oportunidades para mostrar mis habilidades y adquirir nuevos conocimientos que puedan contribuir al desarrollo de mi equipo y a mi crecimiento profesional.",
            socialInvite: "Accede a mis redes sociales:"
        },
        pt: {
            title: "Analista de Business Intelligence, transformando dados em decisões estratégicas!",
            paragraph: "Olá! Sou Lucas Lobato, desenvolvedor com especialidade em Python, Java e C++, e atualmente trabalho com Business Intelligence (BI). Também possuo conhecimentos em HTML, CSS, SQL, JavaScript, Excel, Figma e Linux. Estou em busca de oportunidades para demonstrar minhas habilidades e adquirir novos conhecimentos que possam contribuir para o desenvolvimento da minha equipe e meu crescimento profissional.",
            socialInvite: "Acesse minhas redes:"
        },
        ch: {
            title: "商业智能分析师，将数据转化为战略决策！",
            paragraph: "你好！我是 Lucas Lobato,一名专注于 Python、Java 和 C++ 的开发人员，目前从事商业智能（BI）工作。我还具备 HTML、CSS、SQL、JavaScript、Excel、Figma 和 Linux 方面的知识。我正在寻找展示我的技能和获取新知识的机会，以便为我的团队发展和我的职业成长做出贡献。",
            socialInvite: "访问我的社交网络："
        }
    };

    document.getElementById("mensagem_inicial").textContent = messages[language].title;
    document.getElementById("mensagem_inicial_paragrafo").textContent = messages[language].paragraph;
    document.getElementById("convite_redes_sociais").textContent = messages[language].socialInvite;
}
