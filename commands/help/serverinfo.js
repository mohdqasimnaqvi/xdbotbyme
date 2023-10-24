const { SlashCommandBuilder } = require('discord.js');

let info = {version_state: "pre_beta" , version_day: "11/10/2023" , version_num: "01" , version_update_counter: 1 /* Starts with Beta */ , version_current: `pre_beta 01`,refreshedAppCommands:false,bot_name:"XDD", bot_by:"Aquin", bot_creator:"pcannon, Friction, A (dumb) person", bot_current_state:"developing", bot_real_current_state:"invisible"} 

module.exports = {
	info,
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		let string;
		Object.keys(info).forEach(item => {
			string = `${string}
${item}: ${info[item]}`
		})
		return interaction.reply(string);
	},
};
