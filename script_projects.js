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
        document.getElementById("apresentacao_projeto_titulo_desigualdade_brasil").textContent = "State Inequality in Brazil";
        document.getElementById("apresentacao_projeto_texto_desigualdade_brasil").textContent = "Project made in Power BI, using Excel to clean and manipulate the data. Collecting data from the National Survey on Food Insecurity in the Context of the Covid-19 Pandemic in Brazil, I was able to create spreadsheets that helped me build an interactive Dashboard that visually demonstrated socioeconomic inequality in Brazil.";
        document.getElementById("apresentacao_projeto_titulo_ataque_do_missil").textContent = "Missile Attack";
        document.getElementById("apresentacao_projeto_texto_ataque_do_missil").textContent = "Project made in C++, using the OpenGl library to render and design 3D objects. The game consists of capturing as many coins as possible if you are hit by the missile. I carried out this project for the computer graphics discipline at UERJ.";
        document.getElementById("apresentacao_projeto_titulo_pacman").textContent = "Pacman";
        document.getElementById("apresentacao_projeto_texto_pacman").textContent = "Project made in Python, using the PyGame library. The project was designed to recreate the classic Pacman game, but using modern technology, such as object orientation.";
        document.getElementById("apresentacao_projeto_titulo_filmflix").textContent = "Filmflix";
        document.getElementById("apresentacao_projeto_texto_filmflix").textContent = "Project made in Java, where the user can search for a film of their choice to check the year of release, duration of the film, full title, etc. the project also creates a JSON file with the chosen films. I used the OMDB API to get the information and processed it with GSON.";
    } else if (language === "es") {
        // Defina o conteúdo em espanhol
        document.getElementById("apresentacao_projeto_titulo_desigualdade_brasil").textContent = "Desigualdad estatal en Brasil";
        document.getElementById("apresentacao_projeto_texto_desigualdade_brasil").textContent = "Proyecto realizado en Power BI, utilizando Excel para limpieza y manipulación de datos. Al recopilar datos de la Encuesta Nacional sobre Inseguridad Alimentaria en el Contexto de la Pandemia de Covid-19 en Brasil, pude crear hojas de cálculo que me ayudaron a construir un Panel interactivo que demostró visualmente la desigualdad socioeconómica en Brasil.";
        document.getElementById("apresentacao_projeto_titulo_ataque_do_missil").textContent = "Ataque con Misiles";
        document.getElementById("apresentacao_projeto_texto_ataque_do_missil").textContent = "Proyecto realizado en C++, utilizando la biblioteca OpenGl para renderizar y diseñar objetos 3D. El juego consiste en capturar tantas monedas como sea posible si eres impactado por el misil. Este proyecto lo realicé para la disciplina de infografía en la UERJ.";
        document.getElementById("apresentacao_projeto_titulo_pacman").textContent = "Pacman";
        document.getElementById("apresentacao_projeto_texto_pacman").textContent = "Proyecto realizado en Python, utilizando la librería PyGame. El proyecto fue diseñado para recrear el clásico juego Pacman, pero utilizando tecnología moderna, como la orientación a objetos.";
        document.getElementById("apresentacao_projeto_titulo_filmflix").textContent = "Filmflix";
        document.getElementById("apresentacao_projeto_texto_filmflix").textContent = "Proyecto realizado en Java, donde el usuario puede buscar una película de su elección para consultar año de estreno, duración de la película, título completo, etc. El proyecto también crea un archivo JSON con las películas elegidas. Utilicé la API de OMDB para obtener la información y la procesé con GSON.";
    } else if (language === "pt") {
        // Defina o conteúdo em português (já está em português no HTML)
        document.getElementById("apresentacao_projeto_titulo_desigualdade_brasil").textContent = "Desigualdade Estadual no Brasil";
        document.getElementById("apresentacao_projeto_texto_desigualdade_brasil").textContent = "Projeto feito no Power BI, utilizando o Excel para limpar e manipular os dados. Coletando dados do Inquérito Nacional sobre Insegurança Alimentar no Contexto da Pandemia da Covid-19 no Brasil, pude criar planilhas que me auxiliaram na construção de um Dashboard interativo que demonstasse visualmente a desigualdade socioeconômica no Brasil.";
        document.getElementById("apresentacao_projeto_titulo_ataque_do_missil").textContent = "Ataque do Missil";
        document.getElementById("apresentacao_projeto_texto_ataque_do_missil").textContent = "Projeto feito em C++, utilizando a biblioteca OpenGl para renderizar e projetar os obejtos 3D. O jogo consiste em capturar o máximo de moedas se mser atingido pelo missil. Realizei este projeto para a disciplina de computação gráfica na UERJ.";
        document.getElementById("apresentacao_projeto_titulo_pacman").textContent = "Pacman";
        document.getElementById("apresentacao_projeto_texto_pacman").textContent = "Projeto feito em Python, utilizando a biblioteca PyGame. O projeto foi idealizado em  recriar o clássico jogo do Pacman, porém utilizando uma tecnologia moderna, como orientação a objetos.";
        document.getElementById("apresentacao_projeto_titulo_filmflix").textContent = "Filmflix";
        document.getElementById("apresentacao_projeto_texto_filmflix").textContent = "Projeto feito em Java, onde o usuário pode buscar um filme de sua preferêncai para consultar o ano de lançamento, duração do filme, título completo etc. o projeto também cria um arquivo JSON com os filmes escolhidos. Utilizei a API OMDB para pegar as informações e tratei com o GSON.";
    } else if (language === "ch") {
        // Defina o conteúdo em mandarim
        document.getElementById("apresentacao_projeto_titulo_desigualdade_brasil").textContent = "巴西的国家不平等";
        document.getElementById("apresentacao_projeto_texto_desigualdade_brasil").textContent = "在Power BI中制作的项目, 使用Excel来清理和操作数据。通过收集巴西 Covid-19 大流行背景下的国家粮食不安全调查的数据，我能够创建电子表格，帮助我构建一个交互式仪表板，直观地展示巴西的社会经济不平等。";
        document.getElementById("apresentacao_projeto_titulo_ataque_do_missil").textContent = "导弹攻击";
        document.getElementById("apresentacao_projeto_texto_ataque_do_missil").textContent = "用 C++ 编写的项目，使用 OpenGL 库来渲染和设计 3D 对象。游戏包括如果你被导弹击中，尽可能多地捕获硬币。我在 UERJ 开展了计算机图形学科的这个项目。";
        document.getElementById("apresentacao_projeto_titulo_pacman").textContent = "吃豆人";
        document.getElementById("apresentacao_projeto_texto_pacman").textContent = "使用 Python 制作的项目，使用 PyGame 库。该项目旨在重现经典的吃豆人游戏，但使用了现代技术，例如面向对象。";
        document.getElementById("apresentacao_projeto_titulo_filmflix").textContent = "Filmflix";
        document.getElementById("apresentacao_projeto_texto_filmflix").textContent = "用 Java 制作的项目，用户可以在其中搜索自己选择的电影，以检查发行年份、电影时长、完整标题等。该项目还使用所选电影创建一个 JSON 文件。我使用 OMDB API 来获取信息并使用 GSON 进行处理。";
    }
}