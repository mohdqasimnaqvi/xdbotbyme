const { SlashCommandBuilder } = require('discord.js');
const { readdir } = require('./serverinfo')
const fs = require('node:fs');
const path = require('node:path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('numofcommands')
		.setDescription('Replies with the creators of the bot!'),
	async execute(interaction) {
		const foldersPath = 'D:\\code\\aquin\\guide-main\\guide-main\\commands';
		const commandFolders = fs.readdirSync(foldersPath);
		let arr = 0;
		commandFolders.forEach(folder => {
			const commandsPath = `${foldersPath}/${folder}`;
			const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
			commandFiles.forEach(file => {
				arr++
			})
		})
		return interaction.reply(arr);
	},
};
