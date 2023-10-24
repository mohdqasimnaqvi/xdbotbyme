const { SlashCommandBuilder } = require('discord.js');



function reply_with_channel_to_suggest(channelToSuggestArg) {
	if (channelToSuggestArg === "server" || channelToSuggestArg === "server-suggestions") return "server-suggestions";
	if (channelToSuggestArg === "aquin" || channelToSuggestArg == "aquin-suggestions") return "aquin-suggestions";
	if (channelToSuggestArg === "main" || channelToSuggestArg === "main-suggestions" || channelToSuggestArg == "global") return "main-suggestions";
	return channelToSuggestArg;
}
module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('Replies in a diffrent channel & reacts to it 20 times.')
		.addStringOption(o => o.setName('channeltosendmsgto').setDescription('This is the channel we\'ll be sending your msg to'))
		.addStringOption(o => o.setName('msg').setDescription('This is the channel we\'ll be sending your msg to')),
	async execute(interaction) {
		const channelToSuggestArg = interaction.options.get("channeltosendmsgto").value;
		const msg = interaction.options.get("msg").value;

		let channelToSuggest = reply_with_channel_to_suggest(channelToSuggestArg);
		console.log(msg)
		// interaction.guild.channels.cache.find(channel => {console.log(channel.name); return false})
		const channel = interaction.guild.channels.cache.find(channel => channel.name === channelToSuggest);
		if (channelToSuggestArg === "PRIV") return;
		if (!channel) return await interaction.reply("Couldn't create suggestion, if you belive this is a bot error do the /xdreport command, or just contact the Bot admins")

		await interaction.reply(`✅ | Go to ${channel} to vote!`);

		const response = await channel.send(msg);
		// React to the msg twenty times
		await response.react('👍');
		await response.react('👎');

		await interaction.editReply(`✅ | Go to ${channel} to vote!`);


	},
};
