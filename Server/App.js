require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const PORT = 6001;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema");

const clientid =
  "737552285886-vi9q7217ig0e4pst7bnd4jvoq7urlu55.apps.googleusercontent.com";

const clientsecret = "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";

app.use(
  cors({
    origin: "http://localhost:5173", // Ensure React app is on this port
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies if needed
  })
);
app.use(express.json());

app.use(
  session({
    secret: "15672983hakdhfjkjdsd",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: clientid,
      clientSecret: clientsecret,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userdb.findOne({ googleId: profile.id });

        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });
          await user.save();
        }

        return done(null, user); // Correctly pass the user object
      } catch (error) {
        return done(error, null); // Handle errors
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//initialize google oauth

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173",
    failureRedirect: "http://localhost:5173/login",
  })
);

app.get("/login/success", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ message: "User login successful", user: req.user });
  } else {
    res.status(401).json({ message: "User not authenticated" });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5173");
  });
});

app.listen(PORT, () => {
  console.log(`server start at port no ${PORT}`);
});
