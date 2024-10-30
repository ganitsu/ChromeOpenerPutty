"use strict";

const wwebVersion = '2.2412.54';

const qrcode = require('qrcode-terminal');
const { Client, Poll, MessageMedia , PollSendOptions, LocalAuth, MessageAck, MessageTypes } = require('whatsapp-web.js');

// Create a new instance of the Client with specific configurations
const client = new Client({
    authStrategy: new LocalAuth(),
  puppeteer: {
      headless: true,
    //   executablePath: '/usr/bin/chromium-browser', //Use system installed chromium
      args: ['--no-sandbox', '--disable-gpu', '--disable-setuid-sandbox'],
    },
    //   Fetch the WhatsApp web version from a remote source
    webVersionCache: {
        type: 'remote',
        remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
    },
});


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});





const cron = require('node-cron');
const fs = require('fs');
const { PassThrough } = require('stream');
const { all } = require('axios');
const { Console, group } = require('console');



client.on('ready', async () => {
    console.log('Client is ready!');
    
    const chati = await get_chatId_by_name(client, "Messi")
    

});

client.initialize();