import React from "react";

function useLocalStorage(itemName, defaultValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(defaultValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        } else {
          parsedItem = defaultValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }, 5000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
