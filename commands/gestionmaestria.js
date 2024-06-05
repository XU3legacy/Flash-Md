const { france } = require('../framework/france');

france(
    {
        nomCom: 'Darruine.stat',
        categorie: 'Maestria rpverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/9a1c19808b8b4e6bcf636.jpg';
            const msg = `╭━━━「 𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 」❏
┆ *_♯ROLE PLAYVERSE_*
╰━━━━━━━━━━━━━❖
*❖Pseudo*👤:「DARRUINE 」
*❖Type de mage*👤:「 *_MAHOTSUKAI_*」
*❖Race*:「 *_HUMAIN_*」
*❖Rang*:「E 」
*❖Classe*:「 *_NOVICE 🥉_*」
        ━━━━━━━━━━━━╮
                                                           ┆
❖━━━━━━━━━━━━━╯
*défaites: 00*
*Nombre de victoires: 00*
*_Trophee : 00🏆_*
╭━━━「 𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 」❏
┆ *_♯TOTAL FIGHT SEASON: 00 ⚔️🛡️_*
╰━━━━━━━━━━━━━❖
*❏ Gain duel : 00 🧭*
*❏ Gain quête 00 🧭:*
*❏ Gain aventure : 00 🧭*
*❏ Solde: 1000 🧭*

     ━━━━━━━━━━━
━━━━━━
*Equipment🎒: 00🥋*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


france(
    {
        nomCom: 'Minato.stat',
        categorie: 'Maestria rpverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/9a1c19808b8b4e6bcf636.jpg';
            const msg = `╭━━━「 𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 」❏
┆ *_♯ROLE PLAYVERSE_*
╰━━━━━━━━━━━━━❖
*❖Pseudo*👤:「 MINATO 」
*❖Type de mage*👤:「 *_MAHOTSUKAI_*」
*❖Race*:「 *_HUMAIN_*」
*❖Rang*:「E 」
*❖Classe*:「 *_NOVICE 🥉_*」
        ━━━━━━━━━━━━╮
                                                           ┆
❖━━━━━━━━━━━━━╯
*défaites: 00*
*Nombre de victoires: 00*
*_Trophee : 00🏆_*
╭━━━「 𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 」❏
┆ *_♯TOTAL FIGHT SEASON: 00 ⚔️🛡️_*
╰━━━━━━━━━━━━━❖
*❏ Gain duel : 00 🧭*
*❏ Gain quête 00 🧭:*
*❏ Gain aventure : 00 🧭*
*❏ Solde: 1000 🧭*

     ━━━━━━━━━━━
━━━━━━
*Equipment🎒: 00🥋*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);