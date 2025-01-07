document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: document.querySelector('[data-scroll-root]'),
        rootMargin: '0px',
        threshold: 1
    }

    const callbackFunction = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-intersecting');

                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(callbackFunction, options);

    const elementsToBeObserved = document.querySelectorAll('.box');

    elementsToBeObserved.forEach((element) => {
        observer.observe(element);
    });
});
