class Post {
  getData(url, jsonBody) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonBody
    }).then((response) => response.json());
  }
}

class Get {
  getData(url) {
    return fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json());
  }
}

module.exports = {
  Post: Post,
  Get: Get
};