import { AbstractExporter } from './abstract-exporter.mjs';

export class ActorExporter extends AbstractExporter {
  /**
   * @param {Object} indexDocument
   * @param {ActorData} document
   */
  async getDocumentData(indexDocument, document) {
    const { name, prototypeToken: { name: tokenName } = {} } = indexDocument;
    const documentData = { name, tokenName: tokenName ?? name };
    const { actor: actorMapping, item: itemMapping } = this.options.customMapping;

    if (this._notEmpty(document.items)) {
      documentData.items = {};

      for (const item of document.items) {
        const { name } = item;
        const itemData = { name };

        if (itemMapping) {
          this._addCustomMapping(itemMapping, item, itemData);
        }

        documentData.items[this._getExportKey(item)] = itemData;
      }
    }

    if (actorMapping) {
      this._addCustomMapping(actorMapping, indexDocument, documentData);
    }

    return documentData;
  }

  _getIndexFields() {
    return [
      'prototypeToken.name',
      ...Object.values(this.options.customMapping.actor).map((mapping) => mapping.value),
    ];
  }

  async _processDocumentData(indexDocument, documentData) {
    /** @type {Actor} */
    const document = await this.pack.getDocument(indexDocument._id);

    if (document.items.size) {
      documentData.items = {};

      for (const item of document.items) {
        documentData.items[this._getExportKey(item)] = { name: item.name };
      }
    }
  }
}
