import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene{

    elementoTexto2?: HTMLElement

    fadeOUtElement(elemento: HTMLElement){
        let opacidade = parseFloat(elemento.style.opacity)

        setInterval(()=> {
            if (opacidade > 0){
                opacidade -= 0.03
    
                elemento.style.opacity = opacidade.toString()
            }
        },20)
    }

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000})
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.elementoTexto2 = document.createElement("div") as HTMLElement
        this.elementoTexto2.style.opacity = "1"

        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame?.appendChild(this.elementoTexto2)

        this.elementoTexto2.classList.add("sobre-gamificacao")

        this.elementoTexto2.innerHTML = `<h2>O que é gamificação?</h2>
        <p>
        Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`

        let actorControlinho = new Actor({
            pos: vec(300 , engine.halfDrawHeight)
        })

        let imgconrole = Resources.Contole.toSprite()

        imgconrole.scale = vec(0.1 , 0.1)

        actorControlinho.graphics.add(imgconrole)

        this.add(actorControlinho)

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {

                this.fadeOUtElement(this.elementoTexto2!)

                engine.goToScene("exposicao")
            }
        })
}

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoTexto2?.remove
    }

}
    
