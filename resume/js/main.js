// Main JavaScript file
import { initNavbar } from './components/navbar.js';
import { initPortfolio } from './components/portfolio.js';
import { fadeIn, slideIn } from './utils/animations.js';
import { createObserver } from './utils/intersection-observer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initNavbar();
    initPortfolio();

    // Setup animations
    const animateElements = document.querySelectorAll('[data-animate]');
    const observer = createObserver((element) => {
        const animation = element.dataset.animate;
        if (animation === 'fade') {
            fadeIn(element);
        } else if (animation.startsWith('slide-')) {
            const direction = animation.split('-')[1];
            slideIn(element, direction);
        }
    });

    animateElements.forEach(element => observer.observe(element));
});