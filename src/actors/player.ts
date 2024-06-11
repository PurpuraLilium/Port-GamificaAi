import { Actor, Color, Engine, Keys, vec } from "excalibur";

export class Player extends Actor{
    private velocidade: number = 180

    constructor(){
        super({
            pos: vec(500, 500),
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red
        
        })
    }
    onInitialize(engine: Engine<any>): void {
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
    }
}