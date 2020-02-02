export enum LevelType {
  /**
   * Standard world with hills, valleys, water, etc.
   */
  default,
  /**
   * A flat world with no features, can be modified with generator-settings.
   */
  flat,
  /**
   * Same as default but all biomes are larger.
   */
  largebiomes,
  /**
   * Same as default but world-generation height limit is increased.
   */
  amplified,
  /**
   * Same as default unless generator-settings is set to a preset.
   */
  buffet
}

/**
 * all this props must be prefix with level-
 */
export default class Level {
  /**
   * 	The "level-name" value is used as the world name and its folder name. You may also copy your saved game folder here, and change the name to the same as that folder's to load it instead.
Characters such as ' (apostrophe) may need to be escaped by adding a backslash before them.
   */
  name: string = 'world'
  /**
   * https://minecraft.gamepedia.com/Seed_(level_generation)
   * Add a seed for your world, as in Singleplayer.
Some examples are: minecraft, 404, 1a2b3c.
   */
  seed: string = ''

  /**
   * Determines the type of map that is generated.
   */
  type: LevelType = LevelType.default
}
