export default async function useTags(){
    const P = await import("../../../components/index.js").then(module => module.default)
    return P  
  }