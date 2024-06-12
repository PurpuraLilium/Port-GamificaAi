import { Actor, CollisionType, Color, Engine, FadeInOut, Resource, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

export class expoScene extends Scene{
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000})
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Black
        let tiledMap = Resources.Mapa

        let offsetX = 138
        let offsetY = 100

        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),
        })

        this.camera.zoom = 1.3

        let jogador = new Player()

        jogador.z = 1

        this.add(jogador)

        let camadaObjetosColisores = tiledMap.getObjectLayers("objetosColisores")[0]

        console.log(camadaObjetosColisores)

        camadaObjetosColisores.objects.forEach(Objeto => {
            const objetoAtual = new Actor({
                name: Objeto.name,
                x: Objeto.x + offsetX + (Objeto.tiledObject.width! / 2),
                y: Objeto.y + offsetY + (Objeto.tiledObject.height! / 2),
                width: Objeto.tiledObject.width,
                height: Objeto.tiledObject.height,
                collisionType: CollisionType.Fixed
            })

            this.add(objetoAtual)
        })
    }
}

