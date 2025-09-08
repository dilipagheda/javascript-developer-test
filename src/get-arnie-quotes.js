const { httpGet } = require("./mock-http-interface");

async function processUrl(url) {
  const response = await httpGet(url);
  const body = JSON.parse(response.body);
  if (response.status === 200) {
    return { "Arnie Quote": body.message };
  } else {
    return { FAILURE: body.message };
  }
}

const getArnieQuotes = async (urls) => {
  const requests = urls.map(processUrl);
  return Promise.all(requests);
};

module.exports = {
  getArnieQuotes,
};
