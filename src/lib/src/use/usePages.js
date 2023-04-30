export default async function usePages(){
    const T = await import("../../../pages/index.js").then(module => module.default)
    return T
  }