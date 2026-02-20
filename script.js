// script.js
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // ==================== GESTÃO DE TEMA ====================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Carrega tema salvo ou usa escuro como padrão
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        const icon = themeToggle.querySelector('i');
        
        if (savedTheme === 'light') {
            body.classList.add('light');
            icon.className = 'fas fa-sun'; // Sol para tema claro
        } else {
            body.classList.remove('light');
            icon.className = 'fas fa-moon'; // Lua para tema escuro
            if (!savedTheme) {
                localStorage.setItem('theme', 'dark');
            }
        }
    }
    
    function toggleTheme() {
        const icon = themeToggle.querySelector('i');
        body.classList.toggle('light');
        
        if (body.classList.contains('light')) {
            icon.className = 'fas fa-sun'; // Sol azul no tema claro
            localStorage.setItem('theme', 'light');
        } else {
            icon.className = 'fas fa-moon'; // Lua vermelha no tema escuro
            localStorage.setItem('theme', 'dark');
        }
    }
    
    loadTheme();
    themeToggle.addEventListener('click', toggleTheme);
    
    // ==================== GESTÃO DE IDIOMAS ====================
    const translations = {
        pt: {
            nome: "Luiz Alcântara",
            "nav.sobre": "Sobre Mim",
            "nav.habilidades": "Habilidades",
            "nav.certificados": "Certificados",
            "nav.projetos": "Projetos",
            "nav.contato": "Contato",
            "sobre.titulo": "Sobre Mim",
            "sobre.texto1": "🌍 Uma jornada que atravessa fronteiras — literalmente.",
            "sobre.texto2": "Comecei como <strong>Técnico em Redes no Tribunal Regional Eleitoral de São Paulo (TRE-SP)</strong>, onde vivenciei a importância de infraestruturas robustas para o funcionamento da democracia. Depois, cursei <strong>Análise e Desenvolvimento de Sistemas na Universidade Mackenzie</strong>, unindo o conhecimento de infraestrutura ao desenvolvimento de soluções.",
            "sobre.texto3": "Buscando aprofundar minha visão sobre segurança, obtive certificações em <strong>LGPD e em Segurança Ofensiva pela Solyd</strong> — áreas que considero fundamentais para construir sistemas realmente completos.",
            "sobre.texto4": "O passo mais ousado foi mudar para <strong>São Petersburgo</strong>, onde atualmente estudo na <strong>Gorny Universitet</strong>. Essa experiência vai muito além da sala de aula: é a oportunidade de mergulhar em uma nova cultura, aprender com abordagens diferentes e, claro, desenvolver meu russo — que se soma ao português nativo, espanhol e inglês.",
            "sobre.texto5": "Hoje, meu grande diferencial é essa <strong>visão global e integrada</strong>: entendo de redes, de desenvolvimento e de segurança, e ainda posso atuar em equipes multiculturais graças aos idiomas. Acredito que tecnologia de ponta se constrói com técnica, mas também com capacidade de dialogar com o mundo.",
            "habilidades.titulo": "Habilidades",
            "habilidades.python": "Python: Automação e análise de dados",
            "habilidades.linux": "Linux: Administração de sistemas",
            "habilidades.redes": "Redes: Configuração e gerenciamento",
            "habilidades.html": "HTML5: Estruturação de páginas",
            "habilidades.css": "CSS3: Estilização avançada",
            "habilidades.js": "JavaScript: Interatividade",
            "certificados.titulo": "Certificações",
            "certificados.lgpd": "LGPD - Lei Geral de Proteção de Dados",
            "certificados.lgpd-desc": "Certificação em conformidade com a Lei Geral de Proteção de Dados",
            "certificados.seguranca": "Segurança Ofensiva - Solyd",
            "certificados.seguranca-desc": "Certificação em técnicas avançadas de segurança ofensiva e ethical hacking",
            "certificados.redes": "Técnico em Redes - TRE-SP",
            "certificados.redes-desc": "Experiência prática em infraestrutura de redes no Tribunal Regional Eleitoral",
            "certificados.gorny": "Gorny Universitet - Rússia",
            "certificados.gorny-desc": "Intercâmbio acadêmico em São Petersburgo",
            "projetos.titulo": "Meus Projetos",
            "projetos.iphones": "Loja de iPhones",
            "projetos.iphones-desc": "Site institucional para loja de iPhones, com design moderno, responsivo e foco em conversão.",
            "projetos.tarefas": "Sistema de Tarefas",
            "projetos.tarefas-desc": "Aplicativo web para gerenciamento de tarefas diárias com armazenamento local e interface intuitiva.",
            "projetos.embreve": "Em Breve",
            "projetos.embreve-desc": "Novo projeto em desenvolvimento. Em breve mais novidades!",
            "projetos.embreve-label": "Em Breve",
            "projetos.ver": "Ver Projeto",
            "contato.titulo": "Contato",
            "contato.nome": "Seu Nome",
            "contato.email": "Seu E-mail",
            "contato.mensagem": "Sua Mensagem",
            "contato.enviar": "Enviar Mensagem",
            "footer.direitos": "Todos os direitos reservados."
        },
        en: {
            nome: "Luiz Alcântara",
            "nav.sobre": "About Me",
            "nav.habilidades": "Skills",
            "nav.certificados": "Certificates",
            "nav.projetos": "Projects",
            "nav.contato": "Contact",
            "sobre.titulo": "About Me",
            "sobre.texto1": "🌍 A journey that crosses borders — literally.",
            "sobre.texto2": "I started as a <strong>Network Technician at the Regional Electoral Court of São Paulo (TRE-SP)</strong>, where I experienced the importance of robust infrastructures for democracy. Then, I studied <strong>Systems Analysis and Development at Mackenzie University</strong>, combining infrastructure knowledge with solution development.",
            "sobre.texto3": "Seeking to deepen my security knowledge, I obtained certifications in <strong>LGPD and Offensive Security from Solyd</strong> — areas I consider essential for building truly complete systems.",
            "sobre.texto4": "The boldest step was moving to <strong>St. Petersburg</strong>, where I currently study at <strong>Gorny University</strong>. This experience goes far beyond the classroom: it's an opportunity to immerse myself in a new culture, learn from different approaches, and develop my Russian — which adds to native Portuguese, Spanish, and English.",
            "sobre.texto5": "Today, my great differential is this <strong>global and integrated vision</strong>: I understand networks, development, and security, and I can work in multicultural teams thanks to languages. I believe cutting-edge technology is built with technique, but also with the ability to dialogue with the world.",
            "habilidades.titulo": "Skills",
            "habilidades.python": "Python: Automation and data analysis",
            "habilidades.linux": "Linux: System administration",
            "habilidades.redes": "Networks: Configuration and management",
            "habilidades.html": "HTML5: Page structuring",
            "habilidades.css": "CSS3: Advanced styling",
            "habilidades.js": "JavaScript: Interactivity",
            "certificados.titulo": "Certifications",
            "certificados.lgpd": "LGPD - General Data Protection Law",
            "certificados.lgpd-desc": "Certification in compliance with the General Data Protection Law",
            "certificados.seguranca": "Offensive Security - Solyd",
            "certificados.seguranca-desc": "Certification in advanced offensive security techniques and ethical hacking",
            "certificados.redes": "Network Technician - TRE-SP",
            "certificados.redes-desc": "Practical experience in network infrastructure at the Regional Electoral Court",
            "certificados.gorny": "Gorny University - Russia",
            "certificados.gorny-desc": "Academic exchange in St. Petersburg",
            "projetos.titulo": "My Projects",
            "projetos.iphones": "iPhone Store",
            "projetos.iphones-desc": "Institutional website for an iPhone store, with modern, responsive design focused on conversion.",
            "projetos.tarefas": "Task System",
            "projetos.tarefas-desc": "Web application for daily task management with local storage and intuitive interface.",
            "projetos.embreve": "Coming Soon",
            "projetos.embreve-desc": "New project in development. More news soon!",
            "projetos.embreve-label": "Coming Soon",
            "projetos.ver": "View Project",
            "contato.titulo": "Contact",
            "contato.nome": "Your Name",
            "contato.email": "Your Email",
            "contato.mensagem": "Your Message",
            "contato.enviar": "Send Message",
            "footer.direitos": "All rights reserved."
        },
        es: {
            nome: "Luiz Alcântara",
            "nav.sobre": "Sobre Mí",
            "nav.habilidades": "Habilidades",
            "nav.certificados": "Certificados",
            "nav.projetos": "Proyectos",
            "nav.contato": "Contacto",
            "sobre.titulo": "Sobre Mí",
            "sobre.texto1": "🌍 Un viaje que cruza fronteras — literalmente.",
            "sobre.texto2": "Comencé como <strong>Técnico en Redes en el Tribunal Regional Electoral de São Paulo (TRE-SP)</strong>, donde experimenté la importancia de infraestructuras robustas para la democracia. Luego, estudié <strong>Análisis y Desarrollo de Sistemas en la Universidad Mackenzie</strong>, combinando el conocimiento de infraestructura con el desarrollo de soluciones.",
            "sobre.texto3": "Buscando profundizar mi visión sobre seguridad, obtuve certificaciones en <strong>LGPD y Seguridad Ofensiva de Solyd</strong> — áreas que considero fundamentales para construir sistemas realmente completos.",
            "sobre.texto4": "El paso más audaz fue mudarme a <strong>San Petersburgo</strong>, donde actualmente estudio en la <strong>Universidad Gorny</strong>. Esta experiencia va mucho más allá del aula: es la oportunidad de sumergirme en una nueva cultura, aprender de diferentes enfoques y, por supuesto, desarrollar mi ruso — que se suma al portugués nativo, español e inglés.",
            "sobre.texto5": "Hoy, mi gran diferencial es esta <strong>visión global e integrada</strong>: entiendo de redes, desarrollo y seguridad, y puedo trabajar en equipos multiculturales gracias a los idiomas. Creo que la tecnología de punta se construye con técnica, pero también con capacidad de dialogar con el mundo.",
            "habilidades.titulo": "Habilidades",
            "habilidades.python": "Python: Automatización y análisis de datos",
            "habilidades.linux": "Linux: Administración de sistemas",
            "habilidades.redes": "Redes: Configuración y gestión",
            "habilidades.html": "HTML5: Estructuración de páginas",
            "habilidades.css": "CSS3: Estilización avanzada",
            "habilidades.js": "JavaScript: Interactividad",
            "certificados.titulo": "Certificaciones",
            "certificados.lgpd": "LGPD - Ley General de Protección de Datos",
            "certificados.lgpd-desc": "Certificación en cumplimiento con la Ley General de Protección de Datos",
            "certificados.seguranca": "Seguridad Ofensiva - Solyd",
            "certificados.seguranca-desc": "Certificación en técnicas avanzadas de seguridad ofensiva y hacking ético",
            "certificados.redes": "Técnico en Redes - TRE-SP",
            "certificados.redes-desc": "Experiencia práctica en infraestructura de redes en el Tribunal Regional Electoral",
            "certificados.gorny": "Universidad Gorny - Rusia",
            "certificados.gorny-desc": "Intercambio académico en San Petersburgo",
            "projetos.titulo": "Mis Proyectos",
            "projetos.iphones": "Tienda de iPhones",
            "projetos.iphones-desc": "Sitio web institucional para una tienda de iPhones, con diseño moderno y responsivo enfocado en conversión.",
            "projetos.tarefas": "Sistema de Tareas",
            "projetos.tarefas-desc": "Aplicación web para gestión de tareas diarias con almacenamiento local e interfaz intuitiva.",
            "projetos.embreve": "Próximamente",
            "projetos.embreve-desc": "Nuevo proyecto en desarrollo. ¡Pronto más novedades!",
            "projetos.embreve-label": "Próximamente",
            "projetos.ver": "Ver Proyecto",
            "contato.titulo": "Contacto",
            "contato.nome": "Tu Nombre",
            "contato.email": "Tu Email",
            "contato.mensagem": "Tu Mensaje",
            "contato.enviar": "Enviar Mensaje",
            "footer.direitos": "Todos los derechos reservados."
        },
        ru: {
            nome: "Луис Алькантара",
            "nav.sobre": "Обо мне",
            "nav.habilidades": "Навыки",
            "nav.certificados": "Сертификаты",
            "nav.projetos": "Проекты",
            "nav.contato": "Контакты",
            "sobre.titulo": "Обо мне",
            "sobre.texto1": "🌍 Путешествие, пересекающее границы — буквально.",
            "sobre.texto2": "Я начал как <strong>сетевой техник в Региональном избирательном суде Сан-Паулу (TRE-SP)</strong>, где понял важность надежной инфраструктуры для демократии. Затем я учился <strong>анализу и разработке систем в Университете Маккензи</strong>, объединяя знания инфраструктуры с разработкой решений.",
            "sobre.texto3": "Стремясь углубить свои знания в области безопасности, я получил сертификаты <strong>LGPD и Offensive Security от Solyd</strong> — области, которые считаю фундаментальными для создания действительно полных систем.",
            "sobre.texto4": "Самым смелым шагом был переезд в <strong>Санкт-Петербург</strong>, где я сейчас учусь в <strong>Горном университете</strong>. Этот опыт выходит далеко за пределы аудитории: это возможность погрузиться в новую культуру, учиться у разных подходов и, конечно, развивать свой русский — который добавляется к родному португальскому, испанскому и английскому.",
            "sobre.texto5": "Сегодня мое главное преимущество — это <strong>глобальное и интегрированное видение</strong>: я понимаю сети, разработку и безопасность, и могу работать в мультикультурных командах благодаря языкам. Я верю, что передовые технологии строятся на технике, но также и на способности вести диалог с миром.",
            "habilidades.titulo": "Навыки",
            "habilidades.python": "Python: Автоматизация и анализ данных",
            "habilidades.linux": "Linux: Администрирование систем",
            "habilidades.redes": "Сети: Настройка и управление",
            "habilidades.html": "HTML5: Структурирование страниц",
            "habilidades.css": "CSS3: Продвинутая стилизация",
            "habilidades.js": "JavaScript: Интерактивность",
            "certificados.titulo": "Сертификаты",
            "certificados.lgpd": "LGPD - Общий закон о защите данных",
            "certificados.lgpd-desc": "Сертификация в соответствии с Общим законом о защите данных",
            "certificados.seguranca": "Наступательная безопасность - Solyd",
            "certificados.seguranca-desc": "Сертификация по продвинутым методам наступательной безопасности и этичному взлому",
            "certificados.redes": "Сетевой техник - TRE-SP",
            "certificados.redes-desc": "Практический опыт в сетевой инфраструктуре в Региональном избирательном суде",
            "certificados.gorny": "Горный университет - Россия",
            "certificados.gorny-desc": "Академический обмен в Санкт-Петербурге",
            "projetos.titulo": "Мои проекты",
            "projetos.iphones": "Магазин iPhone",
            "projetos.iphones-desc": "Корпоративный сайт для магазина iPhone с современным, адаптивным дизайном, ориентированным на конверсию.",
            "projetos.tarefas": "Система задач",
            "projetos.tarefas-desc": "Веб-приложение для ежедневного управления задачами с локальным хранилищем и интуитивным интерфейсом.",
            "projetos.embreve": "Скоро",
            "projetos.embreve-desc": "Новый проект в разработке. Скоро новости!",
            "projetos.embreve-label": "Скоро",
            "projetos.ver": "Посмотреть проект",
            "contato.titulo": "Контакты",
            "contato.nome": "Ваше имя",
            "contato.email": "Ваш email",
            "contato.mensagem": "Ваше сообщение",
            "contato.enviar": "Отправить сообщение",
            "footer.direitos": "Все права защищены."
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Função para atualizar o idioma da página
    function changeLanguage(lang) {
        // Atualiza textos normais
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Atualiza placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Atualiza classe ativa dos botões
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Salva preferência
        localStorage.setItem('preferred-language', lang);
    }

    // Adiciona eventos aos botões de idioma
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Carrega idioma salvo ou usa português como padrão
    const savedLanguage = localStorage.getItem('preferred-language') || 'pt';
    changeLanguage(savedLanguage);

    // ==================== SCROLL SUAVE ====================
    function smoothScroll(target, duration = 800) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;
        
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const ease = progress < 0.5 
                ? 2 * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href !== '#') {
                smoothScroll(href);
            }
        });
    });
    
    // ==================== DESTAQUE DO MENU ATIVO ====================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href').substring(1);
            if (linkHref === current) {
                link.classList.add('active');
            }
        });
    }
    
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveLink, 50);
    });
    
    updateActiveLink();
    
    // ==================== VALIDAÇÃO DE FORMULÁRIO ====================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        function showError(input, message) {
            const formGroup = input.parentElement;
            let errorElement = formGroup.querySelector('.error-message');
            
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                errorElement.style.color = '#ff3131';
                errorElement.style.fontSize = '12px';
                errorElement.style.marginTop = '-5px';
                errorElement.style.marginBottom = '10px';
                formGroup.appendChild(errorElement);
            }
            
            errorElement.textContent = message;
            input.style.borderColor = '#ff3131';
        }
        
        function removeError(input) {
            const formGroup = input.parentElement;
            const errorElement = formGroup.querySelector('.error-message');
            if (errorElement) {
                errorElement.remove();
            }
            input.style.borderColor = '';
        }
        
        nameInput.addEventListener('input', function() {
            if (this.value.trim().length < 3) {
                showError(this, 'Nome deve ter pelo menos 3 caracteres');
            } else {
                removeError(this);
            }
        });
        
        emailInput.addEventListener('input', function() {
            if (!isValidEmail(this.value.trim())) {
                showError(this, 'Email inválido');
            } else {
                removeError(this);
            }
        });
        
        messageInput.addEventListener('input', function() {
            if (this.value.trim().length < 10) {
                showError(this, 'Mensagem deve ter pelo menos 10 caracteres');
            } else {
                removeError(this);
            }
        });
        
        contactForm.addEventListener('submit', function(e) {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            
            let hasError = false;
            
            if (name.length < 3) {
                showError(nameInput, 'Nome deve ter pelo menos 3 caracteres');
                hasError = true;
            }
            
            if (!isValidEmail(email)) {
                showError(emailInput, 'Email inválido');
                hasError = true;
            }
            
            if (message.length < 10) {
                showError(messageInput, 'Mensagem deve ter pelo menos 10 caracteres');
                hasError = true;
            }
            
            if (hasError) {
                e.preventDefault();
                const firstError = document.querySelector('.error-message');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Enviando...';
                submitButton.disabled = true;
            }
        });
    }
    
    // ==================== EFEITOS VISUAIS ADICIONAIS ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section, .habilidade, .projeto-card, .certificado-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ==================== COPIAR EMAIL ====================
    const emailField = document.getElementById('email');
    if (emailField) {
        emailField.addEventListener('click', function() {
            this.select();
        });
    }
    
    console.log('Portfólio carregado com sucesso!');
});