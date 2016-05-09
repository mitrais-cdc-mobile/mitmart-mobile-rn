exports.getDataPOST = (url, jsonBody) => {
    return     fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: jsonBody
    }).then((response) => response.json());
}

exports.getDataGET = (url) => {
    return     fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json());
}