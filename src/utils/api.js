const factUrl = "https://dog-api.kinduff.com/api/facts";
const imageUrl = "https://dog.ceo/api/breeds/image/random"
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const getFact = () => {
  return fetch(`${factUrl}`, {
    method: "GET",
  }).then(checkResponse)
};

export const getPrediction = () => {
  return fetch(`${imageUrl}`, {
    method: "GET",
  }).then(checkResponse)
}
