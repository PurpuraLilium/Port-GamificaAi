import { TiledResource } from "@excaliburjs/plugin-tiled";
import { ImageSource, Loader } from "excalibur";
import logo from "./images/logo.png";
import logoV from "./images/logo-vertical.png";
import contole from "./images/controle.png";

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_paredes?url"
import tsxGenericPath from "./maps/tileset_generic?url"
import tsxEstoquePAth from "./maps/tleset_estoque?url"
import tsxBibliotecapath from "./maps/tileset_biblioteca?url"

import tmxMapaPath from "./maps/Showroom_map.tmx?url"

export const Resources = {
  Logo: new ImageSource(logo),
  LogoV: new ImageSource(logoV),
  Contole: new ImageSource(contole),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      {path: "Showroom_map.tmx", output: tmxMapaPath},
      {path: "Room_Builder_32x32.png", output: pngTilesetPath},
      {path: "tileset_paredes", output: tsxParedesPath},
      {path: "tileset_generic", output: tsxGenericPath},
      {path: "tleset_estoque", output: tsxEstoquePAth},
      {path: "tileset_biblioteca", output: tsxBibliotecapath}
    ]
  })

  
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
