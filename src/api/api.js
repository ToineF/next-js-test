import { Client } from "@hyper-fetch/core";

export const getCountries = new Client({
  url: "https://restcountries.com/v3.1/all",
}).createRequest()({
  endpoint: "/",
});
