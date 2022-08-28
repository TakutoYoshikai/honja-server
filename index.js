const Transliterator = require("honja");
const honja = new Transliterator();
const express = require("express");
const app = express();

app.get("/All/:text", (req, res) => {
  const text = req.params.text;
  const result = honja.convertAll(text);
  
  res.status(200).json(result);
});

app.get("/:lang/:text", (req, res) => {
  const lang = req.params.lang;
  const text = req.params.text;
  const result = honja.convert(text, lang);
  
  res.status(200).json({
    result
  });
});

module.exports = app;
