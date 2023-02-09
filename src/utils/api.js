const factUrl = "https://dog-api.kinduff.com/api/facts";
const predictionUrl = "https://www.eightballapi.com/api"
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const getFact = () => {
  return fetch(`${factUrl}`, {
    credentials: 'include',
    method: "GET",
  }).then(checkResponse)
};

export const getPrediction = () => {
  return fetch(`${predictionUrl}`, {
    method: "GET",
  }).then(checkResponse)
}
