const { URL, URLSearchParams } = require('url');

const date = "202202"; // лютий 2022

const nbuBaseUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/reserves");

const params = new URLSearchParams({
  date: date,
  json: ""
});

nbuBaseUrl.search = params.toString();

console.log(nbuBaseUrl.toString());

