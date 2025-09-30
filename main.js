
const { URL, URLSearchParams } = require('url');

const date = "20220201";

const baseUrl = "https://bank.gov.ua/NBU_Exchange/exchange_site";

const url = new URL(baseUrl);

url.search = new URLSearchParams({
    date: date,
    json: ""
});

console.log(url.toString());

