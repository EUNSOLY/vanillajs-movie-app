import App from "./App";
import router from "./router";

const root = document.querySelector("#root");
root?.append(new App().el);

router();
