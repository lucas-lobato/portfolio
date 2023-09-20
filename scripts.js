// Mapeamento de traduções
const translations = {
    en: {
        mensagem_inicial: "Developer looking for an opportunity!",
        mensagem_inicial_paragrafo: "Hello! I'm Lucas Lobato, a developer specializing in Python, Java and C++. I also have knowledge in HTML, CSS, SQL, JavaScript, Excel, Figma and Linux. I'm looking for an opportunity to demonstrate my skills, so how to acquire new knowledge to help my team."
        
    },
    es: {
        mensagem_inicial: "¡Desarrollador en busca de una oportunidad!",
        mensagem_inicial_paragrafo: "¡Hola! Soy Lucas Lobato, desarrollador especializado en Python, Java y C++. También tengo conocimientos en HTML, CSS, SQL, JavaScript, Excel, Figma y Linux. Estoy buscando una oportunidad para demostrar mis habilidades, así que cómo adquirir nuevos conocimientos para ayudar a mi equipo."

    },
    pt: {
        mensagem_inicial: "Desenvolvedor a procura de uma oportunidade!",
        mensagem_inicial_paragrafo: "Olá! Sou Lucas Lobato, desenvolvedor com especialidade em Python, Java e C++. Também possuo conhecimentos em HTML, CSS, SQL, JavaScript, Excel, Figma e Linux. Procuro uma oportunidade para demonstrar minhas habilidades, assim como adquirir novos conhecimentos para ajudar minha equipe"

    }
};

// Função para mudar o idioma
document.getElementById('changeLanguage').addEventListener('click', function () {
    const selectedLanguage = document.getElementById('languages').value;
    const translatedText = translations[selectedLanguage];

    // Aplicar as traduções aos elementos da página
    document.getElementById('mensagem_inicial').textContent = translatedText.mensagem_inicial;
    document.getElementById('mensagem_inicial_paragrafo').textContent = translatedText.mensagem_inicial_paragrafo;
    // Adicione mais elementos e traduções conforme necessário
});
