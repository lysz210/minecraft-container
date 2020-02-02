/**
 * 
 */
export default class Rcon {
  /**
   * Enables remote access to the server console.
   */
  enable: boolean = false

  /**
   * 	Sets the password for RCON: a remote console protocol that can allow other applications to connect and interact with a Minecraft server over the internet.
   */
  password: string = ''
  /**
   * 	Sets the RCON network port.
   */
  port: number = 25575 // integer
}
