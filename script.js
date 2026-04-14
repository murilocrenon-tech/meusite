document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito do Header ao Rolar a Página
    // Deixa o menu totalmente preto quando você desce a página
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = "#000000";
            header.style.padding = "10px 5%"; // Dá uma leve encolhida para ficar elegante
        } else {
            header.style.background = "rgba(0, 0, 0, 0.95)";
            header.style.padding = "0 5%";
        }
    });

    // 2. Animação de Surgimento (Fade-in)
    // Faz os elementos aparecerem suavemente quando você chega neles
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Aplica a animação em todos os elementos com a classe .fade-up
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

});