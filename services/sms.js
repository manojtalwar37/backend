const SendSMS = async (to,msg) =>  {
    const accountSid ="ACcc61273e1ec4413df862678a1e1117e9";
const authToken = "44b5d4a243d5890d618b8c29d95daa30";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: msg,
     from: '+14065005230',
     to: '+91'+to
   });
//  console.log(message.sid);
}
module.exports = SendSMS;