// writing a custom function which will render the html written inside the react element
function customRender(reactElement, container){

    // create a new element and fill the innerhtml or innertext into it 
    const domELement = document.createElement(reactElement.type)
    domELement.innerHTML = reactElement.children


    // // now set all the attributes
    // domELement.setAttribute('href', Element.props.href)
    // domELement.setAttribute('target', Element.props.target)


    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domELement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domELement)
}


// React internally stores the html in this form, we have to manually write this-
const reactElement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root');


customRender(reactElement,mainContainer)

