const { france } = require('../framework/france');

france(
    {
        nomCom: 'miranda',
        categorie: 'bloodyfamily'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/b22532cc3cb9d8cc9e61d.jpg';
            const numeroUtilisateur = ms.participant;
            const msg = `Bonjour @${numeroUtilisateur.split("@")[0]}, tu as exécuté la commande '${commandeOptions.nomCom}'. Voici une image pour toi:`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });

            // Ajoutez ici le code pour envoyer un message si aucun argument n'est fourni
            const messageAEnvoyer = "╭━━━「 𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 」❏
┆*♯ ROLE PLAY VERSE*
╰━━━━━━━━━━━━━❖
*❖Pseudo*👤:「 」
*❖Type de mage*👤:「 」
*❖Race*:「 」
*❖Rang*:「 」
*❖Classe*:「 」
        ━━━━━━━━━━━━╮
                                                           ┆
❖━━━━━━━━━━━━━╯
*Nombre de défaites*:
*Nombre de victoires*:
╭━━━「 𝚳𝚫𝚵𝐒𝚻𝚪𝚰𝚫 」❏
┆*♯ TOTAL FIGHT SEASON*:
╰━━━━━━━━━━━━━❖
*❏ Gain duel*:
*❏ Gain quête*:
*❏ Gain aventure*:
*❏ Solde*:

     ━━━━━━━━━━━
━━━━━━
*Equipment🎒*:";
            zk.sendMessage(dest, { text: messageAEnvoyer }, { quoted: ms });
        }
    }
);