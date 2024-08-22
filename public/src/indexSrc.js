import * as components from './components/indexComponents.js';

class Container extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="src/styles.css">
        <div class="cards__container">
            <card-component
                title= "The Legend of Zelda amiibo"
                description= "Potencia tu juego con los amiibo de la coleccion
                The Legend of Zelda."
                link="https://store.nintendo.es/es/games/enhance-your-play-games/amiibo?c_franchise=The+Legend+of+Zelda&orderable_only=true&sort=newest-products"
                linktxt="Completa tu coleccion!"
                img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/kj6n1mmv5i3yqjvk6f56"
            ></card-component>
            <card-component
                title="Megapromocion 12 + 2"
                description="2 meses adicionales al comprar cualquier 
                subscripcion de 12 meses."
                link="https://store.nintendo.es/es/games/enhance-your-play-games/nintendo-switch-online-games"
                linktxt="Ver mas detalles"
                img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/afdfdrgq8i4dpnere9h5"
            ></card-component>
            <card-component
                title="Mando de Nintendo 64"
                description="Disfruta de tus juegos de Nintendo 64 de la forma en que se deben jugar: con un mando inalambrico de tamaño completo de Nintendo 64!"
                link="https://store.nintendo.es/es/mando-de-nintendo-64-n64-para-nintendo-switch-000000000010006981"
                linktxt="Comprar"
                img="https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/lvk7zz3tlmx5gqhpgf5r"
            ></card-component>
        </div>
        `;
    }
}

customElements.define('cards-container', Container);