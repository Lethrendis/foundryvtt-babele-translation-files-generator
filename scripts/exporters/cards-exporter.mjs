import { AbstractExporter } from './abstract-exporter.mjs';

/**
 * @method _getPackDocument {CardsData}
 */
export class CardsExporter extends AbstractExporter {
  /**
   * @param {Object} indexDocument
   * @param {CardsData} document
   */
  async getDocumentData(indexDocument, document) {
    const { name, description } = indexDocument;
    const documentData = { name, description };

    if (this._notEmpty(document.cards)) {
      documentData.cards = {};

      for (const { name, description, back, faces } of document.cards) {
        documentData.cards[name] = { name, description, back, faces };
      }
    }

    return documentData;
  }
}
