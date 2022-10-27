export const fetchAPI = (name) => {
  return fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
    .then(r => r.json())
    .then(response => response)
    .catch(error => error)
}
