import { Color, Engine, FadeInOut, Keys, KillEvent, Scene, SceneActivationContext, SpriteSheet, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { npc } from "../actors/npc";

export class caseScene extends Scene{
    private objetointeract: any


    elementoTexto?: HTMLElement
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
            duration: 500
        })
    }
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Black

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc) {

                this.fadeOUtElement(this.elementoTexto!)

                engine.goToScene("exposicao")
            }
        })
       
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        this.objetointeract = context.data

        console.log(this.objetointeract)

        if (this.objetointeract.nomeActor == "mesa_stand_a"){
            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
    
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)
    
            this.elementoTexto.classList.add("sobre-gamifica")
    
            this.elementoTexto.innerHTML = `<h2>Case A</h2>
            <p>Alguma coisa foi feita aqui</p>`

            let npcs = new npc(vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),Color.Rose,"npcA-idle")
            npcs.scale = vec(10,10)
            
            this.add(npcs)
    
    
        }

        if (this.objetointeract.nomeActor == "mesa_stand_b"){
            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
    
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)
    
            this.elementoTexto.classList.add("sobre-gamifica")
    
            this.elementoTexto.innerHTML = `<h2>Case B</h2>
            <p>FIzaemos algo, esqueci o que...</p>`

            let npcs = new npc(vec(this.engine.drawWidth - 300, this.engine. halfDrawHeight), Color.Blue,"npcB-idle")
            npcs.scale = vec(10,10)

            this.add(npcs)
        }

        if (this.objetointeract.nomeActor == "mesa_stand_c"){
            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
    
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)
    
            this.elementoTexto.classList.add("sobre-gamifica")
    
            this.elementoTexto.innerHTML = `<h2>Case C</h2>
            <p>Nesse case trabalhamos fazendo alguma coisa</p>`

            let npcs = new npc(vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),Color.Rose,"npcC-idle")
            npcs.scale = vec(10,10)

            this.add(npcs)
          
        }
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.clear()
    }
}