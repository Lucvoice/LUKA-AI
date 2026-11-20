const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || '';
const dev = process.env.OWNER_NUMBER || '255768619068';

const waUsername = process.env.WHATSAPP_USERNAME || 'lucvoice';

const devUsernames = (process.env.DEV_USERNAMES
    ? process.env.DEV_USERNAMES.split(',').map(u => u.trim().replace(/^@/, '').toLowerCase())
    : ['lucvoice', 'lukabrand', 'lucvoice', 'mayra']
);

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'false';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '⚡ Status Viewed By LUKA-AI';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💚,💜';

const noPrefixWords = ['none', 'null', 'nil', 'off', 'empty', 'no', 'noprefix'];
const rawPrefix = (process.env.PREFIX || '').trim();
const botPrefix = noPrefixWords.includes(rawPrefix.toLowerCase()) ? '' : (rawPrefix || '.');
const botAuthor = process.env.OWNER_NAME || "ʟᴜᴋᴀʙʀᴀɴᴅ";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2040";
const botUrl = process.env.BOT_PIC || "https://files.catbox.moe/wxfs9s.png";
const botGurl = process.env.BOT_GURL || "https://github.com/Lucvoice/LUKA-AI";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "LUKA-AI";
const botPackname = process.env.BOT_PACKNAME || "ʟᴜᴋᴀʙʀᴀɴᴅ";
const botMode = process.env.BOT_MODE || "public";
const botSessionName = process.env.BOT_SESSION_NAME || "LUKA~";
const autosocialdownload = process.env.AUTO_SOCIAL_DOWNLOAD || "false";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  waUsername,
  devUsernames,
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  noPrefixWords,
  botAuthor,
  autosocialdownload,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
