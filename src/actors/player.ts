import { Actor, Animation, CollisionType, Color, Engine, Keys, Resource, Sprite, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor{
    private velocidade: number = 180

    constructor(posicao: Vector){
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        
        })
    }
    onInitialize(engine: Engine<any>): void {
        const playerSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.playerSprite,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 8,
                }
            }
        })

        let duracao = 70

        // idle animation

        const leftidle = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(12, 1)},
                {graphic: playerSpriteSheet.getSprite(13, 1)},
                {graphic: playerSpriteSheet.getSprite(14, 1)},
                {graphic: playerSpriteSheet.getSprite(15, 1)},
                {graphic: playerSpriteSheet.getSprite(16, 1)},
                {graphic: playerSpriteSheet.getSprite(17, 1)},
            ],
            frameDuration: duracao
        })
        const rightidle = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 1)},
                {graphic: playerSpriteSheet.getSprite(1, 1)},
                {graphic: playerSpriteSheet.getSprite(2, 1)},
                {graphic: playerSpriteSheet.getSprite(3, 1)},
                {graphic: playerSpriteSheet.getSprite(4, 1)},
                {graphic: playerSpriteSheet.getSprite(5, 1)},
            ],
            frameDuration: duracao
        })
        const frontidle = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(18, 1)},
                {graphic: playerSpriteSheet.getSprite(19, 1)},
                {graphic: playerSpriteSheet.getSprite(20, 1)},
                {graphic: playerSpriteSheet.getSprite(21, 1)},
                {graphic: playerSpriteSheet.getSprite(22, 1)},
                {graphic: playerSpriteSheet.getSprite(23, 1)},
            ],
            frameDuration: duracao
        })
        const backidle = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(7, 1)},
                {graphic: playerSpriteSheet.getSprite(8, 1)},
                {graphic: playerSpriteSheet.getSprite(9, 1)},
                {graphic: playerSpriteSheet.getSprite(10, 1)},
                {graphic: playerSpriteSheet.getSprite(11, 1)},
                {graphic: playerSpriteSheet.getSprite(12, 1)},
            ],
            frameDuration: duracao
        })
        this.graphics.add("left-idle", leftidle)
        
        this.graphics.use("left-idle")

        engine.input.keyboard.on("hold", (event) => {
            switch(event.key){
                case Keys.Left:
                case Keys.A:
                    this.vel.x = -this.velocidade
                    break;
                case Keys.Right:
                case Keys.D:
                    this.vel.x = this.velocidade
                    break;
                case Keys.Up:
                case Keys.W:
                    this.vel.y = -this.velocidade
                    break;
                case Keys.Down:
                case Keys.S:
                    this.vel.y = + this.velocidade
                    break;
                default:
                    this.vel.x = 0
                    this.vel.y = 0
                    break;
            }
        })
        engine.input.keyboard.on("release", (event) => {
            switch(event.key){
                case Keys.Left:
                case Keys.A:
                    this.vel.x = 0
                    break;
                case Keys.Right:
                case Keys.D:
                    this.vel.x = 0
                    break;
                case Keys.Up:
                case Keys.W:
                    this.vel.y = 0
                    break;
                case Keys.Down:
                case Keys.S:
                    this.vel.y = 0
                    break;
                }
        })


    }
}