const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Reservation = require('./models/reservation');
const Client = require('./models/client');
const Account = require('./models/account');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
app.listen(3001);


app.use(express.json());
app.use(cookieParser());
app.use(cors());

const dbURI = "mongodb+srv://smoothcriminal5698:HCqu60DBOdHe60Pr@hotel.tglhez2.mongodb.net/Hotel?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log("Connected"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
    res.json({ success: true, userId: user._id, email: user.email });

} catch (error) {
  console.error(error);
  res.status(500).send('Internal Server Error');
}
});
app.post('/signup', async (req, res) => {
    try {
      const { email, password } = req.body;
      const newEmail = email;
      const existingUser = await Account.findOne({ email: newEmail });

      if (existingUser) {
        return res.status(401).json({ error: 'Already existing email' });
    }
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newAccount = new Account({
        email: newEmail,
        password: hashedPassword
      });
      
      await newAccount.save();
      const user = await Account.findOne({ email: newEmail });
      res.cookie('userId', user._id, { httpOnly: true });
      res.cookie('email', user.email, { httpOnly: true });
      res.json({ success: true, userId: user._id, email: user.email });
  

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
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
    let prix;
    if (chambre === "1") {
      prix = usersId === undefined ? 500 : 450;
  } else if (chambre === "2") {
      prix = usersId === undefined ? 600 : 540;
  } else if (chambre === "3") {
      prix = usersId === undefined ? 1000 : 900; 
  };

  if (promo === "SUMMER2024") {
      prix*=0.9;
    }
    const reserv = new Reservation({
        checkin: new Date(checkin),
        checkout: new Date(checkout),
        promo: promo,
        chambre: "chambre" + chambre,
        email: email,
        usersId: usersId === undefined ? " " : usersId.toString(),
        price: prix
    });
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
        reserv.save()
            .then((result) => {
                console.log("Reservation saved");
          })
          .catch(err => {
            console.log(err);
          });
    
        cl.save()
            .then((result) => {
              console.log("Client saved");
              res.send();
          })
          .catch(err => {
            console.log(err);
          });
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      });