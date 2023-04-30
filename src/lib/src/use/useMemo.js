export default function useMemo(func) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {      
        return cache[key];
      }
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    }
  }