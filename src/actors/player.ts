import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Keys, Resource, Scene, Side, Sprite, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor{
    private velocidade: number = 180

    private temobjprox: boolean = false
    private ultcolisor?: Collider

    constructor(posicao: Vector){
        super({
            pos: posicao,
            width: 32,
            height: 40,
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
                    y: 0,
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
                {graphic: playerSpriteSheet.getSprite(6, 1)},
                {graphic: playerSpriteSheet.getSprite(7, 1)},
                {graphic: playerSpriteSheet.getSprite(8, 1)},
                {graphic: playerSpriteSheet.getSprite(9, 1)},
                {graphic: playerSpriteSheet.getSprite(10, 1)},
                {graphic: playerSpriteSheet.getSprite(11, 1)},
            ],
            frameDuration: duracao
        })
        this.graphics.add("left-idle", leftidle)
        this.graphics.add("right-idle", rightidle)
        this.graphics.add("front-idle", frontidle)
        this.graphics.add("back-idle", backidle)

        engine.input.keyboard.on("press", (event) =>{
            if(event.key == Keys.Right || event.key == Keys.D){
                this.graphics.use("right-idle")
            }
            else if(event.key == Keys.Left || event.key == Keys.A){
                this.graphics.use("left-idle")
            }
            else if(event.key == Keys.Up || event.key == Keys.W){
                this.graphics.use("back-idle")
            }
            else if(event.key == Keys.Down || event.key == Keys.S){
                this.graphics.use("front-idle")
            }

        })
        
        this.graphics.use("back-idle")

        // walk animation

        const leftwalk = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(12, 2)},
                {graphic: playerSpriteSheet.getSprite(13, 2)},
                {graphic: playerSpriteSheet.getSprite(14, 2)},
                {graphic: playerSpriteSheet.getSprite(15, 2)},
                {graphic: playerSpriteSheet.getSprite(16, 2)},
                {graphic: playerSpriteSheet.getSprite(17, 2)},
            ],
            frameDuration: duracao
        })
        const rightwalk = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 2)},
                {graphic: playerSpriteSheet.getSprite(1, 2)},
                {graphic: playerSpriteSheet.getSprite(2, 2)},
                {graphic: playerSpriteSheet.getSprite(3, 2)},
                {graphic: playerSpriteSheet.getSprite(4, 2)},
                {graphic: playerSpriteSheet.getSprite(5, 2)},
            ],
            frameDuration: duracao
        })
        const frontwalk = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(18, 2)},
                {graphic: playerSpriteSheet.getSprite(19, 2)},
                {graphic: playerSpriteSheet.getSprite(20, 2)},
                {graphic: playerSpriteSheet.getSprite(21, 2)},
                {graphic: playerSpriteSheet.getSprite(22, 2)},
                {graphic: playerSpriteSheet.getSprite(23, 2)},
            ],
            frameDuration: duracao
        })
        const backwalk = new Animation({
            frames: [
                {graphic: playerSpriteSheet.getSprite(6, 2)},
                {graphic: playerSpriteSheet.getSprite(7, 2)},
                {graphic: playerSpriteSheet.getSprite(8, 2)},
                {graphic: playerSpriteSheet.getSprite(9, 2)},
                {graphic: playerSpriteSheet.getSprite(10, 2)},
                {graphic: playerSpriteSheet.getSprite(11, 2)},
            ],
            frameDuration: duracao
        })
        this.graphics.add("left-walk", leftwalk)
        this.graphics.add("right-walk", rightwalk)
        this.graphics.add("front-walk", frontwalk)
        this.graphics.add("back-walk", backwalk)

        engine.input.keyboard.on("hold", (event) =>{
           switch(event.key){
            case Keys.Right:
            case Keys.D:
                this.graphics.use("right-walk")
                break
            case Keys.Left:
            case Keys.A:
                this.graphics.use("left-walk")
                break
            case Keys.Up:
            case Keys.W:
                this.graphics.use("back-walk")
                break
            case Keys.Down:
            case Keys.S:
                this.graphics.use("front-walk")
                break
           }
        
        })
        engine.input.keyboard.on("release", (event) =>{
           switch(event.key){
            case Keys.Right:
            case Keys.D:
                this.graphics.use("right-idle")
                break
            case Keys.Left:
            case Keys.A:
                this.graphics.use("left-idle")
                break
            case Keys.Up:
            case Keys.W:
                this.graphics.use("back-idle")
                break
            case Keys.Down:
            case Keys.S:
                this.graphics.use("front-idle")
                break
           }
        })

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

    onPreCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        this.temobjprox = true

        this.ultcolisor = other

        
    }

    onPreUpdate(engine: Engine<any>, delta: number): void {
        if (this.ultcolisor && this.pos.distance(this.ultcolisor.worldPos) > 46){
            this.temobjprox = false

            console.log("está longe")
        }
    }

}