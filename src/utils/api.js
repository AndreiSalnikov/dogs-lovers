const factUrl = "https://dog-api.kinduff.com/api/facts";

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