import { AbstractExporter } from './abstract-exporter.mjs';

export class MacroExporter extends AbstractExporter {
  /**
   * @param {Object} indexDocument
   * @param {MacroData} document
   */
  async getDocumentData(indexDocument, document) {
    const { name, command } = indexDocument;

    return { name, command };
  }

  _getIndexFields() {
    return ['command'];
  }
}
