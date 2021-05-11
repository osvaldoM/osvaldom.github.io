export const preload = ({
    inserted(el) {
        if(el.tagName.toLowerCase() !== 'a') {
            console.error('preload directive added to non-link element');
            return;
        }
        if(el.href === window.location.href)
            return;
        el.addEventListener('mouseover', ({target}) => {
            fetch(target.href)
        }, {
            once: true
        });
    }
});
