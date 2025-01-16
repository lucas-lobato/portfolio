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
        document.getElementById("apresentacao_projeto_titulo_bi_comercial").textContent = "Commercial BI";
        document.getElementById("apresentacao_projeto_texto_bi_comercial").textContent = "Project developed in Power BI to analyze the entire commercial sector of the company. The Commercial BI provides detailed views that assist in the monthly and daily monitoring of revenue, enabling more efficient and strategic management of commercial operations.";
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
        document.getElementById("apresentacao_projeto_titulo_bi_comercial").textContent = "BI Comercial";
        document.getElementById("apresentacao_projeto_texto_bi_comercial").textContent = "Proyecto desarrollado en Power BI para analizar todo el sector comercial de la empresa. El BI Comercial proporciona vistas detalladas que ayudan en el monitoreo mensual y diario de los ingresos, lo que permite una gestión más eficiente y estratégica de las operaciones comerciales.";
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
        document.getElementById("apresentacao_projeto_titulo_bi_comercial").textContent = "BI Comercial";
        document.getElementById("apresentacao_projeto_texto_bi_comercial").textContent = "Projeto desenvolvido no Power BI para analisar todo o setor comercial da empresa. O BI Comercial fornece visões detalhadas que auxiliam no monitoramento mensal e diário do faturamento, permitindo uma gestão mais eficiente e estratégica das operações comerciais.";
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
        document.getElementById("apresentacao_projeto_titulo_bi_comercial").textContent = "商业 BI";
        document.getElementById("apresentacao_projeto_texto_bi_comercial").textContent = "在 Power BI 中开发的项目，用于分析公司的整个商业部门。商业 BI 提供详细的视图，有助于每月和每日监控收入，从而更有效和战略性地管理商业运营。";
        document.getElementById("apresentacao_projeto_titulo_desigualdade_brasil").textContent = "巴西的国家不平等";
        document.getElementById("apresentacao_projeto_texto_desigualdade_brasil").textContent = "在Power BI中制作的项目, 使用Excel来清理和操作数据。通过收集巴西 Covid-19 大流行背景下的国家粮食不安全调查的数据，我能够创建电子表格，帮助我构建一个交互式仪表板，直观地展示巴西的社会经济不平等。";
    }
}