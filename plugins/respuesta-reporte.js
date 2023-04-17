import { numero } from './reporte-conversacion.js';
async function handler(m, { conn, command, text }) {
    

   // let analiztxt = m.quoted && 'text' in m.quoted ? m.quoted.text : `${text}: ${m.text}`
 //   console.log(analiztxt);
   // let regex = /wa\.me\/(\d+)/;
   // let match = analiztxt.match(regex);
  //  if (!match || !match[1]) {
   //     return conn.sendMessage(m.sender, 'No se ha encontrado el número de cliente en el mensaje citado.');
   // }

    //let clientNumber = numero
    //let clientJID = `${numero}@s.whatsapp.net`;

    let txt = ''
    let count = 0;
    for (const c of text) {
        await new Promise(resolve => setTimeout(resolve, 50));
        txt += c;
        count++;

        if (count % 10 === 0) {
            conn.sendPresenceUpdate('composing', m.chat);
        }
    }
    await conn.reply(`${numero}@s.whatsapp.net`, txt.trim(), m)
       // await conn.sendMessage(`${numero}@s.whatsapp.net`, { text: txt.trim(), mentions: conn.parseMention(txt) }, { userJid: conn.user.jid, quoted: m, ephemeralExpiration: 1 * 100, disappearingMessagesInChat: true });
    
}

handler.command = ['responder']
handler.private = true
handler.owner = true

export default handler
