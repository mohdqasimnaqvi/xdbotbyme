const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('areyoumybot')
		.setDescription('Replies with Yes/No or does it?'),
	async execute(interaction) {
		const member = await interaction.guild.members.fetch(interaction.user.id);
		const role = interaction.guild.roles.cache.find(r => r.name === 'Bot admin');

		if (!member.roles.cache.has(role.id)) return await interaction.reply("You are not my master")

		await interaction.reply("Hello master!")
	},
};
