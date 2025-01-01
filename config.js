//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349078143169";
global.owner = process.env.OWNER_NUMBER || "2349078143169";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZpY1R1cFBtOUZNT3FXTm9ZUWNIRkF1MWYwZ3dtR1d6ei9MRHdRelZWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGlaOTFRM282YWRQTjlIUWZ0UmdDMmtrM3hnVWY2Q2w0QndORUpmQkpGMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJR1JLelV1SFZMcnpSWGZwMTg3WFpYUFNGKzZkb0wzRUxTdi9neXdBYlg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4WVc5TEFrL1dOSlZRbVMwOHE0aGU2T3d4ZTlibEMzaXVqZU1XUXNjQlhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdOenlVZG40dEd2bXFTWEdEbU51R29kcThPdzY2RXVrZTZSNHBUK1pxR3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlBUi81UjNObURuZHdGci9qWEhWaXVKaHZIMVliOXN1STVWcWpYMVF4ekU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNPSkpqYVovSjhXZWRER1NlRGdiREYzSW41bjlFYm91LzZwVVBnNHlFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWtuRDhXVzlvclorMmM1aXNtR2dhbUYyZTJMM1Q1TDFVbWxSWWlOUkRGdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhaT0xLdEYzQ0MvbGxPdXZ4azExbURnWTRTVEJJTjZQL1lVVUtYcUZLSHBuMnRvY1FYektyWXpPRUlsQitQWXZzdjROVlhQaW9jLzFnVmR2RmQzdUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJja3pjaVBVRXZmL0JCdERMMFJKcWlLRCt1Y2JtQTcrLzk1Mm1XbGR2WjVzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNzgxNDMxNjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjgwRkRCNzE3QjFFM0JCMDAyMUQ4Rjg1RUVFMUYwMDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTc0ODkxM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUDdRTk5xNWZSdGFwLXBTMlYwTTRUQSIsInBob25lSWQiOiJjYTdmOGM5Ni1hMTBjLTQ4ZTctYWUxNy1lOWEzY2ZiNmQ0NTIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3Rrb0JTV3ZVYXYvZlVLc2VtTE9SRmFWallnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpxeEgxMDR6cWducG9iM01CZll2N2ZQdHRpdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJEMzE1MjVXRCIsIm1lIjp7ImlkIjoiMjM0OTA3ODE0MzE2OToxMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEZXN0cm8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05QK2piZ0dFSi9hMWJzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhnOHJYcUoxVkgrRTc3RU5FQnNYSHdEZHNtRVRQUWJrekFYOUltaW1FbHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitBeWg0RlI3ekhLb1BWRWV5djZYRlFaMjQ3TjNMSEVZRkVaeU0vS0JGQ1YrSnZjV3pDVkoyS211VUVEMHRENEVNVnlpczl3T1RYY0dQOTIvUDRpdERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSWkRnNjl1ZS8xc2VubUlsc1VuQ1A4WmNnR0pobUpkbVJ3U2xpK1daMFhhMmFvd0xuS0h6Z0p1VFZCTkRPVFJnTzREOHd5WjhkSTIyZDF3cXZlL1dEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzgxNDMxNjk6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZklQSzE2aWRWUi9oTyt4RFJBYkZ4OEEzYkpoRXowRzVNd0YvU0pvcGhKYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTc0ODkwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOTloifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Destro",
  author: process.env.PACK_AUTHER || "Destro",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "Destro",
  ownername: process.env.OWNER_NAME || "Destro",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Destro").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
