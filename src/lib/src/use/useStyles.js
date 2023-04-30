export default async function useStyles(props) {
    console.log(props);
    document.querySelector(await "style").innerHTML = await props;
  }