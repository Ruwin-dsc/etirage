const Discord = require('discord.js');

module.exports = {
    name: 'setchannel',
    description: 'Définit le salon des logs des tirages.',
    dm_permission: false,
    perm: 'OWNER',
    options: [
        {
            type: 7,
            name: 'channel',
            description: 'New logs channel.',
            required: true,
            channel_types: [Discord.ChannelType.GuildText]
        }
    ],
    run: async (bot, interaction, args, config, data) => {

    }
}