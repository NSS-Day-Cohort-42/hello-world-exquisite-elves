import { useHeadsOfState } from "./HeadsOfStateDataProvider.js";
import { headsOfStateAsHTML } from "./headsOfStateHTMLMaker.js";

export const headOfStateList = () => { 
    const contentElement = document.querySelector(".headOfState__list")

    const headsOfState = useHeadsOfState()

    let headOfStateHTMLRep = ""
    for (const person of headsOfState) { 
        headOfStateHTMLRep += headsOfStateAsHTML(person)
    }

    contentElement.innerHTML += `
    <section class="country__list">
    <h3 class="country__listTitle">Heads of State</h3>
        ${headOfStateHTMLRep}
    </section>
    `
}