import { Component } from "../core/coreFile";

export default class NotFound extends Component {
  render() {
    this.el.classList.add("container", "not-found");
    this.el.innerHTML = /*html */ `
    <h1>
      존재하지 않는 페이지 입니다!
    </h1>
    `;
  }
}
