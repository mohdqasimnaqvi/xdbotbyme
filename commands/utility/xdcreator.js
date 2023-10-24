const { SlashCommandBuilder } = require('discord.js');
const { info } = require('./serverinfo')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('xdcreators')
		.setDescription('Replies with the creators of the bot!'),
	async execute(interaction) {
		return interaction.reply(info.bot_creator);
	},
};
