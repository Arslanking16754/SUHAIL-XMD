const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923134091129 ";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923134091129";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_01_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMDBHV2ZYZXduNWMzMzdQUDdlLzVmZTJBaGh6c3VpbDlCRW9Za2FLSmVFND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN1M4dUh5THJSQXVtYmI1RE1sb1RpUVwiLFxuICBcInBob25lSWRcIjogXCIzMmZmZGVlMC1iNzlkLTQzNjgtYWQwYi04NzA3MjNjMzNhOWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMjAzLFxuICAgICAgNSxcbiAgICAgIDIyNCxcbiAgICAgIDE4OSxcbiAgICAgIDIzMixcbiAgICAgIDEyMyxcbiAgICAgIDY4LFxuICAgICAgMTE3LFxuICAgICAgMTI5LFxuICAgICAgMjEzLFxuICAgICAgMTU2LFxuICAgICAgMTk5LFxuICAgICAgNzAsXG4gICAgICA5NixcbiAgICAgIDEzMCxcbiAgICAgIDE1NixcbiAgICAgIDIyNCxcbiAgICAgIDI0NyxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDE4OCxcbiAgICAgIDIyNixcbiAgICAgIDI1MSxcbiAgICAgIDE1MSxcbiAgICAgIDE5MixcbiAgICAgIDE3MyxcbiAgICAgIDI0OCxcbiAgICAgIDM1LFxuICAgICAgMjExLFxuICAgICAgOTMsXG4gICAgICAxNjEsXG4gICAgICAxMTMsXG4gICAgICAxOTIsXG4gICAgICAxMDEsXG4gICAgICAxNDEsXG4gICAgICAxMzIsXG4gICAgICAxMTIsXG4gICAgICAzOCxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHNUtSMzNUTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTM0MDkxMTI5OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzQ5MjY1OTA5MjI3NTk6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1RDOXBBREVMaTc1TGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTV1VPUEhzZ3k3c0xYQ3JiSW4rZGlWalFyYmpaWFJKbHFxU3I5bENCNER3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRiVGR1Q1ZVZWhLdlFqcnE4bnN4ZDJxL2VIVXJsWEpRdTZHUGdDNzg1SDlJRUJoMFFDZTVvTm9DVERFWE9WWDRReTZIM3BwMnRrc2I1OGpYSHpHQ0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtWUHljSjJaT1VSak1hUWR1ZndGRDUxZFg2Q3J4MTZKZUdKYk1kVk94ZlZaYjE3VmZlL25QeXZpQTNxWld5ZkROS3hpVlJGNytRMFZVU0ovYjhHQ0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEzNDA5MTEyOTo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5Njk5MjYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkNIXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQ0guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuOVJwb0c2cVI2ei9RRG9VaFpFSG94ZkxrakFBSU1SaEsxNk0xRS8wbng0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0MDgwMjU5NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTY1OTU5NDk5M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Lovelywrites43🥀💔 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Lovelywrites43🥀💔",
  ownername:process.env.OWNER_NAME|| "Lovelywrites43🥀💔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
