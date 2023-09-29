import { Store } from "../core/coreFile";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}
export default new Store<State>({
  photo: "https://avatars.githubusercontent.com/u/105327508?v=4",
  name: "EUNSOLY / LeeEunSol",
  email: "dmsthf9596@gamil.com",
  blog: "https://eunsoly.tistory.com/",
  github: "https://github.com/EUNSOLY",
  repository: "https://github.com/EUNSOLY/vanillajs-movie-app",
});
