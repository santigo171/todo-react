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
    }, 4000);
  }, []);

  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos);
    } catch (err) {
      setError(err);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
