export const getItem = (key: string) => {
    const value = localStorage.getItem(key);
    try {
      if (!value) {
        return null;
      }
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
};
  
export const setItem = (key: string, value: any) => {
    if (typeof value === 'object' && value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
};

export const clear = () => localStorage.clear();
export const removeItem = (item: string) => localStorage.removeItem(item);
  