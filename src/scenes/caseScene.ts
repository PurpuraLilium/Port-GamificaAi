import { Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, SpriteSheet, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { npc } from "../actors/npc";

export class caseScene extends Scene{
    private objetointeract: any

    private txtCena: string = ""

    elementoTexto?: HTMLElement


    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Black

            
       
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

            let npcA = new npc(vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),Color.Rose,"npcA")
            npcA.scale = vec(10,10)
            
            this.add(npcA)
    
    
        }

        if (this.objetointeract.nomeActor == "mesa_stand_b"){
            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
    
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)
    
            this.elementoTexto.classList.add("sobre-gamifica")
    
            this.elementoTexto.innerHTML = `<h2>Case B</h2>
            <p>FIzaemos algo, esqueci o que...</p>`

            let npcB = new npc(vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),Color.Rose,"npcA")
            npcB.scale = vec(10,10)

            this.add(npcB)
        }

        if (this.objetointeract.nomeActor == "mesa_stand_c"){
            this.elementoTexto = document.createElement("div") as HTMLElement
            this.elementoTexto.style.opacity = "1"
    
            let containerGame = document.querySelector(".container-game") as HTMLElement
            containerGame?.appendChild(this.elementoTexto)
    
            this.elementoTexto.classList.add("sobre-gamifica")
    
            this.elementoTexto.innerHTML = `<h2>Case C</h2>
            <p>Nesse case trabalhamos fazendo alguma coisa</p>`

            let npcC = new npc(vec(this.engine.drawWidth - 300, this.engine.halfDrawHeight),Color.Rose,"npcA")
            npcC.scale = vec(10,10)

            this.add(npcC)
          
        }
    }
}