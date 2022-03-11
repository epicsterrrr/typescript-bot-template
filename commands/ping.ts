import { ICommand } from "wokcommands";

export default {
    aliases: ["p", "latency"],
    category: "Utility",
    slash: "both",
    cooldown: "5s",
    hidden: false,
    callback({ message, interaction, client }) {
        const reply = `Pong! ${client.ws.ping}ms`
        
        if (message) {
            message.reply(reply)
        }

        if (interaction) {
            interaction.reply(reply)
        }
    }
} as ICommand