const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/qr/MY2JIUSBX5FJD1";
global.website=process.env.GURL || "https://wa.me/qr/MY2JIUSBX5FJD1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_28_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNixcbiAgICAgICAgODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPS1dHdXVrdWNmNjJockh0Vm9PVHJWdkdIU3VYdjNXaS94UndMTXI5aWVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjA3MzAwMjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVEQjY1MjhEOTAxMDlDNDA5MUMzQ0ZCMjAyOEQ5OUJDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM4MDQ4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6Zk5jRnVKV1FacWdkQ1Y4SUxFTW13XCIsXG4gIFwicGhvbmVJZFwiOiBcImMwOTYxNjhlLWFhNjQtNDQxNy05OTEzLTU5ZTA4NTE0MDU4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICA5MSxcbiAgICAgIDI0MCxcbiAgICAgIDYxLFxuICAgICAgMTc5LFxuICAgICAgMTM5LFxuICAgICAgNSxcbiAgICAgIDkzLFxuICAgICAgMTU0LFxuICAgICAgMTc0LFxuICAgICAgMjUsXG4gICAgICA1NixcbiAgICAgIDUwLFxuICAgICAgMTY1LFxuICAgICAgMTc1LFxuICAgICAgMTgzLFxuICAgICAgOTQsXG4gICAgICAxMzEsXG4gICAgICAyNDQsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICA4NCxcbiAgICAgIDEzOCxcbiAgICAgIDMxLFxuICAgICAgNzksXG4gICAgICAxNDMsXG4gICAgICA5MSxcbiAgICAgIDE2MyxcbiAgICAgIDE1MyxcbiAgICAgIDE2MSxcbiAgICAgIDI0NyxcbiAgICAgIDI1MCxcbiAgICAgIDg5LFxuICAgICAgMTM0LFxuICAgICAgNTQsXG4gICAgICAxODMsXG4gICAgICAwLFxuICAgICAgOSxcbiAgICAgIDIxMixcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlkzR1ZIRlBHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTIwNzMwMDIxOjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjkyMTgzMTA5NzU3MTk6ODFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8JajmPCdkbTwnZGo8J2Rv/Cdkb7wnZGs8J2Rs/CdkbNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZjQvNG9HRUwzWXE3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkp5VWplVmtWOTd1alBmalV3cXB1Z2lvNW9iRkpZL3ByWkFNSmlXUWl3U009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidkVxQmVqMExtKzRPS3ZNc2xXb2M3aVFNSmpwQjZBODJZZFN2L1RNbjNUSDFldWx4WmJtU2RHM3BrQjdKZUZ2Qkl5QzFlb2JQL0Y5T1VoTHpjMzVvRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiby92Q2l1dFBtUW5ub21CNVdCWVpaUUdQdk9oVlJGdTJ2ck1GRkJicjduYVpzYS9pK1hoQVBSRlhNS0IzMFJ0NUVZZmVhUDBzL0hBSHhRWDBKZVoyakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyMDczMDAyMTo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzgwNDgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTdHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJN0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaNi9Ld1dkaEpDMlZNSkp6Y1B4OVlBNmlGaTAxOHJGNTZPdTR3OUpWSitzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MzM2ODAzODgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNTA0MTMwMDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "✅",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𖣘𝑴𝑨𝑿𝑾𝑬𝑳𝑳-𝑴𝑫♡●",
  ownername:process.env.OWNER_NAME|| "MAX",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
