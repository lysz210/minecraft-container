export default class Server {

  /**
   * The settings used to customize world generation. See Superflat and Customized for possible settings and examples.
   */
  generatorSettings: string = ''

  /**
   * This is the message that is displayed in the server list of the client, below the name.
The MOTD supports color and formatting codes.
The MOTD supports special characters, such as "♥". However, such characters must be converted to escaped Unicode form. An online converter can be found here.
If the MOTD is over 59 characters, the server list will likely report a communication error.
   */
  motd: string = 'A Minecraft Server'

  /**
   * 	By default it allows packets that are n-1 bytes big to go normally, but a packet of n bytes or more will be compressed down. So, a lower number means more compression but compressing small amounts of bytes might actually end up with a larger result than what went in.
-1 - disable compression entirely
0 - compress everything
Note: The Ethernet spec requires that packets less than 64 bytes become padded to 64 bytes. Thus, setting a value lower than 64 may not be beneficial. It is also not recommended to exceed the MTU, typically 1500 bytes.
   */
  networkCompressionThreshold: number = 256 // integer

  /**
   * 	Server checks connecting players against Minecraft account database. Only set this to false if your server is not connected to the Internet. Hackers with fake accounts can connect if this is set to false! If minecraft.net is down or inaccessible, no players can connect if this is set to true. Setting this variable to off purposely is called "cracking" a server, and servers that are presently with online mode off are called "cracked" servers, allowing players with unlicensed copies of Minecraft to join.
true - Enabled. The server will assume it has an Internet connection and checks every connecting player.
false - Disabled. The server will not attempt to check connecting players.
   */
  onlineMode: boolean = true

  /**
   * 	If the ISP/AS sent from the server is different from the one from Mojang's authentication server, the player is kicked
true - Enabled. Server prevents users from using vpns or proxies.
false - Disabled. The server doesn't prevent users from using vpns or proxies.
   */
  preventProxyConnections: boolean = false

  /**
   * Set this if you want the server to bind to a particular IP. It is strongly recommended that you leave server-ip blank!
Set to blank, or the IP you want your server to run (listen) on.
   */
  serverIp: string = ''

  /**
   * 	Changes the port the server is hosting (listening) on. This port must be forwarded if the server is hosted in a network using NAT (If you have a home router/firewall).
   */
  serverPort: number = 25565

  /**
   * 	Sets whether the server sends snoop data regularly to http://snoop.minecraft.net.
false - disable snooping.
true - enable snooping.
   */
  snooperEnabled: boolean = true

  /**
   * 	Linux server performance improvements: optimized packet sending/receiving on Linux
true - Enabled. Enable Linux packet sending/receiving optimization
false - Disabled. Disable Linux packet sending/receiving optimization
   */
  useNativeTransport: boolean = true
}