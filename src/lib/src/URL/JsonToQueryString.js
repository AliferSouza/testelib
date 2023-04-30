export default function JSONToQueryString(props) {
    const texto = JSON.stringify(props);
    const parametroQyuery = `?data=${texto}`;
    return parametroQyuery;
  }
  