import { Actor, CollisionType, Color, Engine, FadeInOut, Resource, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { npc } from "../actors/npc";

export class expoScene extends Scene{
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000})
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Black

        

        let musicafundo = Resources.ritimadabgm

        musicafundo.loop = true
        musicafundo.play(0.5)

        let tiledMap = Resources.Mapa

        let offsetX = 138
        let offsetY = 100

        tiledMap.addToScene(this, {
            pos: vec(offsetX, offsetY),
        })

        this.camera.zoom = 1.3

        let spawnPoint = tiledMap.getObjectsByName("player_spawn")[0]

        let jogador = new Player(vec(spawnPoint.x + offsetX, spawnPoint.y + offsetY))

        jogador.z = 2

        this.add(jogador)

        let npcSpawnPointA = tiledMap.getObjectsByName("npc_a")[0]
        let npcSpawnPointB = tiledMap.getObjectsByName("npc_b")[0]
        let npcSpawnPointC = tiledMap.getObjectsByName("npc_c")[0]

        let npcA = new npc(vec(npcSpawnPointA.x + offsetX, npcSpawnPointA.y + offsetY),Color.Rose,"npcA-idle")
        let npcB = new npc(vec(npcSpawnPointB.x + offsetX, npcSpawnPointB.y + offsetY), Color.Violet,"npcB-idle")
        let npcC = new npc(vec(npcSpawnPointC.x + offsetX, npcSpawnPointC.y + offsetY), Color.Vermilion,"npcC-idle")

        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        this.camera.strategy.lockToActor(jogador)

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

