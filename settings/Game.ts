/**
 * https://minecraft.gamepedia.com/Gameplay#Game_modes
 */
export enum GameMode {
  /**
   * In this mode, players have to gather all their materials to build, craft items and tools and gain experience points. There is a health, hunger and armor bar, an inventory and, when underwater, an oxygen bar. If a player runs out of hearts (health), they die, which makes them go back to their spawn point. Upon death, the player will emit smoke and the experience, losing all of their items and displaying a death message which depends on how they died. Max reach is 5 blocks.
   */
  survival,
  /**
   * The player has access to an infinite amount of almost all blocks and items available, and can destroy them instantly. Players are invulnerable, unless they fall into the void, and do not have health, armor, or hunger, and can fly. The player has access to items not available in Survival mode, e.g. spawn eggs. The player will not see command blocks if they look through the creative GUI - they need to spawn command blocks with the /give or /setblock commands. Max reach is 6 blocks.
   */
  creative,
  /**
   * Players can interact with objects such as levers and buttons, and can interact with mobs. However, they can only break blocks with tools with a CanDestroy data tag, and only place blocks if the block they are holding has a CanPlaceOn data tag, making this mode good for adventure maps. Max reach is 5 blocks
   */
  adventure,
  /**
   * This game mode was implemented in 1.8. When in spectator mode, players can clip through blocks, see what other entities are seeing by left-clicking on them, and they are invisible to everything and everyone except for other spectators. The player can't interact with blocks, entities or their inventory. When in third-person mode, they look like a transparent, floating head with no body. The player can use the scroll wheel to adjust the speed at which their are flying, unlike flying in Creative mode.
   */
  spectator
}

/**
 * https://minecraft.gamepedia.com/Difficulty
 */
export enum Difficulty {
  /**
No hostile mobs can spawn naturally, except for shulkers and the ender dragon, but they cannot deal damage to the player. Also, no spiders, cave spiders, zombie pigmen or endermen – neutral rather than hostile mobs – can spawn naturally. When any of these mobs attempt to spawn (whether naturally, through mob spawners, spawn eggs, or commands), they are removed from the game instantaneously. When the difficulty is switched from any other setting to Peaceful, all mobs that are not allowed to spawn on Peaceful are removed from the world. Players regain health rapidly over time. Despite this, it is still possible to die if damage is received quickly enough. The hunger bar never depletes and players cannot eat anything except golden apples, chorus fruits, and milk buckets unless the player has switched to Peaceful when their hunger bar was below the maximum in Java Edition. Players can eat normally though the hunger bar never depletes.‌[Bedrock Edition only] Additionally, if the hunger bar is below the maximum, it quickly regenerates.
   */
  peaceful,
  /**
   * Hostile mobs spawn, but they deal less damage than on Normal difficulty. The hunger bar can deplete, leaving the player with 10♥♥♥♥♥ if it drains completely. Cave spiders cannot poison players on Easy difficulty, and the wither does not cause the Wither effect, although wither skeletons do. Lightning sets only the struck block on fire, not surrounding blocks. Zombies do not turn villagers into zombie villagers.
   */
  easy,
  /**
   * Hostile mobs spawn and deal standard damage. The hunger bar can deplete, leaving the player with 1♥ if it drains completely. Villagers killed by zombies have a 50% chance of turning into a zombie villager.
   */
  normal,
  /**
   * Hostile mobs spawn and deal greater damage than on Normal difficulty. The hunger bar can deplete, and the player starves to death if it drains completely. Zombies can break through wooden doors and can spawn reinforcements when attacked. Spiders can spawn with a beneficial positive status effect (speed, strength, regeneration & invisibility) and these effects have an infinite duration in Java Edition. Villagers killed by zombies have a 100% chance of turning into a zombie villager.
   */
  hard
}

export default class Game {

  /**
   * 	Permette al server di annunciare quando un giocatore ottiene un impresa.
   */
  announcePlayerAchievements: boolean = true
  /**
   * 	Defines the difficulty (such as damage dealt by mobs and the way hunger and poison affects players) of the server.
If a legacy difficulty number is specified, it is silently converted to a difficulty name.
   */
  difficulty: Difficulty = Difficulty.easy
  /**
	Allows users to use flight on your server while in Survival mode, if they have a mod that provides flight installed.
With allow-flight enabled, griefers may become more common, because it makes their work easier. In Creative mode this has no effect.

false - Flight is not allowed (players in air for at least 5 seconds get kicked).
true - Flight is allowed, and used if the player has a fly mod installed.
   */
  allowFlight: boolean = false
  /**
	Allows players to travel to the Nether.
false - Nether portals will not work.
true - The server allows portals to send players to the Nether.
   */
  allowNether: boolean = true

  /**
   * Enables command blocks
   */
  enableCommandBlock: boolean = false

  /**
   * Sets the default permission level for functions.
See #op-permission-level for the details on the 4 levels.
   */
  functionPermissionLevel: number = 2 // 	integer (1-4)

  /**
   * Force players to join in the default game mode.
false - Players will join in the gamemode they left in.
true - Players will always join in the default gamemode.
   */
  forceGamemode: boolean = false
/**
 * 	Defines the mode of gameplay.
If a legacy gamemode number is specified, it is silently converted to a gamemode name.

survival (0)
creative (1)
adventure (2)
spectator (3)
 */
  gamemode: GameMode = GameMode.survival

  /**
   * 	Defines whether structures (such as villages) can be generated.
false - Structures will not be generated in new chunks.
true - Structures will be generated in new chunks.
Note: Dungeons still generate if this is set to false.
   */
  generateStructures: boolean = true

  /**
   * 	If set to true, server difficulty is ignored and set to hard and players will be set to spectator mode if they die.
   */
  hardcore: boolean = false

  /**
   * The maximum height in which building is allowed. Terrain may still naturally generate above a low height limit.
   */
  maxBuildHeight: number = 256 // integer

  /**
   * 	The maximum number of players that can play on the server at the same time. Note that more players on the server consume more resources. Note also, op player connections are not supposed to count against the max players, but ops currently cannot join a full server. However, this can be changed by going to the file called ops.json in your server directory, opening it, finding the op you want the change, and changing the setting called bypassesPlayerLimit to true (the default is false). This means that that op does not have to wait for a player to leave in order to join. Extremely large values for this field result in the client-side user list being broken.
   */
  maxPlayers: number = 20 // integer (0-2147483647)
  /**
   * 	The maximum number of milliseconds a single tick may take before the server watchdog stops the server with the message, A single server tick took 60.00 seconds (should be max 0.05); Considering it to be crashed, server will forcibly shutdown. Once this criterion is met, it calls System.exit(1).
-1 - disable watchdog entirely (this disable option was added in 14w32a)
   */
  maxTickTime: number = 60000 // integer (0–(2^63 - 1))

  /**
   * 	This sets the maximum possible size in blocks, expressed as a radius, that the world border can obtain. Setting the world border bigger causes the commands to complete successfully but the actual border does not move past this block limit. Setting the max-world-size higher than the default doesn't appear to do anything.
Examples:

Setting max-world-size to 1000 allows you to have a 2000×2000 world border.
Setting max-world-size to 4000 gives you an 8000×8000 world border.
   */
  maxWorldSize: number = 29999984 // integer (1-29999984)
  /**
   * 	Sets the default permission level for ops when using /op. All levels inherit abilities and commands from levels before them.
1 - Ops can bypass spawn protection.
2 - Ops can use all singleplayer cheats commands (except /publish, as it is not on servers; along with /debug) and use command blocks. Command blocks, along with Realms owners/operators, have the same permissions as this level.
3 - Ops can use most multiplayer-exclusive commands, including /debug, and commands that manage players (/ban, /op, etc).
4 - Ops can use all commands including /stop, /save-all, /save-on, and /save-off.
   */
  opPermissionLevel: number = 4 // integer (1-4)

  /**
   * If non-zero, players are kicked from the server if they are idle for more than that many minutes.
Note: Idle time is reset when the server receives one of the following packets:
Click Window
Enchant Item
Update Sign
Player Digging
Player Block Placement
Held Item Change
Animation (swing arm)
Entity Action
Client Status
Chat Message
Use Entity
   */
  playerIdleTimeout: number = 0 // integer

  /**
   * 	Enable PvP on the server. Players shooting themselves with arrows receive damage only if PvP is enabled.
true - Players can kill each other.
false - Players cannot kill other players (also known as Player versus Environment (PvE)).
Note: Indirect damage sources spawned by players (such as lava, fire, TNT and to some extent water, sand and gravel) still deal damage to other players.
   */
  pvp: boolean = true

  /**
   * 	Optional URI to a resource pack. The player may choose to use it.
Note that the ":" and "=" characters need to be escaped with backslash (\), e.g. http\://somedomain.com/somepack.zip?someparam\=somevalue

The resource pack may not have a larger file size than 50 MiB (≈ 50.4 MB). Note that download success or failure is logged by the client, and not by the server.
   */
  resourcePack: string = ''

  /**
   * 	Optional SHA-1 digest of the resource pack, in lowercase hexadecimal. It's recommended to specify this. This is not yet used to verify the integrity of the resource pack, but improves the effectiveness and reliability of caching.
   */
  resourcePackSha1: string = ''

  /**
   * Determines if animals can spawn.
true - Animals spawn as normal.
false - Animals immediately vanish.
Tip: if you have major lag, turn this off/set to false.
   */
  spawnAnimals: boolean = true

  /**
   * 	Determines if monsters can spawn.
true - Enabled. Monsters will appear at night and in the dark.
false - Disabled. No monsters.
This setting has no effect if difficulty = 0 (peaceful). If difficulty is not = 0, a monster can still spawn from a Monster Spawner.

Tip: if you have major lag, turn this off/set to false.
   */
  spawnMonsters: boolean = true

  /**
   * Determines whether villagers can spawn.
true - Enabled. Villagers will spawn.
false - Disabled. No villagers.
   */
  spawnNpcs: boolean = true

  /**
   * 	Determines the radius of the spawn protection as 2x+1. Setting this to 0 does not disable spawn protection, but protects the single block at the spawn point. 1 protects a 3×3 area centered on the spawn point. 2 protects 5×5, 3 protects 7×7, etc. This option is not generated on the first server start and appears when the first player joins. If there are no ops set on the server, the spawn protection is disabled automatically.
   */
  spawnProtection: number = 16 // integer

  /**
   * 	Sets the amount of world data the server sends the client, measured in chunks in each direction of the player (radius, not diameter). It determines the server-side viewing distance. (see Render distance)
10 is the default/recommended. If you have major lag, reduce this value.

Note: A value less than 9 has a big impact on mob spawning on the server, as noted in bug MC-2536.
   */
  viewDistance: number = 10 // integer (3-32)

  /**
   * Enables a whitelist on the server.
With a whitelist enabled, users not on the whitelist cannot connect. Intended for private servers, such as those for real-life friends or strangers carefully selected via an application process, for example.

false - No white list is used.
true - The file whitelist.json is used to generate the white list.
Note: Ops are automatically white listed, and there is no need to add them to the whitelist.
   */
  whiteList: boolean = false

  /**
   * 	Enforces the whitelist on the server.
When this option is enabled, users who are not present on the whitelist (if it's enabled) get kicked from the server after the server reloads the whitelist file.

false - No user will be kicked if not on the whitelist.
true - Online users not on the whitelist will be kicked.
   */
  enforceWhitelist: boolean = false
}
