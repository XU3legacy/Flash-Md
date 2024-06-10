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
            const messageAEnvoyer = "Veuillez fournir un argument pour cette commande.";
            zk.sendMessage(dest, { text: messageAEnvoyer }, { quoted: ms });
        }
    }
);