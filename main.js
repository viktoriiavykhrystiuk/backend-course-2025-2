const https = require('https');
const fs = require('fs');
const { URL, URLSearchParams } = require('url');

const date = "20220201";

const nbuBaseUrl = new URL("https://bank.gov.ua/");

const params = new URLSearchParams({
  date: date,
  json: ""
});

nbuBaseUrl.search = params;

console.log(nbuBaseUrl.toString());

