'use server'

import { Clien as client } from "@sendgrid/client";

client.setApiKey(process.env.SENDGRID_API_KEY);

const data = {
  url: "http://email.myhostname.com",
  hostname: "myhostname.com",
  spam_check: false,
  send_raw: true,
};

const request = {
  url: `/v3/user/webhooks/parse/settings`,
  method: "POST",
  body: data,
};

client
  .request(request)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(response.body);
  })
  .catch((error) => {
    console.error(error);
  });