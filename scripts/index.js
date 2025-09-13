// JavaScript for index.html

document.addEventListener('DOMContentLoaded', function() {
    // Animation for challenge cards
    const challengeCards = document.querySelectorAll('.challenge-card');
    
    challengeCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
    });
    
    // Animation for solution cards
    const solutionCards = document.querySelectorAll('.solution-card');
    
    solutionCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2 + 0.5}s`;
        card.classList.add('fade-in');
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
            animation: fadeIn 1s ease forwards;
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
});