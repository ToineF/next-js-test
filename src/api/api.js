import { Client } from "@hyper-fetch/core";

export const client = new Client({
  url: "https://restcountries.com/v3.1/all",
});

export const getCountries = client.createRequest()({
  endpoint: "/",
});
