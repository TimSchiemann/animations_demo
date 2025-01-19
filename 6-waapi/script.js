document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle');
    const resetButton = document.getElementById('reset');
    const box = document.querySelector('.box');
    const clrBlue = window.getComputedStyle(document.documentElement).getPropertyValue('--color-blue');
    const clrOrange = window.getComputedStyle(document.documentElement).getPropertyValue('--color-orange');

    const keyframes = [
        { scale: 1, backgroundColor: clrOrange },
        { transform: 'translateX(10vw) translateY(-100px)', offset: 0.75, backgroundColor: 'red'},
        { transform: 'translateY(-100px)', scale: 1.2, backgroundColor: clrBlue},
    ]
    const options = {
        duration: 5000,
        easing: 'ease-in-out',
        fill: 'forwards'
    }

    const animation = box.animate(keyframes, options);
    animation.pause();

    toggleButton.addEventListener('click', () => {
        console.log(animation);

        if (animation.playState === 'paused') {
            toggleButton.textContent = 'Play';
            animation.play();
        } else if (animation.playState === 'running') {
            toggleButton.textContent = 'Pause';
            animation.pause();
        }
    });

    resetButton.addEventListener('click', () => {
        animation.currentTime = 0;
        animation.pause();
    })
});
