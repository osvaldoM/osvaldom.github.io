const $ = document.querySelector.bind(document),
    $$ = document.querySelectorAll.bind(document);


const addEventListenerList = (list, event, fn) => {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

export {
    addEventListenerList,
    $,
    $$
}
