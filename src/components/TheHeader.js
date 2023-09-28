import { Component } from "../core/coreFile";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          { name: "Search", href: "#/" },
          { name: "Movie", href: "#/movie?id=tt4520988" },
          { name: "About", href: "#/about" },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /*html */ `
    <a href="#/" class="logo"><span>OMDBAPI</span>.COM</a>
    <nav>
      <ul>
        ${this.state.menus
          .map((menu) => {
            const href = menu.href.split("?")[0];
            const hash = location.hash.split("?")[0];
            const isActive = href === hash;
            return /*html */ `
          <li>
            <a href="${menu.href}" class="${isActive ? "active" : null}">${
              menu.name
            }</a>
          </li>
          `;
          })
          .join("")}
      </ul>
    </nav>
    <a href="#/about" class="user">
      <img src="https://avatars.githubusercontent.com/u/105327508?v=4" alt="User"/>
    </a>
    `;
  }
}
