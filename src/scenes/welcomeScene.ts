import { Actor, Blink, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class welcomeScene extends Scene{

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000})
    }
    
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Black


            let frasebv = new Label({
                text: "Bem vindo ao Portfólio",
                width: 400,
                height: 50,
                pos: vec(engine.drawWidth / 2, 300),
                font: new Font({
                    color: Color.White,
                    size: 40,
                    textAlign: TextAlign.Center,
                    family: "Anta"
                })
            })

        this.add(frasebv)

        let actorlogo = new Actor({
            pos: vec(engine.drawWidth / 2, 430)
        })

        let imglogo = Resources.Logo.toSprite()

        imglogo.scale = vec(0.4 , 0.4)

        actorlogo.graphics.add(imglogo)

        this.add(actorlogo)
        

        let fraseEnter = new Label({
            text: 'Pressione "Enter" para iniciar...',
            width: 100,
            height: 50,
            pos: vec(engine.drawWidth / 2, 630),
            font: new Font({
                color: Color.White,
                size: 20,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })
        
        this.add(fraseEnter)

        fraseEnter.actions.repeatForever(context => {
            context.fade(0, 1000)
            context.fade(1, 1000)
        })
        
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                engine.goToScene("historia")
            }
        })
    }
}