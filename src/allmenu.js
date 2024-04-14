const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}

exports.allmenu =  ( isPremium,thisHit, sender, prefix, pushname) => {

return `

*𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑*

🍀 *ɴᴀᴍᴀ* : ${pushname}
🍀 *sᴛᴀᴛᴜs* : ${isPremium ? 'Premium':'Free'}
🍀 *ʟɪᴍɪᴛ* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
🍀 *Limit Game* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}


`}

exports.fitur = (prefix) => {
return``+readmore+`
╔───⩽ 𝐆𝐑𝐔𝐏𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .setnamegc ⌕
┃│⬡-▸ .setdesc ⌕
┃│⬡-▸ .setppgc ⌕
┃│⬡-▸ .infogc ⌕
┃│⬡-▸ .getppgc ⌕
┃│⬡-▸ .cekmember ⌕
┃│⬡-▸ .closegroup ⌕
┃│⬡-▸ .opengroup ⌕
┃│⬡-▸ .hidetag ⌕
┃│⬡-▸ .tagall ⌕
┃│⬡-▸ .promote ⌕
┃│⬡-▸ .demote ⌕
┃│⬡-▸ .kick ⌕
┃│⬡-▸ .add ⌕
┃│⬡-▸ .resetlinkgc ⌕
┃│⬡-▸ .linkgc ⌕
┃│⬡-▸ .ban ⌕
┃│⬡-▸ .unban ⌕
┃│⬡-▸ .listgc ⌕
┃│⬡-▸ .afk ⌕
┃│⬡-▸ .delete ⌕
┃│⬡-▸ .profil ⌕
┃│⬡-▸ .intro ⌕
┃│⬡-▸ .topbalance ⌕
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .play ⌕
┃│⬡-▸ .playmp4 ⌕
┃│⬡-▸ .ytmp3 ⌕
┃│⬡-▸ .instagram ⌕
┃│⬡-▸ .ttpoto ⌕
┃│⬡-▸ .tiktok ⌕
┃│⬡-▸ .ttaudio ⌕
┃│⬡-▸ .song ⌕
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐓𝐎𝐎𝐋𝐒𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .translate ⌕
┃│⬡-▸ .kalkulator ⌕
┃│⬡-▸ .nobg ⌕
┃│⬡-▸ .pinterest ⌕
┃│⬡-▸ .gimage ⌕
┃│⬡-▸ .remini ⌕
┃│⬡-▸ .jarak ❌
┃│⬡-▸ .get ⌕
┃│⬡-▸ .flaming1 - 6 ⌕
┃│⬡-▸ .wattpad ⌕
┃│⬡-▸ .playstore ⌕
┃│⬡-▸ .brainly ⌕
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐏𝐑𝐈𝐌𝐁𝐎𝐍𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .artinama ⌕
┃│⬡-▸ .artimimpi ⌕
┃│⬡-▸ .kecocokanpasangan ⌕
┃│⬡-▸ .ramalancinta ⌕
┃│⬡-▸ .kecocokannama ⌕
┃│⬡-▸ .jadiannikah ⌕
┃│⬡-▸ .sifatusaha ⌕
┃│⬡-▸ .rezeki ⌕
┃│⬡-▸ .pekerjaan ⌕
┃│⬡-▸ .nasib ⌕
┃│⬡-▸ .penyakit ⌕
┃│⬡-▸ .artitarot ⌕
┃│⬡-▸ .fengshui ⌕
┃│⬡-▸ .haribaik ⌕
┃│⬡-▸ .harisangar ⌕
┃│⬡-▸ .harisial ⌕
┃│⬡-▸ .harinaga ⌕
┃│⬡-▸ .peruntungan ⌕
┃│⬡-▸ .weton ⌕
┃│⬡-▸ .karakter ⌕
┃│⬡-▸ .masasubur ⌕
┃│⬡-▸ .zodiak ⌕
┃│⬡-▸ .wangy ⌕
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .sticker
┃│⬡-▸ .smeme
┃│⬡-▸ .swm
┃│⬡-▸ .qc
┃│⬡-▸ .ttp
┃│⬡-▸ .attp
┃│⬡-▸ .mukelu
┃│⬡-▸ .gurastick
┃│⬡-▸ .lovestick
┃│⬡-▸ .dogestick
┃│⬡-▸ .paimon
┃│⬡-▸ .tele
┃│⬡-▸ .cry
┃│⬡-▸ .kill
┃│⬡-▸ .hug
┃│⬡-▸ .pat
┃│⬡-▸ .lick
┃│⬡-▸ .kiss
┃│⬡-▸ .bite
┃│⬡-▸ .yeet
┃│⬡-▸ .bully
┃│⬡-▸ .bonk
┃│⬡-▸ .wink
┃│⬡-▸ .poke
┃│⬡-▸ .nom
┃│⬡-▸ .slap
┃│⬡-▸ .smile
┃│⬡-▸ .wave
┃│⬡-▸ .awoo
┃│⬡-▸ .blush
┃│⬡-▸ .smug
┃│⬡-▸ .glomp
┃│⬡-▸ .happy
┃│⬡-▸ .dance
┃│⬡-▸ .cringe
┃│⬡-▸ .cuddle
┃│⬡-▸ .highfive
┃│⬡-▸ .handhold
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐅𝐔𝐍𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .bucinserti
┃│⬡-▸ .pacarsertifikat
┃│⬡-▸ .tololsertifikat
┃│⬡-▸ .bagaimanakah
┃│⬡-▸ .bisakah
┃│⬡-▸ .apakah
┃│⬡-▸ .kapankah
┃│⬡-▸ .cekwatak
┃│⬡-▸ .cekhobby
┃│⬡-▸ .cekmenek
┃│⬡-▸ .cekkontol
┃│⬡-▸ .cebelapaimutciaku
┃│⬡-▸ .tiktokghea
┃│⬡-▸ .tiktokpanrika
┃│⬡-▸ .tiktokbocil
┃│⬡-▸ .tiktokkayes
┃│⬡-▸ .cosplayangel
┃│⬡-▸ .videogalau
┃│⬡-▸ .wibuvid
┃│⬡-▸ .chinese
┃│⬡-▸ .hijab
┃│⬡-▸ .indo
┃│⬡-▸ .japanese
┃│⬡-▸ .korean
┃│⬡-▸ .malay
┃│⬡-▸ .randomgirl
┃│⬡-▸ .randomboy
┃│⬡-▸ .thai
┃│⬡-▸ .vietnamese
┃│⬡-▸ cecan
┃│⬡-▸ cogan
┃│⬡-▸ .hacker
┃│⬡-▸ .pubg
┃│⬡-▸ .boneka
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐆𝐀𝐌𝐄𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .tebakkata
┃│⬡-▸ .matematika
┃│⬡-▸ .tekateki
┃│⬡-▸ .susunkata
┃│⬡-▸ .tebakkimia
┃│⬡-▸ .tebaklirik
┃│⬡-▸ .tebakgambar
┃│⬡-▸ .caklontong
┃│⬡-▸ .family100
┃│⬡-▸ .tebaklirik
┃│⬡-▸ .claim
┃│⬡-▸ .shop
┃│⬡-▸ .transfer
┃│⬡-▸ .limit
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .confes
┃│⬡-▸ .menfes
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .kodebahasa
┃│⬡-▸ .tts
┃│⬡-▸ .toimg
┃│⬡-▸ .tovn
┃│⬡-▸ .tovideo
┃│⬡-▸ .tomp3
┃│⬡-▸ .togif
┃│⬡-▸ .tourl
┃│⬡-▸ .terbalik
┃│⬡-▸ .bass
┃│⬡-▸ .deep
┃│⬡-▸ .earrape
┃│⬡-▸ .fast 
┃│⬡-▸ .nightcore
┃│⬡-▸ .fat
┃│⬡-▸ .reverse
┃│⬡-▸ .robot
┃│⬡-▸ .smooth
┃│⬡-▸ .slow
┃│⬡-▸ .tupai
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐈𝐒𝐋𝐀𝐌𝐈𝐂𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .kisahnabi
┃│⬡-▸ .alquran ❌
┃│⬡-▸ .islamic
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐀𝐍𝐈𝐌𝐄𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .randomanime
┃│⬡-▸ .anime
┃│⬡-▸ .naotomori
┃│⬡-▸ .loli
┃│⬡-▸ .cosplay
┃│⬡-▸ .husbu
┃│⬡-▸ .milf
┃│⬡-▸ .wallml
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐓𝐄𝐗𝐓𝐏𝐑𝐎𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .pornhub
┃│⬡-▸ .glitch
┃│⬡-▸ .avenger
┃│⬡-▸ .space
┃│⬡-▸ .marvelstudio
┃│⬡-▸ .ninjalogo
┃│⬡-▸ .lionlogo
┃│⬡-▸ .wolflogo
┃│⬡-▸ .steel3d
┃│⬡-▸ .wallgravity
┃│⬡-▸ .blackpink
┃│⬡-▸ .neon
┃│⬡-▸ .greenneon
┃│⬡-▸ .advanceglow
┃│⬡-▸ .futureneon
┃│⬡-▸ .sandwriting
┃│⬡-▸ .sandsummer
┃│⬡-▸ .sandengraved
┃│⬡-▸ .metaldark
┃│⬡-▸ .neonlight
┃│⬡-▸ .holographic
┃│⬡-▸ .text1917
┃│⬡-▸ .minion
┃│⬡-▸ .deluxesilver
┃│⬡-▸ .newyearcard
┃│⬡-▸ .bloodfrosted
┃│⬡-▸ .halloween
┃│⬡-▸ .jokerlogo
┃│⬡-▸ .fireworksparkle
┃│⬡-▸ .natureleaves
┃│⬡-▸ .bokeh
┃│⬡-▸ .toxic
┃│⬡-▸ .strawberry
┃│⬡-▸ .bok3d
┃│⬡-▸ .breakwall
┃│⬡-▸ .icecold
┃│⬡-▸ .luxury
┃│⬡-▸ .cloud
┃│⬡-▸ .summersand
┃│⬡-▸ .horrorblood
┃│⬡-▸ .thunder
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐑𝐀𝐍𝐃𝐎𝐌𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .nsfw
┃│⬡-▸ .walpaper
┃│⬡-▸ .memeindo
┃│⬡-▸ .ppcp
┃│⬡-▸ .pantun
┃│⬡-▸ .motivasi
┃│⬡-▸ .katabijak
┃│⬡-▸ .dilanquote
┃│⬡-▸ .truth
┃│⬡-▸ .dare
┃│⬡-▸ .infocuaca
┃│⬡-▸ .mountain
┃│⬡-▸ .programing
┃│⬡-▸ .technology
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .setbio
┃│⬡-▸ .setppbot ❌
┃│⬡-▸ .setnamebot
┃│⬡-▸ .clearsesi
┃│⬡-▸ .delsampah
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐒𝐓𝐎𝐑𝐀𝐆𝐄𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .addvn
┃│⬡-▸ .delvn
┃│⬡-▸ .listvn
┃│⬡-▸ .addimage
┃│⬡-▸ .delimage
┃│⬡-▸ .listimage
┃│⬡-▸ .delvideo
┃│⬡-▸ .addvideo
┃│⬡-▸ .listvideo
┃│⬡-▸ .addsticker
┃│⬡-▸ .delsticker
┃│⬡-▸ .liststicker
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
╔───⩽ 𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔 ⩾
┃╒───────────────┈ ⳹
┃│⬡-▸ .getcase
┃│⬡-▸ .addprem
┃│⬡-▸ .delprem
┃│⬡-▸ .public
┃│⬡-▸ .self
┃│⬡-▸ .addsewa
┃│⬡-▸ .listsewa
┃│⬡-▸ .bcgc
┃│⬡-▸ .ceksewa
┃│⬡-▸ .join
┃│⬡-▸ .joincall 
┃│⬡-▸ .adderror
┃│⬡-▸ .delerror
┃│⬡-▸ .listerror
┃│⬡-▸ .clearerror
┃│⬡-▸ .addcmdowner
┃│⬡-▸ .delcmdowner
┃│⬡-▸ .listcmdowner
┃│⬡-▸ .addcmdprem
┃│⬡-▸ .delcmdprem
┃│⬡-▸ .listcmdprem
┃│⬡-▸ .addcmdlimit
┃│⬡-▸ .delcmdlimit
┃│⬡-▸ .listcmdlimit
┃╘───────────────┈ ⳹
╚────────────────┈ ⳹
`
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})


