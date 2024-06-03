import { Color, Engine, Font, Label, Scene, TextAlign, vec } from "excalibur";

export class welcomeScene extends Scene{
    
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // configura o objeto para ser a frase de "bem-vindo"
            let frasebv = new Label({
                text: "Bem vindo ao Portfólio",
                width: 400,
                height: 50,
                pos: vec(engine.drawWidth / 2, 300),
                font: new Font({
                    color: Color.White,
                    size: 40,
                    textAlign: TextAlign.Center
                })
            })

        this.add(frasebv)
    }
}