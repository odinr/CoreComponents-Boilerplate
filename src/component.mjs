import {html, LitElement} from "@polymer/lit-element";

export default class HelloWorld extends LitElement {
  constructor(){
    super();
  }
  _render() {
    return html`
      <style>:host{display:block; color:red;}</style>
      <p>Hello world!</p>
    `;
  }
}