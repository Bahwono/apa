const {guildId, channelIdJoin} = require('../config.json');

module.exports = {
    name: 'guildMemberAdd',
    description: 'Untuk mendeteksi jika ada member yang masuk di server',
	execute(member) {
	    if(member.guild.id === guildId){
            const channelJoin = member.guild.channels.cache.get(channelIdJoin);
            const messageJoin= `**<@${member.id}>\`\`\`\nš Selamat Datang ${member.user.username} š\nš Jangan Lupa Baca Rules š\nš Semoga Betah Disini Yaa š\`\`\`**`;
            channelJoin.send(messageJoin);
            member.roles.add('');
            console.log(`${member.user.username} Telah masuk ke server`);
        };
	},
};