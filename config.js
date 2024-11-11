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
global.caption = process.env.CAPTION || global.caption || "© ARSLAN-MD" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923200199895";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923200199895";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_24_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NixcbiAgICAgICAgNTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdhNEN4OFFzNWF1cU5STHVRd2FEN3NCWXRwN3dyUVJSbThvRG9lNG8xUk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInp6OFViMjB6UTZPSFVYcVEtd2p2dndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTgzOWM0MWMtNTgxOS00NzgwLTlhNWItMTgyMGU1MmQxMTNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgOTEsXG4gICAgICAyNDQsXG4gICAgICAyMTYsXG4gICAgICAyMyxcbiAgICAgIDg1LFxuICAgICAgMTUzLFxuICAgICAgMTg1LFxuICAgICAgOTEsXG4gICAgICAxMTYsXG4gICAgICAxMTEsXG4gICAgICA5MCxcbiAgICAgIDk4LFxuICAgICAgMjQsXG4gICAgICAxODUsXG4gICAgICAyMTMsXG4gICAgICAxNTAsXG4gICAgICAxMjEsXG4gICAgICA4NSxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAxNTMsXG4gICAgICAxODIsXG4gICAgICAyMjIsXG4gICAgICAyNDgsXG4gICAgICAxMjQsXG4gICAgICAyNTIsXG4gICAgICAxMDksXG4gICAgICAyMjIsXG4gICAgICAxODMsXG4gICAgICAxMjksXG4gICAgICAyNDgsXG4gICAgICAxNDUsXG4gICAgICA1NyxcbiAgICAgIDIyOSxcbiAgICAgIDMwLFxuICAgICAgMjIxLFxuICAgICAgMTgzLFxuICAgICAgMjQ2LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTFDQ05DUTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIwMDE5OTg5NToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY1NzY0NDU2MTM2OTI0OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00yWjNvZ0VFS2ZHeHJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibGRoRXJlM1I4UFFaS1k2RE0zZXo5T055eTN6YmhkRlg2QS9vVkxhRE9FYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0K2ZEeEYvRnM1OTZUZUx5d1E2TDl1Z1pZOXd0TFpaTlVFNURKNnZ0Vkd0UUZuT3hhWVJha09HWFpSbCtRZ1duZHR5MERkdHdwZGFXenRYcVNvcXJCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLOGRnRTAza2hSdkZKU2J3M29MdGptVzJaZHZoSExGZkd1V3pTSkNMamVDZFZFUEprblE2aXBBWVJFNFF2a0Q5c2NJNk5jOEJnTWIxcVYxMUFpditoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMDAxOTk4OTU6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzMDYyODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNSFlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1IWS5qc29uIjogIntcImtleURhdGFcIjpcIlhaWFJqdGZOZlUwREJJb0JNL2U1NFhRMEVPMkNEV3A4d2RqUUNpOGpyb1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5MjA2MjQwNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ARSLAN-MD🥀💔 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ARSLAN-MD🥀💔",
  ownername:process.env.OWNER_NAME|| "ARSLAN-MD🥀💔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
