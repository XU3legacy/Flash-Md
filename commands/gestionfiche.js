const { france } = require('../framework/france');

france(
    {
        nomCom: 'tip',
        categorie: 'SEABOX-FC'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/97aa926dc486fa6080894.jpg';
            const msg = `*EN COUR...♻️*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);