export default function useHeader(props) {
    document.querySelector("head").innerHTML += props["settings"];
  }