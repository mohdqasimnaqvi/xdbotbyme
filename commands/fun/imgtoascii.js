const { SlashCommandBuilder } = require('discord.js');
const Jimp =require('jimp')

function convertToAsciiArt(image)
{
    const targetWidth = 30 * 2 + 3;
    const targetHeight = 30;
    // const characters = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@'];
	const characters = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. '.split('').reverse();

    
    image.resize(targetWidth, targetHeight);

    let asciiArt = '';

    for (let y = 0; y < targetHeight; y++)
    {
        for (let x = 0; x < targetWidth; x++)
        {
            const pixelColor = image.getPixelColor(x, y);
            const brightness = Jimp.intToRGBA(pixelColor).r / 255;
            const charIndex = Math.floor(brightness * (characters.length - 1));

            asciiArt += characters[charIndex];
        }

        asciiArt += '\n';
    }

    const chunkSize = 2000;

    asciiArtChunks = [];

    for (let i = 0; i < asciiArt.length; i += chunkSize)
    {
        asciiArtChunks.push(asciiArt.substring(i, i + chunkSize));
    }

    return asciiArtChunks;
}

module.exports = {
	convertToAsciiArt,
	data: new SlashCommandBuilder()
		.setName('imgtoascii')
		.setDescription('Replies with the ascii version of your image!')
		.addStringOption(o => o.setName('imageurl').setDescription('The URL of the img')),
	async execute(interaction) {
		
		try {
			const arg1 = interaction.options.getString("imageurl")

			let image

			try {
				image = await Jimp.read(arg1);
			} catch (error) {
				return await interaction.reply(`An error occured. ERROR DUMP: ${error}`)
			}
		
			if (!image) return await interaction.reply("Image URL is not valid")

			const asciiArt = convertToAsciiArt(image);
			for (const chunk of asciiArt) return await interaction.reply(`\`\`\`${chunk}\`\`\``);
		} catch (error) {
			return await interaction.reply(`ERROR ON GENERATING ASCII ART: ${error}`)
		}


	},
};
