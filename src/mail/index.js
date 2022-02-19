const nodemailer = require('nodemailer')

export const mail = nodemailer.createTransport({
  host: 'c1430849.ferozo.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'testemail@sabatechno.com.ar',
    pass: 'Soyunkapo2009',
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
})
