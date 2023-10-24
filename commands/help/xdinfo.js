const { SlashCommandBuilder, blockQuote } = require('discord.js');
const { info } = require('./serverinfo')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('xdinfo')
		.setDescription('Replies with info about xd!'),
	async execute(interaction) {
		const explanation = `\nThe ${info.bot_name} is a general utility bot, you can do diferent commands, like show Aquin info or do suggestions in a channel with it!`
                const textToDisplay = `\`\`\`ansi
[0m [2;36m${explanation}[0m[2;32m[0m
[2;31mXDD Version: ${info.version_current}[0m[2;31m[0m
                \`\`\``

                return await interaction.reply(blockQuote(textToDisplay))
	},
};
