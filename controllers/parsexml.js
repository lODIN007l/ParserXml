export function get(url) {
  console.log(url);
  var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  return fetch(proxyUrl + url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((textResponse) => textResponse)
    .catch((error) => {
      console.log(error);
    });
}
