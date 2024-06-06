import { ImageSource, Loader } from "excalibur";
import logo from "./images/logo.png";
import logoV from "./images/logo-vertical.png";
import contole from "./images/controle.png";

export const Resources = {
  Logo: new ImageSource(logo),
  LogoV: new ImageSource(logoV),
  Contole: new ImageSource(contole)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
