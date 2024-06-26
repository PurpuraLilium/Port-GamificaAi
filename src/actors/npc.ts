import { Actor, Animation, CollisionType, Color, Engine, Graphic, Sprite, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../resources";

export class npc extends Actor {
    constructor(posicao: Vector, cor: Color , nome: string){
        super({
            pos: posicao,
            width: 32,
            height: 40,
            name: nome,
            color: cor,
            collisionType: CollisionType.Fixed
            

        })
    }

    onInitialize(engine: Engine<any>): void {
        const npcASpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcASprite,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0,
                }
            }
        })
        const npcBSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcBSprite,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0,
                }
            }
        })
        const npcCSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcCSprite,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0,
                }
            }
        })

        let duracao = 70
        const npcAidle = new Animation({
            frames: [
                {graphic: npcASpriteSheet.getSprite(18, 1)},
                {graphic: npcASpriteSheet.getSprite(19, 1)},
                {graphic: npcASpriteSheet.getSprite(20, 1)},
                {graphic: npcASpriteSheet.getSprite(21, 1)},
                {graphic: npcASpriteSheet.getSprite(22, 1)},
                {graphic: npcASpriteSheet.getSprite(23, 1)},
            ],
            frameDuration: duracao
        })
        const npcBidle = new Animation({
            frames: [
                {graphic: npcBSpriteSheet.getSprite(18, 1)},
                {graphic: npcBSpriteSheet.getSprite(19, 1)},
                {graphic: npcBSpriteSheet.getSprite(20, 1)},
                {graphic: npcBSpriteSheet.getSprite(21, 1)},
                {graphic: npcBSpriteSheet.getSprite(22, 1)},
                {graphic: npcBSpriteSheet.getSprite(23, 1)},
            ],
            frameDuration: duracao
        })
        const npcCidle = new Animation({
            frames: [
                {graphic: npcCSpriteSheet.getSprite(18, 1)},
                {graphic: npcCSpriteSheet.getSprite(19, 1)},
                {graphic: npcCSpriteSheet.getSprite(20, 1)},
                {graphic: npcCSpriteSheet.getSprite(21, 1)},
                {graphic: npcCSpriteSheet.getSprite(22, 1)},
                {graphic: npcCSpriteSheet.getSprite(23, 1)},
            ],
            frameDuration: duracao
        })
        this.graphics.add("npcA-idle", npcAidle)
        this.graphics.add("npcB-idle", npcBidle)
        this.graphics.add("npcC-idle", npcCidle)

        let spritenpc = this.name

        this.graphics.use(spritenpc)
    }
}