export default async function updateComponent(tag, props) {
     document.querySelector(await tag).innerHTML = await props();
}
  