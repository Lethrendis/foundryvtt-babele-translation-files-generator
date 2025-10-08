import * as exporters from './_index.mjs';

/** @type {Record<string, typeof AbstractExporter>} */
export const EXPORTERS = {
  Actor: exporters.ActorExporter,
  Adventure: exporters.AdventureExporter,
  Cards: exporters.CardsExporter,
  Item: exporters.ItemExporter,
  JournalEntry: exporters.JournalEntryExporter,
  Macro: exporters.MacroExporter,
  Playlist: exporters.PlaylistExporter,
  RollTable: exporters.RollTableExporter,
  Scene: exporters.SceneExporter,
};

export class ExporterInstantiator {
  /**
   * @param {CompendiumCollection} pack
   * @param {ExporterOptions} options
   * @param {File|null} existingFile
   * @returns {AbstractExporter}
   */
  static createForPack(pack, options, existingFile) {
    try {
      return new EXPORTERS[pack.metadata.type](pack, options, existingFile);
    } catch (err) {
      console.error(`[BTFG] Exporter creation error: ${err.toString()}`);

      ui.notifications.error(game.i18n.format('BTFG.ExporterInstantiator.InvalidCompendium', {
        label: pack.metadata.label,
      }));
    }
  }
}
