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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349120730021";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_37_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2cGJMeHo5SGNWemNIMVdUaGNiT1JlYjFaYXNIMURlbElpeEo5SER4eDlJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsdW9FMjBpblJyS09xeXotRDEyOEl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ4NjhlYmQ5LTE5NjAtNDJjNi05OWEzLWVhZjVmYjZmMjBiOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDIsXG4gICAgICAxNjcsXG4gICAgICA0LFxuICAgICAgNCxcbiAgICAgIDE3NyxcbiAgICAgIDIxNSxcbiAgICAgIDUwLFxuICAgICAgMTExLFxuICAgICAgOTYsXG4gICAgICAxMDksXG4gICAgICAyMDMsXG4gICAgICA5NSxcbiAgICAgIDM2LFxuICAgICAgMTMwLFxuICAgICAgNixcbiAgICAgIDE0MSxcbiAgICAgIDEyMCxcbiAgICAgIDEwNCxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgMjA0LFxuICAgICAgMjI4LFxuICAgICAgMTM4LFxuICAgICAgMzEsXG4gICAgICAxNjYsXG4gICAgICA0MyxcbiAgICAgIDE2NSxcbiAgICAgIDcxLFxuICAgICAgMTQwLFxuICAgICAgOSxcbiAgICAgIDE4OSxcbiAgICAgIDIwOSxcbiAgICAgIDI0MixcbiAgICAgIDk0LFxuICAgICAgNTIsXG4gICAgICAyOCxcbiAgICAgIDIxMyxcbiAgICAgIDE0OSxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdYWjNKN042XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY0NjYxMzc1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNQVhXRUxMXCIsXG4gICAgXCJsaWRcIjogXCIxMDE3OTYwOTM4Mjk5Nzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2RjNUWVFqL21ydEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQkFqRTErL3lzQytzQ3RvcEpDQ1YvR1lsZGpyNno3SVZJRmExc0t0UXV5TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0dDNsK2c3N0owMW8wNHZRbDRuODAxNmZlYTVhWGljSHlFVWdJT3kramE5amdsRVJFNTVrRHpxUXQ2TUdETU0yVlRKdGJZYXpxcU9rR2xVWUdpVGNCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSemRJOUErQlpSZXJDbHF6eDgvVEpuRjlpY1dNQy9NT1lLeEtaQkU3NVdFWXA3UG8rWEc5aGl6TFJwbFNmN3g0WFVJV0VsOGZIRElYbURrRjkyNFpEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY0NjYxMzc1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM4NDY1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUEyL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTIvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
