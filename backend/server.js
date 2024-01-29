const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const Reservation = require('./models/reservation');
const Client = require('./models/client');
const Account = require('./models/account');
const Availability = require('./models/availability');

const keys = require('./config/keys');

const app = express();
app.listen(3001);


app.use(express.json());
app.use(cookieParser());
app.use(cors());

const dbURI = keys.mongodb.dbURI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

app.post('/signin', async (req, res) => {
    const { emails, passwords } = req.body;
    const newEmail = emails
    try {
      // Find the user in the database
      const user = await Account.findOne({ email: newEmail });
  
      if (!user || !(await bcrypt.compare(passwords, user.password))) {
        // User not found or incorrect password
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.cookie('userId', user._id, { httpOnly: true });
    res.cookie('email', user.email, { httpOnly: true });
    res.cookie('username', user.username, { httpOnly: true });
    res.json({ success: true, userId: user._id, email: user.email, username: user.username });

} catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
}
});
app.post('/signup', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newEmail = email;
      const existingUser = await Account.findOne({ email: newEmail });
      const existingUser2 = await Account.findOne({ username: username });

      if (existingUser) {
        return res.status(401).json({ error: 'Already existing email' });
    }
      if (existingUser2) {
      return res.status(401).json({ error: 'Already existing username, please select a different username' });
    }
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newAccount = new Account({
        username: username,
        email: newEmail,
        password: hashedPassword
      });
      
      await newAccount.save();
      const user = await Account.findOne({ email: newEmail });
      res.cookie('userId', user._id, { httpOnly: true });
      res.cookie('email', user.email, { httpOnly: true });
      res.cookie('username', user.username, { httpOnly: true });
      res.json({ success: true, userId: user._id, email: user.email, username: user.username });
  

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
      res.cookie('userId', req.user._id, { httpOnly: true });
      res.cookie('email', req.user.email, { httpOnly: true });
      res.cookie('username', req.user.username, { httpOnly: true });
      res.json({ success: true, userId: req.user._id, email: req.user.email, username: req.user.username });
});


app.post('/contact', (req, res) => {
    // Extracting form data
    const { name, email, message } = req.body;

    // Creating a Nodemailer transporter using SMTP
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com', // Your Gmail address
            pass: 'your-gmail-password' // Your Gmail password
        }
    });

    // Email message options
    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient@example.com', // Email address where you want to receive messages
        subject: 'Message from Paramount Hotel website contact form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Sending the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error'); // Sending error response to the client
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Success'); // Sending success response to the client
        }
    });
});

  app.post('/check-availability', async (req, res) => {
    try {
      const { checkin, checkout } = req.body;
  
      // Create an object to store availability status for each type
      const availabilityStatus = { A: true, B: true, C: true };
  
      // Loop through dates from checkin to checkout
      const currentDate = new Date(checkin);
      const endDate = new Date(checkout);
  
      while (currentDate < endDate) {
        const availabilityResult = await Availability.findOne({ date: currentDate });
  
        if (availabilityResult) {
          // Check if A, B, and C are greater than 0
          if (availabilityResult.A <= 0) {
            availabilityStatus.A = false;
          }
  
          if (availabilityResult.B <= 0) {
            availabilityStatus.B = false;
          }
  
          if (availabilityResult.C <= 0) {
            availabilityStatus.C = false;
          }
        }
  
        currentDate.setDate(currentDate.getDate() + 1);
      }
  
      res.json(availabilityStatus);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/reservation', (req, res) => {
    try {
    const {
      checkin,
      checkout,
      promo,
      chambre,
      firstName,
      lastName,
      nationality,
      phoneNumber,
      email,
      billingAddress,
      countryOrRegion,
      city
    } = req.body;
    const usersId = req.cookies.userId;
    let prix = 0;
    if (chambre === "A") {
      prix = usersId === undefined ? 54.78 : 49.30;
    } else if (chambre === "B") {
      prix = usersId === undefined ? 53.56 : 48.20;
    } else if (chambre === "C") {
      prix = usersId === undefined ? 94.78 : 85.30; 
    };

    if (promo === "SUMMER2024") {
      if (chambre === "A") {
      prix = usersId === undefined ? 49.30 : 43.82;
    } else if (chambre === "B") {
      prix = usersId === undefined ? 48.20 : 42.84;
    } else if (chambre === "C") {
      prix = usersId === undefined ? 85.30 : 75.80; 
    };
      prix*=0.9;
    }
    const cl = new Client({
      
      firstName: firstName,
      lastName: lastName,
      nationality: nationality,
      phoneNumber: phoneNumber,
      email: email,
      billingAddress: billingAddress,
      countryOrRegion: countryOrRegion,
      city: city
      
    });
    cl.save()
    .then((result) => {
      console.log("client ok")
      let clientId = result._id;
      const reserv = new Reservation({
        checkin: new Date(checkin),
        checkout: new Date(checkout),
        promo: promo,
        chambre: chambre,
        email: email,
        usersId: usersId === undefined ? " " : usersId.toString(),
        clientId: clientId,
        price: prix
    });
      reserv.save()
          .then(async (result) => {
              console.log("rerv saved")
              const checkinDate = new Date(checkin);
              const checkoutDate = new Date(checkout);
              const chambre = result.chambre;
              const currentDate = new Date(checkinDate);
              while (currentDate < checkoutDate) {
                let availabilityResult = await Availability.findOne({ date: currentDate });

                if (!availabilityResult) {
                  // If the document doesn't exist, create a new one with the default value
                  availabilityResult = new Availability({ date: currentDate, A: 20, B: 30, C: 10 });
                } 

              // Decrement A by 1
              availabilityResult[chambre] -= 1;
              // Save the updated or new document
              await availabilityResult.save();
              console.log("Availability updated for date:", currentDate);
              currentDate.setDate(currentDate.getDate() + 1);
            }

          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
      res.send(); 
    } catch (error) {
       console.error(error);
       res.status(500).send('Internal Server Error');
    }
  });