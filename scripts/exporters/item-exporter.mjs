import { AbstractExporter } from './abstract-exporter.mjs';

export class ItemExporter extends AbstractExporter {
  /**
   * @param {Object} indexDocument
   * @param {ItemData} document
   */
  async getDocumentData(indexDocument, document) {
    const { name } = indexDocument;
    const documentData = { name };

    this._addCustomMapping(this.options.customMapping.item, indexDocument, documentData);

    return documentData;
  }

  _getIndexFields() {
    return [...Object.values(this.options.customMapping.item).map((mapping) => mapping.value)];
  }
}
