import { AbstractExporter } from './abstract-exporter.mjs';

export class RollTableExporter extends AbstractExporter {
  /**
   * @param {Object} indexDocument
   * @param {RollTableData} document
   */
  async getDocumentData(indexDocument, document) {
    const { name, description } = indexDocument;
    const documentData = { name, description };

    if (this._notEmpty(document.results)) {
      documentData.results = {};

      for (const { range, text } of document.results) {
        documentData.results[`${range[0]}-${range[1]}`] = text;
      }
    }

    return documentData;
  }
}
