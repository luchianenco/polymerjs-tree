import './polymerjs-tree-element';
import './polymerjs-leaf-element';

/**
 * @customElement
 * @polymer
 */
export default class PolymerjsTreeApp {
  constructor() {
      const json = '{"id": 1, "items": [{"id": 2, "items": [{ "id": 3 }]}]}';
      this.data = JSON.parse(json);
  }

  createTree() {
      return this._createElement(this.data);
  }

  _createElement(data) {
      if (data.hasOwnProperty('items')) {
          return this._createTreeElement(data);
      } else {
        return this._createLeafElement(data);
      }
  }

  _createTreeElement(data) {
      let treeElement = document.createElement('polymerjs-tree-element');
      treeElement.setAttribute('id', data.id);
      for (let item of data.items) {
          let subElement = this._createElement(item);
          subElement.slot = 'subtree';
          treeElement.appendChild(subElement);
      }

      return treeElement;
  }

  _createLeafElement(data) {
      let leafElement = document.createElement('polymerjs-leaf-element');
      leafElement.setAttribute('id', data.id);

      return leafElement;
  }
}
