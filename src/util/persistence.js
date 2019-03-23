const getLocalStorage = key => JSON.parse(localStorage.getItem(key));

const setLocalStorage = (key, item) => {
  const items = getLocalStorage(key) || [];
  const all = [...items, item];

  localStorage.setItem(key, JSON.stringify(all));
};

export { getLocalStorage, setLocalStorage };
