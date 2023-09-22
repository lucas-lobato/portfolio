// Mapeamento de traduções
const translations = {
    en: {
        apresentacao_projeto_titulo_desigualdade_brasil: "State Inequality in Brazil",
        apresentacao_projeto_texto_desigualdade_brasil: "Project made in Power BI, using Excel to clean and manipulate the data. Collecting data from the National Survey on Food Insecurity in the Context of the Covid-19 Pandemic in Brazil, I was able to create spreadsheets that helped me build an interactive Dashboard that visually demonstrated socioeconomic inequality in Brazil.",
        apresentacao_projeto_titulo_ataque_do_missil: "Missile Attack",
        apresentacao_projeto_texto_ataque_do_missil: "Project made in C++, using the OpenGl library to render and design 3D objects. The game consists of capturing as many coins as possible if you are hit by the missile. I carried out this project for the computer graphics discipline at UERJ.",
        apresentacao_projeto_titulo_pacman: "Pacman",
        apresentacao_projeto_texto_pacman: "Project made in Python, using the PyGame library. The project was designed to recreate the classic Pacman game, but using modern technology, such as object orientation..",
        apresentacao_projeto_titulo_filmflix: "Filmflix",
        apresentacao_projeto_texto_filmflix: "Project made in Java, where the user can search for a film of their choice to check the year of release, duration of the film, full title, etc. the project also creates a JSON file with the chosen films. I used the OMDB API to get the information and processed it with GSON."
    },
    es: {
        apresentacao_projeto_titulo_desigualdade_brasil: "Desigualdad estatal en Brasil",
        apresentacao_projeto_texto_desigualdade_brasil: "Proyecto realizado en Power BI, utilizando Excel para limpieza y manipulación de datos. Al recopilar datos de la Encuesta Nacional sobre Inseguridad Alimentaria en el Contexto de la Pandemia de Covid-19 en Brasil, pude crear hojas de cálculo que me ayudaron a construir un Panel interactivo que demostró visualmente la desigualdad socioeconómica en Brasil.",
        apresentacao_projeto_titulo_ataque_do_missil: "Ataque con Misiles",
        apresentacao_projeto_texto_ataque_do_missil: "Proyecto realizado en C++, utilizando la biblioteca OpenGl para renderizar y diseñar objetos 3D. El juego consiste en capturar tantas monedas como sea posible si eres impactado por el misil. Este proyecto lo realicé para la disciplina de infografía en la UERJ.",
        apresentacao_projeto_titulo_pacman: "Pacman",
        apresentacao_projeto_texto_pacman: "Proyecto realizado en Python, utilizando la librería PyGame. El proyecto fue diseñado para recrear el clásico juego Pacman, pero utilizando tecnología moderna, como la orientación a objetos..",
        apresentacao_projeto_titulo_filmflix: "Filmflix",
        apresentacao_projeto_texto_filmflix: "Proyecto realizado en Java, donde el usuario puede buscar una película de su elección para consultar año de estreno, duración de la película, título completo, etc. El proyecto también crea un archivo JSON con las películas elegidas. Utilicé la API de OMDB para obtener la información y la procesé con GSON."
    },
    pt: {
        apresentacao_projeto_titulo_desigualdade_brasil: "Desigualdade Estadual no Brasil",
        apresentacao_projeto_texto_desigualdade_brasil: "Projeto feito no Power BI, utilizando o Excel para limpar e manipular os dados. Coletando dados do Inquérito Nacional sobre Insegurança Alimentar no Contexto da Pandemia da Covid-19 no Brasil, pude criar planilhas que me auxiliaram na construção de um Dashboard interativo que demonstasse visualmente a desigualdade socioeconômica no Brasil.",
        apresentacao_projeto_titulo_ataque_do_missil: "Ataque do Missil",
        apresentacao_projeto_texto_ataque_do_missil: "Projeto feito em C++, utilizando a biblioteca OpenGl para renderizar e projetar os obejtos 3D. O jogo consiste em capturar o máximo de moedas se mser atingido pelo missil. Realizei este projeto para a disciplina de computação gráfica na UERJ.",
        apresentacao_projeto_titulo_pacman: "Pacman",
        apresentacao_projeto_texto_pacman: "Projeto feito em Python, utilizando a biblioteca PyGame. O projeto foi idealizado em  recriar o clássico jogo do Pacman, porém utilizando uma tecnologia moderna, como orientação a objetos.",
        apresentacao_projeto_titulo_filmflix: "Filmflix",
        apresentacao_projeto_texto_filmflix: "Projeto feito em Java, onde o usuário pode buscar um filme de sua preferêncai para consultar o ano de lançamento, duração do filme, título completo etc. o projeto também cria um arquivo JSON com os filmes escolhidos. Utilizei a API OMDB para pegar as informações e tratei com o GSON."
    }
};

// Função para mudar o idioma
document.getElementById('changeLanguage').addEventListener('click', function () {
    const selectedLanguage = document.getElementById('languages').value;
    const translatedText = translations[selectedLanguage];

    // Aplicar as traduções aos elementos da página
    document.getElementById('apresentacao_projeto_titulo_desigualdade_brasil').textContent = translatedText.apresentacao_projeto_titulo_desigualdade_brasil;
    document.getElementById('apresentacao_projeto_texto_desigualdade_brasil').textContent = translatedText.apresentacao_projeto_texto_desigualdade_brasil;
    document.getElementById('apresentacao_projeto_titulo_ataque_do_missil').textContent = translatedText.apresentacao_projeto_titulo_ataque_do_missil;
    document.getElementById('apresentacao_projeto_texto_ataque_do_missil').textContent = translatedText.apresentacao_projeto_texto_ataque_do_missil;
    document.getElementById('apresentacao_projeto_titulo_pacman').textContent = translatedText.apresentacao_projeto_titulo_pacman;
    document.getElementById('apresentacao_projeto_texto_pacman').textContent = translatedText.apresentacao_projeto_texto_pacman;
    document.getElementById('apresentacao_projeto_titulo_filmflix').textContent = translatedText.apresentacao_projeto_titulo_filmflix;
    document.getElementById('apresentacao_projeto_texto_filmflix').textContent = translatedText.apresentacao_projeto_texto_filmflix;
    // Adicione mais elementos e traduções conforme necessário
});