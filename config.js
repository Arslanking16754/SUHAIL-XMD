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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_34_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTQyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIsXG4gICAgICAgIDMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidkt4VTFxcmFBT2x0UzNXcVhoSU9VRENkbDdPUXVBNkFncm9WbjZhYmxyRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMzQwOTExMjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYzMDI5MDhCOEFGODhDQUFFQUVGNzA5NzUzNTVGRDYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODIyNTI4N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvcklSVlE4dlFpR0N5UGJiTWYyTnh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0YWE5YjhkLTAwZWEtNGQ2MC04ZTFjLTAxMTE3YjY1YWUxOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICA1NCxcbiAgICAgIDU4LFxuICAgICAgMjQzLFxuICAgICAgODYsXG4gICAgICAzMCxcbiAgICAgIDEwLFxuICAgICAgMTU2LFxuICAgICAgMzcsXG4gICAgICA3OCxcbiAgICAgIDIxNyxcbiAgICAgIDIzNyxcbiAgICAgIDE4OSxcbiAgICAgIDQyLFxuICAgICAgNzUsXG4gICAgICAyMzcsXG4gICAgICAyMTcsXG4gICAgICAxNzgsXG4gICAgICAzNixcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICA0OCxcbiAgICAgIDQ5LFxuICAgICAgMjQsXG4gICAgICAxMTAsXG4gICAgICAyMDksXG4gICAgICAzOCxcbiAgICAgIDIwNCxcbiAgICAgIDE3NixcbiAgICAgIDE2NixcbiAgICAgIDkyLFxuICAgICAgMTYyLFxuICAgICAgMTI3LFxuICAgICAgMTMwLFxuICAgICAgNTksXG4gICAgICAxNzYsXG4gICAgICA2MixcbiAgICAgIDg3LFxuICAgICAgODAsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3VjhSNjlZTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTM0MDkxMTI5OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzQ5MjY1OTA5MjI3NTk6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZnK1dFUS9iK0t1QVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOcHhDSUtLNGVJWWFMd1YvMTMxOXRHZkpXRTlrbk5wd0pjUE82RkxReVQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldVc0tlT1lWYU9qK2xpUi93L3ZMdkVRY3h1d3VSUkxadTVITHlURFV2MkhvOStwRDB6dkc3ZDZnZ2Qrb3ZpeHNRVWQxN2FsVjBLajUvbnJ2YXQxM0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1kVHcyVDI5VEhEK3V4OEdwRXJCOFcrQW5zMk95SXdxN2lVZEFXTUdRbXBFdUF1WUQvby84QzVLcElSM0hFT2tFNitwdmUxbUdkMjRBSlU2SmVXdWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEzNDA5MTEyOTozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODIyNTI4MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1Ba1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUFrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2lRSFNYODBCYlBxNmRycVZkU2pBdzlTMXpEMXp3dmQ4T3BRemp5VU1WYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDU0MTAzNjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODIxMTE4MDc0NVwifSIKfQ=="  // PUT your SESSION_ID 


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
