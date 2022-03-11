import DiscordJS from 'discord.js'
import path from 'path'
import WOKCommands from 'wokcommands'
import { config } from './config/config'

const client = new DiscordJS.Client({
    // Make sure to enable ALL intents on the discord bot page!
    intents: 32767
})

client.once('ready', () => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, "commands"),
        typeScript: true,
        mongoUri: config.mongodburi,
        dbOptions: {
            keepAlive: true
        },
        botOwners: config.botOwners,
        testServers: config.testServers
    })
    .setDefaultPrefix(config.defaultPrefix)
    .setColor(0x00FF00)
})

// Make sure to configure this inside of the config file
client.login(config.token)