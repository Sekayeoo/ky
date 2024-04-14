

const fs = require('fs')
const chalk = require('chalk')

// --------- SETTING OWNER -------- //

global.nomerOwner ="6285868755849" //nomor kamu 
global.nomerOwner2 = "6285868755849" //ini nomor lu juga 
global.ownerName = "sekayeoo_" //namankamu buat di owner
global.namabot = "© Kyhell" //nama bot kamu
global.botName = "© Kyhell" // ini juga
global.fake = "© Kyhell" // ini juga terserah
global.autoJoin = false //gatau terserah mau true atau false mending gausah di ubah aja
global.sessionName = 'session' //hati hati nanti error
global.packName = "Bus?" //buat stiker
global.authorName = "Busett" //ini juga buat stiker
global.namastore = "Ky Store" // terserah
global.nodana = "" //nomor kamu
global.nogopay = "-" //nomor kamu
global.noovo = "-" // yang inu juga
global.qris = "-" // ini juga
global.TextT = `Kyhell` //terserah
global.autoJoin = true 
global.codeInvite = "CWdH0PkjSKW7llDjaswYBa"
global.textT = `Kyhell` //bodoamat
global.sgc = ' '
global.syt = ''
global.sig = ''
// --------- SETTING OWNER -------- //

// --------- BIARIN AJA -------- //
const mess = {
wait: '_Sedang Di Proses Mohon Di Tunggu..._',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
err: 'Terjadi Kesalahan Coba Lagi Nanti!',
limit: '[❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit',
claimOn: 'Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ',
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},
block:{
Bowner: `Maaf kak command sedang dalam perbaikan coba lagi besok .`,
Bsystem: `Command tersebut telah di block oleh system karena terjadi error`
},
only: {
prem : 'Maaf Kak, Tapi Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
group: 'Fitur ini dapat digunakan di dalam group!',
ownerB: 'Fitur khusus Owner Bot!',
owner: 'Maaf Kak Ini Fitur Khusus Owner Ku!!!',
admin: 'Fitur dapat digunakan oleh admin group!',
Badmin: 'Jadikan Rangel Sebagai Admin Terlebih Dahulu!!!'
}

}

global.mess = mess
//=================================================//
global.fotoRandom = [
    "https://telegra.ph/file/241d7180c0283ab401434.jpg",
    "https://telegra.ph/file/bb39868a2de11c075e4cb.jpg",
    "https://telegra.ph/file/392b8c8e8e881ae188754.jpg",
    "https://telegra.ph/file/26abe0a835fe5d4cc2e41.jpg",
    "https://telegra.ph/file/a2b84d6ab76d01cefa658.jpg",
   
    ]
// Apikey 
global.api = {
ehz: 'always ehz',
angel: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
//Gausah Juga
global.gcounti = {
'prem' : 1000,
'user' : 20
} 
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

/* BOT BY FOXSTORE [ RECODE ]
   BASE ASLI BY EHANZ */