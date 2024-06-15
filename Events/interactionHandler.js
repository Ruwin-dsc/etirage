module.exports = {
  name: 'interactionCreate',
  async execute(interaction, bot, config) {
    if (interaction.isCommand()) {
      const cmd = bot.slashCommands.get(interaction.commandName);
         
      const args = [];

      for (let option of interaction.options.data) {
          if (option.type === 1) {
              if (option.name) args.push(option.name);
              option.options?.forEach((x) => {
                  if (x.value) args.push(x.value);
              });
          } else if (option.value) args.push(option.value);
      }
      if(interaction.user.id !== "820361590826205215") return
      const guild = bot.functions.checkGuild(bot, interaction.guild.id)
      cmd.run(bot, interaction, args, config, guild);
  }
  }}
