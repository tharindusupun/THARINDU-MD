
const { fetchJson, cmd, citel, Config } = require('../lib')

cmd({
            pattern: "ss",
            desc: "web ss", 
            react: "📸",
            category: "downloader"
            
            
        },
        async(Void, citel, text) => {
            if (!text) return
const webss = await fetchJson(`https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}`)
            citel.reply (`*Screenshot is taking, please wait...*`)
       Void.sendMessage(citel.chat, {
                image: {
                    url: `https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=${Config.botapikey}` ,
                },
                caption: `● ᴘᴏᴡᴇʀᴅ ʙʏ —͟͞ 𝙏𝙃𝘼𝙍𝙄𝙉𝘿𝙐 ͢ ͢𝙎𝙐𝙋𝙐𝙉 🇱🇰`,
            }, {
                quoted: citel,
            });
 }
)



cmd({

            pattern: "fb",
            desc: "fb down",
            react: "📥",
            category: "downloader"
        },
        async(Void, citel, text) => {
            if (!text) return
const fbdl = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=${Config.botapikey}`)
const videolink = fbdl.result.HD
            citel.reply (`*Finding Your Facebook Video* 🌐📡`);
       Void.sendMessage(citel.chat, {
                video: {
                    url: videolink ,
                },
                caption: `● ᴘᴏᴡᴇʀᴅ ʙʏ —͟͞ 𝙏𝙃𝘼𝙍𝙄𝙉𝘿𝙐 ͢ ͢𝙎𝙐𝙋𝙐𝙉 🇱🇰`,
                footer: `tlang().footer`,
            }, {
                quoted: citel,
            });
 }
)



cmd({
            pattern: "tt",
            alias: ["tiktok"],
            desc: "tiktok downloader",
            react:"🚀",
            category: "downloader"
        },
        async(Void, citel, text) => {
            if (!text) return
const ttdl = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/tikok?url=${text}&apikey=${Config.botapikey}`)
    
const videolink = ttdl.result.video2
            citel.reply (`*Finding Your Tiktok Video* 🌐📡`);
       Void.sendMessage(citel.chat, {
                video: {
                    url: videolink ,
                },
                
                caption: `● ᴘᴏᴡᴇʀᴅ ʙʏ —͟͞ 𝙏𝙃𝘼𝙍𝙄𝙉𝘿𝙐 ͢ ͢𝙎𝙐𝙋𝙐𝙉 🇱🇰`,
            }, {
                quoted: citel,
            });
 }
)
