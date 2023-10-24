const { SlashCommandBuilder, blockQuote } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aquininfo')
		.setDescription('Replies with info about xd!'),
	async execute(interaction) {
		const url = 'https://aquindoc.netlify.app/'
		const explanation = `
This is Aquin, An Future App. From a vast varity of Epic Ideas, We Create Future. "We Gotchu!" is all we say. Making our Users feeling Productive is our aim. Aquin will be coming on Microsoft Store and Play Store Soon! We try our best to make the use of Code to make your use of Tech more ease and productive. More is always Coming Soon!
Remember We Always "Gotchu!", You can download Aquin on Android, Windows and You can use it on any browser! we will be working on New Ideas, Daily, So Download Aquin Now!`
		const textToDisplay = `\`\`\`ansi
[2;36m${explanation}[0m
[2;31m${url}[0m[2;31m[0m
[2;33mThis bot has been brought to you by @pcannon @friction470 & @nerdyandquirky[0m[2;31m[0m
		\`\`\``

		const response = await interaction.reply(blockQuote(textToDisplay))
		await response.react('😎');
	},
};
