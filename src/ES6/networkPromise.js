const unirest = require("unirest");

const networkRequest = () => {
  return new Promise((resolve, reject) => {
    unirest
      .get("https://sampleendpoint.free.beeceptor.com/favicon.ico")
      .then(resolve)
      .catch(reject);
  });
};

networkRequest().then(data => {
  console.log(data.body);
});
 