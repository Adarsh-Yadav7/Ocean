// JavaScript for data.html

document.addEventListener('DOMContentLoaded', function() {
    // Animation for data source cards
    const dataSourceCards = document.querySelectorAll('.data-source-card');
    
    dataSourceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
        card.classList.add('fade-in-up');
    });
    
    // Animation for flow steps
    const flowSteps = document.querySelectorAll('.flow-step');
    
    flowSteps.forEach((step, index) => {
        step.style.animationDelay = `${index * 0.4 + 0.9}s`;
        step.classList.add('fade-in-up');
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in-up {
            animation: fadeInUp 1s ease forwards;
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
    
    // Interactive data features
    const dataFeatures = document.querySelectorAll('.data-features li');
    
    dataFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});