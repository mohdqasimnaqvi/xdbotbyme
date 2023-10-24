const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('xdping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		return interaction.reply('xdPong!');
	},
};
