export default async function useClick(tagRepreComponet) {
  const tagRepreComponetR = document.querySelector(tagRepreComponet);

  return await new Promise((resolve) => {
    tagRepreComponetR.addEventListener("click", (e) => {
      const valorClick = e.target;
      resolve(valorClick);
    });
  });
}
