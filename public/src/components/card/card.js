class Card extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'description', 'link', 'linktxt', 'img']
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="src/components/card/card.css">
        <div class="container__card">
            <div>
                <h1>${this.title}</h1>
                <p>${this.description}</p>
                <a href="${this.link}">${this.linktxt}</a>
            </div>
            <img src="${this.img}" alt="${this.title}">
        </div>
        `;
    }
}

customElements.define('card-component', Card);
export default Card;