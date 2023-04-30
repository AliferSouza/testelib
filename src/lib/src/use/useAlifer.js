import updateSele from "../DOM/updateSele.js"

export default window.useAlifer =  (value) => {
  let count = value

  window.setCount = async (newState, tag) => {    
    count = newState     
    get();
    updateSele(tag, count)
  };

  window.get = ()=> {   
    return count
  }

  return [get, setCount];
};
