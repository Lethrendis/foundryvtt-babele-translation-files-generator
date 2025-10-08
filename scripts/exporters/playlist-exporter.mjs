import { AbstractExporter } from './abstract-exporter.mjs';

export class PlaylistExporter extends AbstractExporter {
  /**
   * @param {Object} indexDocument
   * @param {PlaylistData} document
   */
  async getDocumentData(indexDocument, document) {
    const { name, description } = indexDocument;
    const documentData = { name, description };

    if (this._notEmpty(document.sounds)) {
      documentData.sounds = {};

      for (const { name, description } of document.sounds) {
        documentData.sounds[name] = { name, description };
      }
    }

    return documentData;
  }
}
