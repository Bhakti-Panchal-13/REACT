const customRender = function(reactElement , container){
    /* const domElement = document.createElement(reactElement.type)
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    domElement.innerHTML = reactElement.children

    container.appendChild(domElement) */

    const domElements = document.createElement(reactElement.type)
    document.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElements.setAttribute('prop' , reactElement.props[prop])
    }
    container.append(domElements)
}


const reactElement = {
    type: 'a',
    props : {
        href : "https://google.com",
        target : "_blank",
    },
    children: "click me to visit google"
}


const root = document.getElementById("root")

customRender(reactElement , root)