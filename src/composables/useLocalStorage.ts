export function useLocalStorage() {
  function getValue<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Error getting value for key "${key}":`, error);
      return null;
    }
  }

  function setValue<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting value for key "${key}":`, error);
    }
  }

  return {
    getValue,
    setValue,
  };
}
