const addEventListenerList = (list, event, fn) => {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

const screenToSVG = (svg, screenX, screenY) => {
    const p = svg.createSVGPoint()
    p.x = screenX
    p.y = screenY
    return p.matrixTransform(svg.getScreenCTM().inverse());
}

const sVGToScreen = (svg, svgX, svgY) => {
    const p = svg.createSVGPoint()
    p.x = svgX
    p.y = svgY
    return p.matrixTransform(svg.getScreenCTM());
}

export {
    addEventListenerList,
    screenToSVG,
    sVGToScreen
}
