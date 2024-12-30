//backend/routes/captcha.js

const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/verify-captcha", async (req, res) => {
  const { token } = req.body;
  const secretKey = process.env.CAPTCHA_SECRETKEY; // Replace with your Google reCAPTCHA secret key

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    if (response.data.success) {
      res.status(200).send({ message: "CAPTCHA verified successfully!" });
    } else {
      res.status(400).send({ message: "CAPTCHA verification failed." });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Server error during CAPTCHA verification." });
  }
});

module.exports = router;

