// JavaScript for models.html

document.addEventListener('DOMContentLoaded', function() {
    // Animation for model cards
    const modelCards = document.querySelectorAll('.model-card');
    
    modelCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
        card.classList.add('slide-in');
    });
    
    // Animation for workflow steps
    const workflowSteps = document.querySelectorAll('.workflow-step');
    
    workflowSteps.forEach((step, index) => {
        step.style.animationDelay = `${index * 0.4 + 0.9}s`;
        step.classList.add('slide-in');
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        .slide-in {
            animation: slideIn 1s ease forwards;
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
});