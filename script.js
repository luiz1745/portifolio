// script.js

// Alternar entre modo claro e escuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? 'Modo Claro' : 'Modo Escuro';
});

// Traduzir o site para inglês
const translateToggle = document.getElementById('translate-toggle');
translateToggle.addEventListener('click', () => {
    const isEnglish = translateToggle.textContent === 'Traduzir para Inglês';
    translateToggle.textContent = isEnglish ? 'Traduzir para Português' : 'Traduzir para Inglês';

    const elementsToTranslate = {
        'sobre': {
            'pt': 'Sobre Mim',
            'en': 'About Me'
        },
        'habilidades': {
            'pt': 'Habilidades',
            'en': 'Skills'
        },
        'contato': {
            'pt': 'Contato',
            'en': 'Contact'
        },
        'descricao_python': {
            'pt': 'Python: Uma linguagem poderosa para automação e análise de dados.',
            'en': 'Python: A powerful language for automation and data analysis.'
        },
        'descricao_linux': {
            'pt': 'Linux: Um sistema operacional robusto e flexível.',
            'en': 'Linux: A robust and flexible operating system.'
        },
        'descricao_redes': {
            'pt': 'Redes: Habilidade em configurar e gerenciar redes de computadores.',
            'en': 'Networks: Skill in configuring and managing computer networks.'
        },
        'descricao_html': {
            'pt': 'HTML: A base da web, usada para estruturar páginas.',
            'en': 'HTML: The foundation of the web, used to structure pages.'
        },
        'descricao_css': {
            'pt': 'CSS: Estilizando a web com beleza e funcionalidade.',
            'en': 'CSS: Styling the web with beauty and functionality.'
        },
        'descricao_js': {
            'pt': 'JavaScript: Tornando a web interativa e dinâmica.',
            'en': 'JavaScript: Making the web interactive and dynamic.'
        },
        'footer': {
            'pt': '© 2025 Luiz Alcântara. Todos os direitos reservados.',
            'en': '© 2025 Luiz Alcântara. All rights reserved.'
        }
    };

    for (const key in elementsToTranslate) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = elementsToTranslate[key][isEnglish ? 'en' : 'pt'];
        }
    }
});
