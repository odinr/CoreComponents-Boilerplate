import HelloWorld from "./component.mjs";
const registerElement = () => window.customElements.define("hello-world", HelloWorld);
window.customElements ? registerElement() : window.addEventListener("WebComponentsReady", registerElement);