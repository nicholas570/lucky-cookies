const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const transporter = require('./config');

dotenv.config();

const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(express.static('public'));
app.use(express.json());

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      html: req.body.message,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later',
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly',
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later',
    });
  }
});

app.listen(3030, () => {
  'server start on port 3030';
});
