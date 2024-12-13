// Animation Utilities
const fadeIn = (element, duration = 500) => {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease`;
    
    requestAnimationFrame(() => {
        element.style.opacity = '1';
    });
};

const slideIn = (element, direction = 'left', duration = 500) => {
    const translations = {
        left: 'translateX(-20px)',
        right: 'translateX(20px)',
        up: 'translateY(20px)',
        down: 'translateY(-20px)'
    };

    element.style.opacity = '0';
    element.style.transform = translations[direction];
    element.style.transition = `all ${duration}ms ease`;
    
    requestAnimationFrame(() => {
        element.style.opacity = '1';
        element.style.transform = 'translate(0)';
    });
};

export { fadeIn, slideIn };