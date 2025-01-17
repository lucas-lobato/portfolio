document.getElementById("languages").addEventListener("change", function() {
    var selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

function changeLanguage(language) {
    const translations = {
        en: {
            bi_comercial_title: "Commercial BI",
            bi_comercial_text: "Project developed in Power BI to analyze the entire commercial sector of the company. The Commercial BI provides detailed views that assist in the monthly and daily monitoring of revenue, enabling more efficient and strategic management of commercial operations.",
            desigualdade_brasil_title: "State Inequality in Brazil",
            desigualdade_brasil_text: "Project made in Power BI, using Excel to clean and manipulate the data. Collecting data from the National Survey on Food Insecurity in the Context of the Covid-19 Pandemic in Brazil, I was able to create spreadsheets that helped me build an interactive Dashboard that visually demonstrated socioeconomic inequality in Brazil.",
            ataque_do_missil_title: "Missile Attack",
            ataque_do_missil_text: "Project made in C++, using the OpenGl library to render and design 3D objects. The game consists of capturing as many coins as possible if you are hit by the missile. I carried out this project for the computer graphics discipline at UERJ.",
            pacman_title: "Pacman",
            pacman_text: "Project made in Python, using the PyGame library. The project was designed to recreate the classic Pacman game, but using modern technology, such as object orientation.",
            filmflix_title: "Filmflix",
            filmflix_text: "Project made in Java, where the user can search for a film of their choice to check the year of release, duration of the film, full title, etc. the project also creates a JSON file with the chosen films. I used the OMDB API to get the information and processed it with GSON."
        },
        es: {
            bi_comercial_title: "BI Comercial",
            bi_comercial_text: "Proyecto desarrollado en Power BI para analizar todo el sector comercial de la empresa. El BI Comercial proporciona vistas detalladas que ayudan en el monitoreo mensual y diario de los ingresos, lo que permite una gestión más eficiente y estratégica de las operaciones comerciales.",
            desigualdade_brasil_title: "Desigualdad estatal en Brasil",
            desigualdade_brasil_text: "Proyecto realizado en Power BI, utilizando Excel para limpieza y manipulación de datos. Al recopilar datos de la Encuesta Nacional sobre Inseguridad Alimentaria en el Contexto de la Pandemia de Covid-19 en Brasil, pude crear hojas de cálculo que me ayudaron a construir un Panel interactivo que demostró visualmente la desigualdad socioeconómica en Brasil.",
            ataque_do_missil_title: "Ataque con Misiles",
            ataque_do_missil_text: "Proyecto realizado en C++, utilizando la biblioteca OpenGl para renderizar y diseñar objetos 3D. El juego consiste en capturar tantas monedas como sea posible si eres impactado por el misil. Este proyecto lo realicé para la disciplina de infografía en la UERJ.",
            pacman_title: "Pacman",
            pacman_text: "Proyecto realizado en Python, utilizando la librería PyGame. El proyecto fue diseñado para recrear el clásico juego Pacman, pero utilizando tecnología moderna, como la orientación a objetos.",
            filmflix_title: "Filmflix",
            filmflix_text: "Proyecto realizado en Java, donde el usuario puede buscar una película de su elección para consultar año de estreno, duración de la película, título completo, etc. El proyecto también crea un archivo JSON con las películas elegidas. Utilicé la API de OMDB para obtener la información y la procesé con GSON."
        },
        pt: {
            bi_comercial_title: "BI Comercial",
            bi_comercial_text: "Projeto desenvolvido no Power BI para analisar todo o setor comercial da empresa. O BI Comercial fornece visões detalhadas que auxiliam no monitoramento mensal e diário do faturamento, permitindo uma gestão mais eficiente e estratégica das operações comerciais.",
            desigualdade_brasil_title: "Desigualdade Estadual no Brasil",
            desigualdade_brasil_text: "Projeto feito no Power BI, utilizando o Excel para limpar e manipular os dados. Coletando dados do Inquérito Nacional sobre Insegurança Alimentar no Contexto da Pandemia da Covid-19 no Brasil, pude criar planilhas que me auxiliaram na construção de um Dashboard interativo que demonstasse visualmente a desigualdade socioeconômica no Brasil.",
            ataque_do_missil_title: "Ataque do Missil",
            ataque_do_missil_text: "Projeto feito em C++, utilizando a biblioteca OpenGl para renderizar e projetar os obejtos 3D. O jogo consiste em capturar o máximo de moedas se mser atingido pelo missil. Realizei este projeto para a disciplina de computação gráfica na UERJ.",
            pacman_title: "Pacman",
            pacman_text: "Projeto feito em Python, utilizando a biblioteca PyGame. O projeto foi idealizado em  recriar o clássico jogo do Pacman, porém utilizando uma tecnologia moderna, como orientação a objetos.",
            filmflix_title: "Filmflix",
            filmflix_text: "Projeto feito em Java, onde o usuário pode buscar um filme de sua preferêncai para consultar o ano de lançamento, duração do filme, título completo etc. o projeto também cria um arquivo JSON com os filmes escolhidos. Utilizei a API OMDB para pegar as informações e tratei com o GSON."
        },
        ch: {
            bi_comercial_title: "商业 BI",
            bi_comercial_text: "在 Power BI 中开发的项目，用于分析公司的整个商业部门。商业 BI 提供详细的视图，有助于每月和每日监控收入，从而更有效和战略性地管理商业运营。",
            desigualdade_brasil_title: "巴西的国家不平等",
            desigualdade_brasil_text: "在Power BI中制作的项目, 使用Excel来清理和操作数据。通过收集巴西 Covid-19 大流行背景下的国家粮食不安全调查的数据，我能够创建电子表格，帮助我构建一个交互式仪表板，直观地展示巴西的社会经济不平等。",
            ataque_do_missil_title: "导弹攻击",
            ataque_do_missil_text: "在 C++ 中制作的项目，使用 OpenGl 库渲染和设计 3D 对象。游戏包括在不被导弹击中的情况下捕获尽可能多的硬币。我为 UERJ 的计算机图形学课程进行了这个项目。",
            pacman_title: "吃豆人",
            pacman_text: "在 Python 中制作的项目，使用 PyGame 库。该项目旨在重新创建经典的吃豆人游戏，但使用现代技术，例如面向对象。",
            filmflix_title: "Filmflix",
            filmflix_text: "用 Java 制作的项目，用户可以搜索自己选择的电影以检查上映年份、电影时长、完整标题等。该项目还会创建一个包含所选电影的 JSON 文件。我使用 OMDB API 获取信息并使用 GSON 处理。"
        }
    };

    document.getElementById("apresentacao_projeto_titulo_bi_comercial").textContent = translations[language].bi_comercial_title;
    document.getElementById("apresentacao_projeto_texto_bi_comercial").textContent = translations[language].bi_comercial_text;
    document.getElementById("apresentacao_projeto_titulo_desigualdade_brasil").textContent = translations[language].desigualdade_brasil_title;
    document.getElementById("apresentacao_projeto_texto_desigualdade_brasil").textContent = translations[language].desigualdade_brasil_text;
    document.getElementById("apresentacao_projeto_titulo_ataque_do_missil").textContent = translations[language].ataque_do_missil_title;
    document.getElementById("apresentacao_projeto_texto_ataque_do_missil").textContent = translations[language].ataque_do_missil_text;
    document.getElementById("apresentacao_projeto_titulo_pacman").textContent = translations[language].pacman_title;
    document.getElementById("apresentacao_projeto_texto_pacman").textContent = translations[language].pacman_text;
    document.getElementById("apresentacao_projeto_titulo_filmflix").textContent = translations[language].filmflix_title;
    document.getElementById("apresentacao_projeto_texto_filmflix").textContent = translations[language].filmflix_text;
}

// Carrossel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});

// Set the first slide as the current slide
slides[0].classList.add('current-slide');