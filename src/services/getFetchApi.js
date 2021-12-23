export const fetchApi = (url) => {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      return {
        loading: false,
        error: null,
        data: data,
      };
    })
    .catch((error) => {
      return {
        loading: false,
        error,
        data: [],
      };
    });
};
