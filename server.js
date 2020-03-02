const ejs = require('ejs')
require('dotenv').config()
const nodemailer = require('nodemailer')

ejs.renderFile('./views/index.ejs', { name: 'Hendrix'}, (err, html)=>{

    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })
    if(err){
        console.log('Erro EJS render File')
    }else{

        // Step 2
        let mailOptions = {
            from: process.env.USER,
            to: process.env.TOSEND,
            subject: 'Testing Good Day!',
            html: html
        }

        // Step 3
        transporter.sendMail(mailOptions)
            .then((response)=>{
                console.log('Email sent!!!!')
            })
            .catch((e)=> {
                console.log('Error occurs', e)
            })
    }
})



