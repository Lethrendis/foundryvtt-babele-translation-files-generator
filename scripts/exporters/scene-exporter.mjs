import { AbstractExporter } from './abstract-exporter.mjs';

export class SceneExporter extends AbstractExporter {
  /**
   * @param {Object} indexDocument
   * @param {SceneData} document
   */
  async getDocumentData(indexDocument, document) {
    const { name } = indexDocument;
    const documentData = { name };

    if (this._notEmpty(document.drawings)) {
      documentData.drawings = {};

      for (const { text } of document.drawings) {
        if (text?.length) {
          documentData.drawings[text] = text;
        }
      }
    }

    if (this._notEmpty(document.notes)) {
      documentData.notes = {};

      for (const { text } of document.notes) {
        if (text?.length) {
          documentData.notes[text] = text;
        }
      }
    }

    return documentData;
  }
}
