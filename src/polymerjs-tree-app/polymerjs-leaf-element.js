import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class PolymerjsLeafElement extends PolymerElement {

    constructor() {
        super();
    }

    static get template() {
        return html`<li style="padding-left: 20px">[[id]]</li>`;
    }

    static get properties() {
        return {
            id: {
                type: String,
            }
        };
    }
}

window.customElements.define('polymerjs-leaf-element', PolymerjsLeafElement);
