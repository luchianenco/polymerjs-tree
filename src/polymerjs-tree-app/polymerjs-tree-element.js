import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class PolymerjsTreeElement extends PolymerElement {
    constructor() {
        super();
    }

    static get template() {
        return html`<ul class="tree">
    <li>[[id]]</li>
    <li>
        <slot name="subtree"/>
    </li>
    </ul>`;
    }

    static get properties() {
        return {
            id: {
                type: String,
            }
        };
    }
}

window.customElements.define('polymerjs-tree-element', PolymerjsTreeElement);
